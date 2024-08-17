import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logoBigBIT from "@/assets/images/logo/bit/transparent/svg/logo-fpl/logo/logo-no-text.svg";
import titleIdentity from "@/assets/images/products/identity/title/title4.jpg";
import titleIdentity2 from "@/assets/images/products/identity/title/title2.jpg";
import titleIdentity3 from "@/assets/images/products/identity/title/title3.jpg";

import titleArticle from "@/assets/images/products/articles/title/title1.jpg";
import titleArticle2 from "@/assets/images/products/articles/title/title2.jpg";
import titleArticle3 from "@/assets/images/products/articles/title/title3.png";


import titleEvent from "@/assets/images/products/event/title/title4.jpg";
import titleEvent2 from "@/assets/images/products/event/title/title2.jpg";
import titleEvent3 from "@/assets/images/products/event/title/title3.jpg";


import titleRegisterGraduation from "@/assets/images/products/resigerdatn/title/title4.png";
import titleRegisterGraduation2 from "@/assets/images/products/resigerdatn/title/title2.jpg";
import titleRegisterGraduation3 from "@/assets/images/products/resigerdatn/title/title3.png";


import titlepdt1 from "@/assets/images/products/phatdethi/title/title1.png";
import titlepdt2 from "@/assets/images/products/phatdethi/title/title2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";

// {{ CSS }}
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import titleEvent from "@/assets/images/products/event/title/title1.jpg"

interface Products {
  imageLogo?: string;
  name: string;
  userName: string;
  comment: string;
  detail:string;
  href: string;
  imageProduct1: string;
  imageProduct2: string;
  imageProduct3: string;
  video: string; // Thay đổi kiểu dữ liệu này thành string
}

