import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "Cách thức tham gia?",
        answer: "Hãy gửi địa chỉ mail cho chúng tôi để nhận được hỗ trợ với tùy chọn Đào Tạo.",
        value: "1",
    },
    {
        question: "Lộ trình cụ thể như thế nào?",
        answer:
            "Hãy gửi địa chỉ mail cho chúng tôi để nhận được hỗ trợ với tùy chọn Nhận Thêm Thông Tin.",
        value: "2",
    },
    {
        question:
            "Làm thế nào để trở thành thành viên xưởng dự án?",
        answer:
            "Bạn sẽ làm tất cả các bài kiểm tra của chúng tôi theo cấp độ, và tiến đến vòng bảo vệ, phỏng vấn.",
        value: "3",
    },
    {
        question: "Lộ trình training có thể rút gọn không?",
        answer: "Có! Lộ trình của chúng tôi không cố định mà phụ thuộc vào khả năng lập trình của các bạn.",
        value: "4",
    },
    {
        question:
            "Cách nhanh nhất để trở thành thành viên xưởng dự án?",
        answer:
            "Hãy gửi địa chỉ mail cho chúng tôi để nhận được hỗ trợ với tùy chọn " +
            "Thử Thách để làm bài kiểm tra cuối cùng của lộ trình đào tạo.",
        value: "5",
    },
];

export const FAQ = () => {
    return (
        <section
            id="faq"
            className="container py-24 sm:py-32 bg-image"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Các{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
          Câu Hỏi
        </span>
                {" "}Thường Gặp
            </h2>

            <Accordion
                type="single"
                collapsible
                className="w-full AccordionRoot"
            >
                {FAQList.map(({question, answer, value}: FAQProps) => (
                    <AccordionItem
                        key={value}
                        value={value}
                    >
                        <AccordionTrigger className="text-left">
                            <h1 className="text-lg">{value}.{question}</h1> 
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            {/* <h1 className="font-medium mt-4 text-xl">
                Vẫn còn thắc mắc?{" "}
                <a
                    rel="noreferrer noopener"
                    href="#recruiment-form"
                    className="text-primary transition-all border-primary hover:border-b-2"
                >
                    Contact us
                </a>
            </h1> */}
        </section>
    );
};
