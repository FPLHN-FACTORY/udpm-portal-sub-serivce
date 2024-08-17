import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRef, useState} from "react";
// import emails, {EmailJSResponseStatus} from "@emailjs/browser";




interface dataStudent {
    studentName: string;
    studentEmail: string;
    studentSDT: string;
    studentContent: string;
}


const RegexStudentName = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơẠ-ỹ\s]{5,}$/;
const RegexStudentEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|fpt\.edu\.vn)$/;
const RegexVietnamesePhoneNumber = /^(0[3-9][0-9]{8}|(0[2][0-9]{8}))$/;


const schema = yup.object().shape({
    studentName: yup
        .string()
        .trim()
        .required('Tên sinh viên là bắt buộc')
        .matches(RegexStudentName, 'Tên sinh viên phải có ít nhất 5 ký tự và không chứa ký tự đặc biệt'),
    studentEmail: yup.string()
        .trim()
        .required('Email sinh viên là bắt buộc')
        .matches(RegexStudentEmail, 'Email sinh viên phải có đuôi là gmail.com hoặc fpt.edu.vn'),
    studentSDT: yup.string()
        .trim()
        .required('SĐT sinh viên là bắt buộc')
        .matches(RegexVietnamesePhoneNumber, 'SĐT không hợp lệ'),
    studentContent:yup.string()
        .trim()
        .required('Nội dung là bắt buộc'),
});





export const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { handleSubmit, control, formState: { errors } } = useForm<dataStudent>({
        resolver: yupResolver(schema),
    });

    const formRef = useRef<HTMLFormElement>(null);

    const sendExcel = async (formData: FormData) => {
    
        try {
            const responseExcel = await fetch("https://script.google.com/macros/s/AKfycbzumOSxzcZv0aIWtFjB7il_FH5dG644mxNyknrZa6qLobRSzo5SNzokPHyThREDduOY9A/exec", {
              method: "POST",
              body: formData,
              mode: 'no-cors',
             
            });
           
            // Giả định thành công nếu không có lỗi xảy ra
            console.log(responseExcel)
            toast.success("Gửi form liên hệ thành công");
            // if(responseExcel.ok === false){
            //     window.location.reload();
            // }
          } catch (error) {
            // Bắt lỗi nếu xảy ra trong quá trình fetch
            console.error('Fetch error:', error);
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại.");
          }
            
    
        
    };
    
    const onSubmit = async (data: dataStudent) => {
       
        setIsSubmitting(true);
    
        const formData = new FormData();
        const date = new Date();
        const formattedDate = date.toLocaleString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    
        formData.append("timestamp", formattedDate);
        formData.append("StudentName", data.studentName);
        formData.append("StudentEmail", data.studentEmail);
        formData.append("StudentSDT", data.studentSDT);
        formData.append("StudentContent", data.studentContent);
      
        try {
            console.log( formData)
            await sendExcel(formData);
        } catch (e) {
            console.error("Error submitting form:", e);
            toast.error("Đã có lỗi xảy ra. Vui lòng thử lại.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="grid gap-4 md:gap-4 mb-[100px] mt-[50px]">
   <ToastContainer/>
<h3 className="text-center text-4xl md:text-5xl font-bold">
                    Liên hệ{" "}
                    <span className="bg-gradient-to-b  text-transparent bg-clip-text text-orange-600">
                        FPLHN-FACTORY
                    </span>
                </h3>
                <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
                    Điền thông tin của bạn để nhận phản hồi của chúng tôi.
                </p>

            <Controller
                name="studentName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <div className="min-w-72 w-1/2 mx-auto">
                        <span className='text-[20px] font-semibold'>Họ và tên<span className='text-red-600'>*</span></span>
                        <Input {...field} placeholder="Nhập Họ và tên"
                            className="bg-muted/50 dark:bg-muted/80 mb-1" />
                        {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName.message}</p>}
                    </div>
                )}
            />
            <Controller
                name="studentEmail"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <div className="min-w-72 w-1/2 mx-auto">
                        <span className='text-[20px] font-semibold'>Email<span className='text-red-600'>*</span></span>
                        <Input {...field} placeholder="Nhập Email"
                            className="bg-muted/50 dark:bg-muted/80 mb-1" />
                        {errors.studentEmail && <p className="text-red-500 text-sm">{errors.studentEmail.message}</p>}
                    </div>
                )}
            />
            <Controller
                name="studentSDT"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <div className="min-w-72 w-1/2 mx-auto">
                        <span className='text-[20px] font-semibold'>SĐT Liên hệ<span className='text-red-600'>*</span></span>
                        <Input {...field} placeholder="Nhập SĐT liên hệ"
                            className="bg-muted/50 dark:bg-muted/80 mb-1" />
                        {errors.studentSDT && <p className="text-red-500 text-sm">{errors.studentSDT.message}</p>}
                    </div>
                )}
            />
            <Controller
                name="studentContent"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <div className="min-w-72 w-1/2 mx-auto">
                        <span className='text-[20px] font-semibold'>Nội dung liên hệ<span className='text-red-600'>*</span></span>
                        <Input {...field} placeholder="Nhập nội dung liên hệ"
                            className="bg-muted/50 dark:bg-muted/80 mb-1" />
                        {errors.studentContent && <p className="text-red-500 text-sm">{errors.studentContent.message}</p>}
                    </div>
                )}
            />
            <Button className="mx-auto bg-orange-500 hover:bg-orange-600 px-7 py-5" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Đang gửi...' : 'Gửi liên hệ'}
            </Button>
        </form>
    );
  };