import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

interface PricingProps {
    title: string;
    popular: PopularPlanType;
    price: string;
    description: string;
    buttonText: string;
    benefitList: string[];
    href: string;
}

const pricingList: PricingProps[] = [
    {
        title: "Developer",
        popular: 0,
        price: "12 members",
        description: "Còn 10 vị trí ứng tuyển Developer tại FPLHN-FACTORY.",
        buttonText: "Ứng tuyển ngay",
        benefitList: [
            "Dành cho sinh viên kỳ 1 - 4 ngành Phát Triển Phần Mềm FPLHN.",
            "Thiết kế test method, test plan, test cases",
            "Hiểu biết với các trình quản lý source code (GIT).",
            "Có kỹ năng tư duy logic và thuật toán tốt, phân tích và giải quyết vấn đề.",
            "Kiến thức về các cách giao thức giữa client-server (REST, HTTP, JSON). ",
            "Kiến thức về Lập trình hướng đối tượng.",
            "Có khả năng viết code, tập trung vào hiệu suất, có thể tái sử dụng và dễ hiểu.",
            "Kinh nghiệm thiết kế và phát triển web services được viết dựa trên kiến trúc REST.",
            "Khả năng làm việc trong môi trường không ngừng thay đổi và phát triển liên tục.",
            "Vượt qua bài kiểm tra cuối cùng, bảo vệ và phỏng vấn"
        ],
        href: "#recruiment-form",
    },
    {
        title: "Tester",
        popular: 0,
        price: "3 members",
        description: "Còn 3 vị trí ứng tuyển Tester tại FPLHN-FACTORY.",
        buttonText: "Ứng tuyển ngay",
        benefitList: [
            "Dành cho sinh viên kỳ 1 - 4 ngành Phát Triển Phần Mềm FPLHN.",
            "Có kinh nghiệm xây dựng quy trình Test Plan tổng thể, thực hiện Test.",
            "Có định hướng trở thành tester.",
            "Có ham muốn tìm hiểu, thử nghiệm cái mới về chuyên môn",
            "Có tinh thần đòi hỏi sản phẩm làm ra có độ hoàn thiện.",
        ],
        href: "#recruiment-form",
    },
    // {
    //     title: "Nhận Thêm Thông Tin",
    //     popular: 0,
    //     price: "Kỳ 1 - 6",
    //     description:
    //         "Nhận chi tiết thông tin training và nội quy FPLHN-FACTORY.",
    //     buttonText: "Liên hệ ngay",
    //     benefitList: [
    //         "Thông tin chi tiết từ FPLHN-FACTORY",
    //         // "8 GB Storage",
    //         // "Upto 10 pages",
    //         "Nhận hỗ trợ từ FPLHN-FACTORY",
    //     ],
    // },
];

export const Recruitment = () => {
    return (
        <section
            id="recruitment"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Cơ Hội
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
                    Nghề Nghiệp{" "}
        </span>
                Từ FPLHN-FACTORY
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Chúng tôi đang tìm kiếm tuyển dụng thành viên ở các vị trí.
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {pricingList.map((pricing: PricingProps) => (
                    <Card
                        key={pricing.title}
                        className={
                            pricing.popular === PopularPlanType.YES
                                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                                : ""
                        }
                    >
                        <CardHeader>
                            <CardTitle className="flex item-center justify-between">
                                {pricing.title}
                                {pricing.popular === PopularPlanType.YES ? (
                                    <Badge
                                        variant="secondary"
                                        className="text-sm text-primary"
                                    >
                                        Phổ biến nhất
                                    </Badge>
                                ) : null}
                            </CardTitle>
                            <div>
                                <span className="text-3xl font-bold">{pricing.price}</span>
                                <span className="text-muted-foreground"> / PTPM</span>
                            </div>

                            <CardDescription>{pricing.description}</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <a href={pricing.href}><Button className="w-full">{pricing.buttonText}</Button></a>
                        </CardContent>

                        <hr className="w-4/5 m-auto mb-4" />

                        <CardFooter className="flex">
                            <div className="space-y-4">
                                {pricing.benefitList.map((benefit: string) => (
                                    <span
                                        key={benefit}
                                        className="flex"
                                    >
                    <Check className="text-green-500" />{" "}
                                        <h3 className="ml-2">{benefit}</h3>
                  </span>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
