
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import {
//   Facebook,
//   GithubIcon,
//   Instagram,
//   Linkedin,
//   Youtube,
// } from "lucide-react";
// import bitLogoText from "@/assets/images/logo/bit/transparent/svg/logo-fpl/logo-no-text.svg";
import tiennh21Avatar from "../assets/images/teacher/tiennh21/png/tiennh21-1hand.png";
import nguyenvv06Avatar from "../assets/images/teacher/nguyenvv06/png/nguyenvv06-vip.png";
import hangnt169Avatar from "../assets/images/teacher/hangnt169/png/hangnt169.png";
import dungna29Avatar from "../assets/images/teacher/dungna29/png/dungna29-middle.png";
import React, { useEffect, useState, useRef } from "react";

// import logoBig1 from "@/assets/images/nobg/svg/logo-big-1.svg";
// import logoBig2 from "@/assets/images/nobg/svg/logo-big-2.svg";
// import logoBig3 from "@/assets/images/nobg/svg/logo-big-3.svg";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: tiennh21Avatar,
    name: "Nguyễn Hoàng Tiến",
    position: "Chủ Nhiệm Bộ Môn",
    socialNetworks: [
      // {
      //     name: "Linkedin", url: "http://linkedin.com"
      // },
      {
        name: "Facebook",
        url: "https://www.facebook.com/tiennh925",
      },
      {
        name: "Github",
        url: "https://github.com/tiennh21",
      },
    ],
  },
  {
    imageUrl: hangnt169Avatar,
    name: "Nguyễn Thúy Hằng",
    position: "Trưởng Môn Nâng Cao",
    socialNetworks: [
      {
        name: "Youtube",
        url: "https://www.youtube.com/@bocphet-lu3lj",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/hang.nguyen.04",
      },
      {
        name: "Github",
        url: "https://github.com/hangnt169",
      },
    ],
  },
  {
    imageUrl: nguyenvv06Avatar,
    name: "Vũ Văn Nguyên",
    position: "Giám Đốc FPLHN-FACTORY",
    socialNetworks: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/Nguyenvv4",
      },
      {
        name: "Github",
        url: "https://github.com/nguyenvv4",
      },
    ],
  },
  {
    imageUrl: dungna29Avatar,
    name: "Nguyễn Anh Dũng",
    position: "Sáng Lập FPLHN-FACTORY",
    socialNetworks: [
      {
        name: "Youtube",
        url: "https://www.youtube.com/@DNAPOLY",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/dungna0313",
      },
      {
        name: "Github",
        url: "https://github.com/dungna29",
      },
    ],
  },
];

export const Team = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1, // Adjust this value to control when the effect triggers
        }
      );
  
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
  
      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);






  // const socialIcon = (iconName: string) => {
  //   switch (iconName) {
  //     case "Linkedin":
  //       return <Linkedin size="20" />;

  //     case "Facebook":
  //       return <Facebook size="20" />;

  //     case "Instagram":
  //       return <Instagram size="20" />;
  //     case "Youtube":
  //       return <Youtube size="20" />;
  //     case "Github":
  //       return <GithubIcon size="20" />;
  //   }
  // };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
          Đội Ngũ{" "}
        </span>
        Lãnh Đạo Của Chúng Tôi
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground mb-10">
        Đội ngũ lãnh đạo của FPLHN-FACTORY là những thầy cô vô cùng xuất sắc và
        đứng đầu trong việc hướng dẫn và hỗ trợ các thành viên FPLHN-FACTORY qua
        mỗi dự án. Với tầm nhìn sáng suốt và kinh nghiệm dày dặn, họ không chỉ
        là những người dẫn dắt mà còn là những người đồng hành đáng tin cậy, cam
        kết mang đến môi trường học tập năng động và sáng tạo, khơi gợi cảm hứng
        và đam mê trong mỗi thành viên.
      </p>
      <div
          ref={imgRef}
          className={`transition-all duration-1000 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position }: TeamProps) => (
            <React.Fragment key={name}>
              <Card className="relative mt-8 mx-auto max-w-xs flex flex-col items-center bg-white rounded-[30px] shadow-lg ">
                <CardHeader className="flex justify-center items-center pt-4 pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="w-64 h-64 rounded-full shadow-sm object-cover"
                  />
                </CardHeader>
                <CardFooter className=" text-center mt-5">
                  <div className="flex flex-col items-center">
                    <span className="block text-xl font-bold text-gray-900 mb-2">
                      {name}
                    </span>
                    <span className="block text-lg text-green-600">
                      {position}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </React.Fragment>
          )
        )}
      </div>
      </div>
    </section>
  );
};
