import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRef, useState} from "react";
import emails, {EmailJSResponseStatus} from "@emailjs/browser";

interface dataStudent {
    studentId: string;
    studentName: string;
    studentEmail: string;
    studentSemester: string;
    studentNominee: string;
    studentOptions: string;
}

const RegexStudentId = /^PH\d{5}$/;
const RegexStudentName = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơẠ-ỹ\s]{5,}$/;
const RegexStudentEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|fpt\.edu\.vn)$/;


const schema = yup.object().shape({
    studentId: yup
        .string()
        .trim()
        .required('Mã sinh viên là bắt buộc')
        .matches(RegexStudentId, 'Mã sinh viên không hợp lệ (ví dụ hợp lệ: PH32178)'),
    studentName: yup
        .string()
        .trim()
        .required('Tên sinh viên là bắt buộc')
        .matches(RegexStudentName, 'Tên sinh viên phải có ít nhất 5 ký tự và không chứa ký tự đặc biệt'),
    studentEmail: yup.string()
        .trim()
        .required('Email sinh viên là bắt buộc')
        .email('Định dạng email không hợp lệ')
        .matches(RegexStudentEmail, 'Email sinh viên phải có đuôi là gmail.com hoặc fpt.edu.vn'),
    studentSemester: yup.string().required('Học kỳ hiện tại của sinh viên là bắt buộc'),
    studentNominee: yup.string().required('Vị trí ứng tuyển là bắt buộc'),
    studentOptions: yup.string().required('Lựa chọn đầu vào là bắt buộc'),
});

