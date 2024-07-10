import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import logoBig1 from "@/assets/images/oniamey/nobg/svg/logo-big-1.svg";
import logoBig2 from "@/assets/images/oniamey/nobg/svg/logo-big-2.svg";
import logoBig3 from "@/assets/images/oniamey/nobg/svg/logo-big-3.svg";

interface TestimonialProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    href: string;
}

const testimonials: TestimonialProps[] = [
    {
        image: logoBig1,
        name: "Quản Lý Phân Quyền",
        userName: "@PortalIdentity_module",
        comment: "Module Quản Lý Dữ Liệu Tập Trung, Phân Quyền Và Chuyển Hướng.",
        href: "#",
    },
    {
        image: logoBig2,
        name: "Quản Lý Sự Kiện",
        userName: "@PortalEvent_module",
        comment: "Module Quản Lý Sự Kiện Toàn Quốc Trong Hệ thống FPT Polytechnic.",
        href: "#",
    },

    {
        image: logoBig3,
        name: "Quản Lý Bài Viết",
        userName: "@PortalArticles_module",
        comment: "Module Quản lý Bài Viết Toàn Quốc Trong Hệ thống FPT Polytechnic.",
        href: "#",
    },
    {
        image: logoBig1,
        name: "Quản Lý Tutor",
        userName: "@PortalTutor_module",
        comment: "Module Quản Lý Tutor / Trợ Giảng Bộ Môn Ứng Dụng Phần Mềm.",
        href: "#",
    },
    {
        image: logoBig2,
        name: "Module Đăng Ký Dự Án Tốt Nghiệp",
        userName: "@PortalRegisterGraduation_module",
        comment: "Module Đăng Ký Dự Án Tốt Nghiệp Bộ Môn Ứng Dụng Phần Mềm!",
        href: "#",
    },
    {
        image: logoBig3,
        name: "Module WebChat Extension",
        userName: "@PortalWebChat_module",
        comment: "Module nhúng WebChat vào các module khác trong hệ thống giáo dục FPT Polytechnic.",
        href: "#",
    },
];

export const Testimonials = () => {
    return (
        <section
            id="products"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold">
                Khám Phá
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
                    Sản Phẩm{" "}
        </span>
                Của FPLHN-FACTORY
            </h2>

            <p className="text-xl text-muted-foreground pt-4 pb-8">
                1 số sản phẩm được xây dựng bởi đội ngũ, thành viên xưởng dự án.
            </p>

            <div
                className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                {testimonials.map(
                    ({image, name, userName, comment, href}: TestimonialProps) => (
                        <Card
                            key={userName}
                            className="max-w-md md:break-inside-avoid overflow-hidden"
                        >
                            <a href={href}>
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <Avatar>
                                        <AvatarImage
                                            alt=""
                                            src={image}
                                        />
                                        <AvatarFallback>OM</AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col">
                                        <CardTitle className="text-lg">{name}</CardTitle>
                                        <CardDescription>{userName}</CardDescription>
                                    </div>
                                </CardHeader>

                                <CardContent>{comment}</CardContent>
                            </a>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