const products: Products[] = [
  {
    imageLogo: logoBigBIT,
    name: "Module Đăng Ký Dự Án Tốt Nghiệp",
    detail:"Modudel đã được triển khai với toàn quốc sinh viên FPTPolytechnic để sinh viên đăng kí đồ ắn tối nghiệp ",
    userName: "@PortalRegisterGraduation_module",
    comment: "Module Đăng Ký Dự Án Tốt Nghiệp Bộ Môn Ứng Dụng Phần Mềm.",
    href: "/products/module?portal-register-graduation",
    imageProduct1: titleRegisterGraduation,
    imageProduct2: titleRegisterGraduation2,
    imageProduct3: titleRegisterGraduation3,
    video: "https://www.youtube.com/embed/3m-wldKKWfY?si=qMPkCmrDRz-hLlf3", // Chỉ lưu URL video
  },
  {
    imageLogo: logoBigBIT,
    name: "Module Phát đề thi",
    detail:"Modudel đã được sử dụng để sinh viên ngành ứng dụng phần khi thi thực hành cuối kì",
    userName: "@PortalRegisterGraduation_module",
    comment: "Module Phát Đề Thi Bộ Môn Ứng Dụng Phần Mềm.",
    href: "/products/module?portal-register-graduation",
    imageProduct1: titlepdt1,
    imageProduct2: titlepdt2,
    imageProduct3: titlepdt2,
    video: "https://www.youtube.com/embed/EXPbpL4Cd64?si=XCfMXaP1haDONW91", // Chỉ lưu URL video
  },
  {
    imageLogo: logoBigBIT,
    name: "Quản Lý Bài Viết",
    detail:"Modudel đã được sử dụng để quản lý bài viết của các giảng viên trong bộ môn Ứng Dụng Phần Mềm",
    userName: "@PortalArticles_module",
    comment:
      "Module Quản lý Bài Viết Toàn Quốc Trong Hệ thống FPT Polytechnic.",
    href: "/products/module?portal-articles",
    imageProduct1: titleArticle,
    imageProduct2: titleArticle2,
    imageProduct3: titleArticle3,
    video: "https://www.youtube.com/embed/NmBauYWNaQM?si=o9KB_g6vKyLbMqbC", // Chỉ lưu URL video
  },

  {
    imageLogo: logoBigBIT,
    name: "Quản Lý Sự Kiện",
    detail:"Modudel đã được sử dụng để quản lý sự kiện của phòng sự kiện của FPTPolytechnic",
    userName: "@PortalEvent_module",
    comment: "Module Quản Lý Sự Kiện Toàn Quốc Trong Hệ thống FPT Polytechnic.",
    href: "/products/module?portal-event",
    imageProduct1: titleEvent,
    imageProduct2: titleEvent2,
    imageProduct3: titleEvent3,
    video: "https://www.youtube.com/embed/BYkggp2Lm_I?si=pcMovOXLZe5-qbwW", // Chỉ lưu URL video
  },
  {
    imageLogo: logoBigBIT,
    name: "Quản Lý Phân Quyền",
    detail:"",
    userName: "@PortalIdentity_module",
    comment: "Module Quản Lý Dữ Liệu Tập Trung, Phân Quyền Và Chuyển Hướng.",
    href: "/products/module?portal-identity",
    imageProduct1: titleIdentity,
    imageProduct2: titleIdentity2,
    imageProduct3: titleIdentity3,
    video: "https://www.youtube.com/embed/6XlWx72Rclo?si=CjgEi5k5mUXjGZJk", // Chỉ lưu URL video
  },
  // {
  //     imageLogo: logoBigBIT,
  //     name: "Quản Lý Phân Quyền",
  //     userName: "@PortalIdentity_module",
  //     comment: "Module Quản Lý Dữ Liệu Tập Trung, Phân Quyền Và Chuyển Hướng.",
  //     href: "/products/module?portal-identity",
  //     imageProduct: titleIdentity,
  // },
  // {
  //     imageLogo: logoBigBIT,
  //     name: "Quản Lý Sự Kiện",
  //     userName: "@PortalEvent_module",
  //     comment: "Module Quản Lý Sự Kiện Toàn Quốc Trong Hệ thống FPT Polytechnic.",
  //     href: "/products/module?portal-event",
  //     imageProduct: titleEvent,
  // },

  // {
  //     imageLogo: logoBigBIT,
  //     name: "Quản Lý Bài Viết",
  //     userName: "@PortalArticles_module",
  //     comment: "Module Quản lý Bài Viết Toàn Quốc Trong Hệ thống FPT Polytechnic.",
  //     href: "/products/module?portal-articles",
  //     imageProduct: titleArticle,
  // },
  // {
  //     imageLogo: logoBigBIT,
  //     name: "Module Đăng Ký Dự Án Tốt Nghiệp",
  //     userName: "@PortalRegisterGraduation_module",
  //     comment: "Module Đăng Ký Dự Án Tốt Nghiệp Bộ Môn Ứng Dụng Phần Mềm!",
  //     href: "/products/module?portal-register-graduation",
  //     imageProduct: titleRegisterGraduation,
  // },
  // {
  //     imageLogo: logoBigBIT,
  //     name: "Quản Lý Phân Quyền",
  //     userName: "@PortalIdentity_module",
  //     comment: "Module Quản Lý Dữ Liệu Tập Trung, Phân Quyền Và Chuyển Hướng.",
  //     href: "/products/module?portal-identity",
  //     imageProduct: titleIdentity,
  // },
  // {
  //     imageLogo: logoBigBIT,
  //     name: "Quản Lý Sự Kiện",
  //     userName: "@PortalEvent_module",
  //     comment: "Module Quản Lý Sự Kiện Toàn Quốc Trong Hệ thống FPT Polytechnic.",
  //     href: "/products/module?portal-event",
  //     imageProduct: titleEvent,
  // },

  // {
  //     imageLogo: logoBigBIT,
  //     name: "Quản Lý Bài Viết",
  //     userName: "@PortalArticles_module",
  //     comment: "Module Quản lý Bài Viết Toàn Quốc Trong Hệ thống FPT Polytechnic.",
  //     href: "/products/module?portal-articles",
  //     imageProduct: titleArticle,
  // },
  // {
  //     imageLogo: logoBigBIT,
  //     name: "Module Đăng Ký Dự Án Tốt Nghiệp",
  //     userName: "@PortalRegisterGraduation_module",
  //     comment: "Module Đăng Ký Dự Án Tốt Nghiệp Bộ Môn Ứng Dụng Phần Mềm!",
  //     href: "/products/module?portal-register-graduation",
  //     imageProduct: titleRegisterGraduation,
  // },
  // {
  //     imageLogo: logoBigBIT,
  //     name: "Quản Lý Tutor",
  //     userName: "@PortalTutor_module",
  //     comment: "Module Quản Lý Tutor / Trợ Giảng Bộ Môn Ứng Dụng Phần Mềm.",
  //     href: "/products/module?portal-tutor",
  //     imageProduct: titleIdentity,
  // },
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

  return (
    <section id="products" className="container py-24 sm:py-24">
      <h2 className="text-3xl md:text-4xl font-bold">
        Khám Phá
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
          {" "}
          Sản Phẩm{" "}
        </span>
        Của FPLHN-FACTORY
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Dưới đây là 1 số sản phẩm tiêu biểu được xây dựng bởi đội ngũ, thành viên xưởng dự án.
      </p>
     
      {/*className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2*/}
      {/*lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6"*/}
      <Swiper
        // slidesPerView={1}
        grid={{
          rows: 5,
        }}
        spaceBetween={100}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {products.map(
          ({
            imageLogo,
            name,
            detail,
            userName,
            comment,
            imageProduct1,
            imageProduct2,
            video,
          }: Products) => (
            <SwiperSlide key={userName}>
              <Card
                className="  md:break-inside-avoid overflow-hidden ease-in-out cursor-pointer hover:shadow-lg h-[900px] w-full"
                // onClick={() => navigate(href)}
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar>
                    <AvatarImage alt="" src={imageLogo} />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <CardDescription>{userName}</CardDescription>
                  </div>
                
                </CardHeader>
                <CardContent>{comment}

                {/* <Button size="sm" variant="link" className="flex items-center gap-2">
    Click để xem chi tiết
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  </Button> */}
                </CardContent> 
                <CardContent className="font-semibold text-[20px]">{detail}</CardContent>
                <CardFooter>
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="flex justify-center items-center mt-[50px]">
                      <iframe
                        width="650"
                        height="450"
                        src={video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-2 gap-4 relative mt-[20px] ">
                      <div>
                        <img
                          src={imageProduct1}
                          className="w-full h-[300px] object-cover"
                          alt="Product 1"
                        />
                      </div>
                      <div>
                        <img
                          src={imageProduct2}
                          className="w-full h-[300px] object-cover"
                          alt="Product 2"
                        />
                      </div>
                      {/* <div>
                        <img
                          src={imageProduct3}
                          className="w-full h-[200px] object-cover"
                          alt="Product 3"
                        />
                      </div> */}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};