export const GoogleForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {handleSubmit, control, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const env = import.meta.env;
    const formRef = useRef<HTMLFormElement>(null);

    const sendExcel = async (formData: FormData) => {
        const responseExcel = await fetch("https://script.google.com/macros/s/AKfycbww8Y69nZ96JQe8YCqpMj8z8Xxs40xcxOCwaVPaSdyPGq6UdXLJ1GOzqImeHULJLasX/exec", {
            method: "POST",
            body: formData,
        });
        if (responseExcel.ok) {
            console.log(responseExcel)
            toast.success("Gửi form ứng tuyển thành công, Vui lòng check thông tin của bạn tại mail!");
        } else {
            toast.error("Gửi form ứng tuyển thất bại!");
        }
    }

    const sendMailTemplate = (template: string) => {
        if (formRef.current) {
            emails.sendForm(
                env.VITE_SERVICE_ID,
                template,
                formRef.current,
                env.VITE_PUBLIC_KEY
            ).then((res: EmailJSResponseStatus) => {
                console.log(res, 'Mail Pass');
            }).catch((err: EmailJSResponseStatus) => {
                console.log(err);
            });
        }
    }

    const onSubmit = (data: dataStudent) => {
        setIsSubmitting(true);
        const formData = new FormData();
        const date = new Date(Date.now());
        const formattedDate = date.toLocaleString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

        formData.append("timestamp", formattedDate);
        formData.append("StudentId", data.studentId);
        formData.append("StudentName", data.studentName);
        formData.append("StudentEmail", data.studentEmail);
        formData.append("StudentSemester", data.studentSemester);
        formData.append("StudentNominee", data.studentNominee);
        formData.append("StudentOptions", data.studentOptions);
        try {
            console.log(formData)
            sendExcel(formData).then(() => {
                sendMailTemplate(env.VITE_TEMPLATE_ID_STUDENT);
                sendMailTemplate(env.VITE_TEMPLATE_ID_FPL);
            })
        } catch (e) {
            console.error("Error submitting form:", e);
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="recruiment-form">
            <ToastContainer/>
            {/* <hr className="w-11/12 mx-auto"/> */}

            <div className="container py-24 sm:py-32">
                <h3 className="text-center text-4xl md:text-5xl font-bold">
                    Ứng Tuyển{" "}
                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
                        FPLHN-FACTORY
                    </span>
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Điền thông tin của bạn để nhận phản hồi của chúng tôi.
                </p>

                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:gap-4">
                    <Controller
                        name="studentId"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <div className="min-w-72 w-1/2 mx-auto">
                                    <span className='text-[17px] font-semibold '>Mã số sinh viên<span className='text-red-600'>*</span></span>
                                <Input {...field} placeholder="Nhập mã sinh viên" className="bg-muted/50 dark:bg-muted/80 mb-1 mt-3"/>
                                {errors.studentId && <p className="text-red-500 text-sm">{errors.studentId.message}</p>}
                            </div>
                        )}
                    />
                    <Controller
                        name="studentName"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <div className="min-w-72 w-1/2 mx-auto">
                                 <span className='text-[17px] font-semibold '>Họ và tên<span className='text-red-600'>*</span></span>
                                <Input {...field} placeholder="Nhập họ và tên"
                                       className="bg-muted/50 dark:bg-muted/80 mb-1 mt-3"/>
                                {errors.studentName &&
                                    <p className="text-red-500 text-sm">{errors.studentName.message}</p>}
                            </div>
                        )}
                    />
                    <Controller
                        name="studentEmail"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <div className="min-w-72 w-1/2 mx-auto">
                                <span className='text-[17px] font-semibold '>Email<span className='text-red-600'>*</span></span>
                                <Input {...field} placeholder="Nhập email"
                                       className="bg-muted/50 dark:bg-muted/80 mb-1 mt-3"/>
                                {errors.studentEmail &&
                                    <p className="text-red-500 text-sm">{errors.studentEmail.message}</p>}
                            </div>
                        )}
                    />
                    <Controller
                        name="studentSemester"
                        control={control}
                        defaultValue="Kỳ 1"
                        render={({field}) => (
                            <div className="min-w-72 w-1/2 mx-auto">
                                <span className='text-[17px] font-semibold '>Học kì hiện tại<span className='text-red-600'>*</span></span>
                                <select {...field}
                                        className="block w-full rounded-md border border-input px-2 py-2 text-sm bg-muted/50 dark:bg-muted/80 mt-3">
                                    <option value="Kỳ 1">Kỳ 1</option>
                                    <option value="Kỳ 2">Kỳ 2</option>
                                    <option value="Kỳ 3">Kỳ 3</option>
                                    <option value="Kỳ 4">Kỳ 4</option>
                                    <option value="Kỳ 5">Kỳ 5</option>
                                    <option value="Kỳ 6">Kỳ 6</option>
                                </select>
                                {errors.studentSemester &&
                                    <p className="text-red-500 text-sm">{errors.studentSemester.message}</p>}
                            </div>
                        )}
                    />
                    <Controller
                        name="studentNominee"
                        control={control}
                        defaultValue="Developer"
                        render={({field}) => (
                            <div className="min-w-72 w-1/2 mx-auto">
                                <span className='text-[17px] font-semibold '>Vị trí muốn ứng tuyển<span className='text-red-600'>*</span></span>
                                <select {...field}
                                        className="block w-full rounded-md border border-input px-2 py-2 text-sm bg-muted/50 dark:bg-muted/80 mt-3">
                                    <option value="Developer">Developer</option>
                                    <option value="Tester">Tester</option>
                                </select>
                                {errors.studentNominee &&
                                    <p className="text-red-500 text-sm">{errors.studentNominee.message}</p>}
                            </div>
                        )}
                    />
                    <Controller
                        name="studentOptions"
                        control={control}
                        defaultValue="Đào Tạo Theo Lộ Trình Dựa Vào Kỳ Học Và Nguyện Vọng."
                        render={({field}) => (
                            <div className="min-w-72 w-1/2 mx-auto">
                                <span className='text-[17px] font-semibold '>Chọn lộ trình đào tạo<span className='text-red-600'>*</span></span>
                                <select {...field}
                                        className="block w-full rounded-md border border-input px-2 py-2 text-sm bg-muted/50 dark:bg-muted/80 mt-3 mb-3">
                                    <option value="Đào Tạo Theo Lộ Trình Dựa Vào Kỳ Học Và Nguyện Vọng.">Đào Tạo Theo Lộ
                                        Trình Dựa Vào Kỳ Học Và Nguyện Vọng.
                                    </option>
                                    <option value="Làm Bài Kiểm Tra Đầu Vào Của FPLHN-FACTORY">Làm Bài Kiểm Tra Đầu Vào
                                        Của FPLHN-FACTORY
                                    </option>
                                </select>
                                {errors.studentOptions &&
                                    <p className="text-red-500 text-sm  ">{errors.studentOptions.message}</p>}
                            </div>
                        )}
                    />
                    <Button className="mx-auto text-white bg-orange-500 hover:bg-orange-600" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Đang gửi...' : 'Gửi ứng tuyển'}
                    </Button>
                </form>
            </div>

            {/* <hr className="w-11/12 mx-auto"/> */}
        </section>
    );
};
