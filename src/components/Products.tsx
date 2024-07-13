import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import logoBigBIT from "@/assets/images/logo/bit/transparent/svg/logo-fpl/logo/logo-no-text.svg";
import {useNavigate} from "react-router-dom";
import titleIdentity from "@/assets/images/products/identity/title/title1.jpg"
import titleArticle from "@/assets/images/products/articles/title/title1.jpg"
import titleEvent from "@/assets/images/products/event/title/title1.jpg"
import titleRegisterGraduation from "@/assets/images/products/resigerdatn/title/title1.jpg"
// import titleEvent from "@/assets/images/products/event/title/title1.jpg"

interface Products {
    imageLogo?: string;
    name: string;
    userName: string;
    comment: string;
    href: string;
    imageProduct?: string;
}

const products: Products[] = [
    {
        imageLogo: logoBigBIT,
        name: "Quản Lý Phân Quyền",
        userName: "@PortalIdentity_module",
        comment: "Module Quản Lý Dữ Liệu Tập Trung, Phân Quyền Và Chuyển Hướng.",
        href: "/products/module?portal-identity",
        imageProduct: titleIdentity,
    },
    {
        imageLogo: logoBigBIT,
        name: "Quản Lý Sự Kiện",
        userName: "@PortalEvent_module",
        comment: "Module Quản Lý Sự Kiện Toàn Quốc Trong Hệ thống FPT Polytechnic.",
        href: "/products/module?portal-event",
        imageProduct: titleEvent,
    },

    {
        imageLogo: logoBigBIT,
        name: "Quản Lý Bài Viết",
        userName: "@PortalArticles_module",
        comment: "Module Quản lý Bài Viết Toàn Quốc Trong Hệ thống FPT Polytechnic.",
        href: "/products/module?portal-articles",
        imageProduct: titleArticle,
    },
    // {
    //     imageLogo: logoBigBIT,
    //     name: "Quản Lý Tutor",
    //     userName: "@PortalTutor_module",
    //     comment: "Module Quản Lý Tutor / Trợ Giảng Bộ Môn Ứng Dụng Phần Mềm.",
    //     href: "/products/module?portal-tutor",
    //     imageProduct: titleIdentity,
    // },
    {
        imageLogo: logoBigBIT,
        name: "Module Đăng Ký Dự Án Tốt Nghiệp",
        userName: "@PortalRegisterGraduation_module",
        comment: "Module Đăng Ký Dự Án Tốt Nghiệp Bộ Môn Ứng Dụng Phần Mềm!",
        href: "/products/module?portal-register-graduation",
        imageProduct: titleRegisterGraduation,
    },
    // {
    //     image: logoBigBIT,
    //     name: "Module WebChat Extension",
    //     userName: "@PortalWebChat_module",
    //     comment: "Module nhúng WebChat vào các module khác trong hệ thống giáo dục FPT Polytechnic.",
    //     href: "/products/module?portal-web-chat",
    // },
    // {
    //     image: logoBigBIT,
    //     name: "Quản Lý Tutor",
    //     userName: "@aaa",
    //     comment: "Module Quản Lý Tutor / Trợ Giảng Bộ Môn Ứng Dụng Phần Mềm.",
    //     href: "/products/module?",
    // },
    // {
    //     image: logoBigBIT,
    //     name: "Module Đăng Ký Dự Án Tốt Nghiệp",
    //     userName: "@aaaa",
    //     comment: "Module Đăng Ký Dự Án Tốt Nghiệp Bộ Môn Ứng Dụng Phần Mềm!",
    //     href: "/products/module?",
    // },
    // {
    //     image: logoBigBIT,
    //     name: "Module WebChat Extension",
    //     userName: "@aa",
    //     comment: "Module nhúng WebChat vào các module khác trong hệ thống giáo dục FPT Polytechnic.",
    //     href: "/products/module?",
    // },
];

export const Products = () => {
    const navigate = useNavigate();
    return (
        <section
            id="products"
            className="container py-6 sm:py-12"
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
                className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2
                lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                {products.map(
                    ({imageLogo, name, userName, comment, href, imageProduct}: Products) => (
                        <Card
                            key={userName}
                            className="max-w-md md:break-inside-avoid overflow-hidden
                            ease-in-out cursor-pointer hover:shadow-lg"
                            onClick={() => navigate(href)}
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar>
                                    <AvatarImage
                                        alt=""
                                        src={imageLogo}
                                    />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                    <CardTitle className="text-lg">{name}</CardTitle>
                                    <CardDescription>{userName}</CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent>{comment}</CardContent>

                            <CardFooter>
                                <img
                                    src={imageProduct}
                                    alt="About feature"
                                    className="w-[200px] lg:w-[300px] mx-auto"
                                />
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
