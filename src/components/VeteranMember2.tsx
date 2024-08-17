// import {buttonVariants} from "@/components/ui/button";
import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
// import {Facebook, GithubIcon, Instagram, Linkedin, Youtube} from "lucide-react";
// K17
// import GiangAvatar from '../assets/images/student/k17/GiangK17.png';
// import AnhAvatar from '../assets/images/student/k17/NgocAnhK17.png';
// import SonAvatar from '../assets/images/student/k17/SonK17.png';
// import HuyAvatar from '../assets/images/student/k17/HuyK17.png';
// import HungAvatar from '../assets/images/student/k17/HungK17.png';
// import ThangAvatar from '../assets/images/student/k17/ThangK17.png';
// K18
import HieuAvatar from '../assets/images/student/k18/HieuK18.png';
import NghiaAvatar from '../assets/images/student/k18/NghiaK18.png';
import HoangAvatar from '../assets/images/student/k18/HoangK18.png';
import CuongAvatar from '../assets/images/student/k18/CuongK18.png';
import LuatAvatar from '../assets/images/student/k18/LuatK18V2.png';
import PhuongAvatar from '../assets/images/student/k18/PhuongK18V2.png';
// import ThuAvatar from '../assets/images/student/k18/ThuK18V2.png';
// import ThangAvatar from '../assets/images/student/k18/';

import {Swiper, SwiperSlide} from "swiper/react";
// { CSS }
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/assets/css/veteran-member.css'
import {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";


// interface Course {
//     courseName: string;
//     team: TeamProps[];
// }

interface TeamProps {
    imageUrl: string;
    name: string;
    position: string;
    courseName: string;
    socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
    name: string;
    url: string;
}

// const teamK17: TeamProps[] = [
//     {
//         imageUrl: SonAvatar,
//         name: "Phạm Trường Sơn",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K17.3",
//         socialNetworks: [
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/tiennh925",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/tiennh21",
//             },
//         ],
//     },
//     {
//         imageUrl: ThangAvatar,
//         name: "Nguyễn Công Thắng",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K17.3",
//         socialNetworks: [
//             {
//                 name: "Youtube",
//                 url: "https://www.youtube.com/@bocphet-lu3lj"
//             },
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/hang.nguyen.04",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/hangnt169",
//             },
//         ],
//     },
//     {
//         imageUrl: HuyAvatar,
//         name: "Nguyễn Quốc Huy",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K17.3",
//         socialNetworks: [
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/Nguyenvv4",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/nguyenvv4",
//             },
//         ],
//     },
//     {
//         imageUrl: HungAvatar,
//         name: "Phùng Việt Hùng",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K17.3",
//         socialNetworks: [
//             {
//                 name: "Youtube",
//                 url: "https://www.youtube.com/@DNAPOLY"
//             },
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/dungna0313",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/dungna29",
//             }
//         ],
//     },
// ];

const teamK18: TeamProps[] = [
    {
        imageUrl: HieuAvatar,
        name: "Nguyễn Minh Hiếu",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
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
        imageUrl: NghiaAvatar,
        name: "Trịnh Hiếu Nghĩa",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@bocphet-lu3lj"
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
        imageUrl: CuongAvatar,
        name: "Nguyễn Bá Cường",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
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
        imageUrl: LuatAvatar,
        name: "Lục Văn Luật",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@DNAPOLY"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/dungna0313",
            },
            {
                name: "Github",
                url: "https://github.com/dungna29",
            }
        ],
    },
    {
        imageUrl: HoangAvatar,
        name: "Phạm Đức Hoàng",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
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
        imageUrl: PhuongAvatar,
        name: "Hoàng Hoài Phương",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@DNAPOLY"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/dungna0313",
            },
            {
                name: "Github",
                url: "https://github.com/dungna29",
            }
        ],
    },
];

// const teamK17K18: TeamProps[] = [
//     {
//         imageUrl: GiangAvatar,
//         name: "Nguyễn Lê Hồng Giang",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K17.3",
//         socialNetworks: [
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/tiennh925",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/tiennh21",
//             },
//         ],
//     },
//     {
//         imageUrl: AnhAvatar,
//         name: "Đặng Ngọc Anh",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K17.3",
//         socialNetworks: [
//             {
//                 name: "Youtube",
//                 url: "https://www.youtube.com/@bocphet-lu3lj"
//             },
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/hang.nguyen.04",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/hangnt169",
//             },
//         ],
//     },
//     {
//         imageUrl: HoangAvatar,
//         name: "Phạm Đức Hoàng",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K18.3",
//         socialNetworks: [
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/Nguyenvv4",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/nguyenvv4",
//             },
//         ],
//     },
//     {
//         imageUrl: PhuongAvatar,
//         name: "Hoàng Hoài Phương",
//         position: "Thành Viên FPLHN-FACTORY",
//         courseName: "K18.3",
//         socialNetworks: [
//             {
//                 name: "Youtube",
//                 url: "https://www.youtube.com/@DNAPOLY"
//             },
//             {
//                 name: "Facebook",
//                 url: "https://www.facebook.com/dungna0313",
//             },
//             {
//                 name: "Github",
//                 url: "https://github.com/dungna29",
//             }
//         ],
//     },
// ];

// const teamVeteranMembers: Course[] = [
//     // {
//     //     courseName: "K17.3",
//     //     team: teamK17,
//     // },
//     {
//         courseName: "K18.3",
//         team: teamK18,
//     },
//     // {
//     //     courseName: "K17-18.3",
//     //     team: teamK17K18,
//     // }
// ]

export const VeteranMember2 = () => {

    // const socialIcon = (iconName: string) => {
    //     switch (iconName) {
    //         case "Linkedin":
    //             return <Linkedin size="20"/>;

    //         case "Facebook":
    //             return <Facebook size="20"/>;

    //         case "Instagram":
    //             return <Instagram size="20"/>;
    //         case "Youtube":
    //             return <Youtube size="20"/>;
    //         case "Github":
    //             return <GithubIcon size="20"/>;
    //     }
    // };

    return (
        <section
        id="veteran-member"
        className="container py-24 sm:py-32 relative overflow-hidden w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
            Đội Ngũ 18.3 {" "}
          </span>
          FPLHN-FACTORY
        </h2>
  
        <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Đội ngũ K18.3 của FPLHN-FACTORY đánh dấu một cột mốc quan trọng trong hành trình phát triển của tổ chức. 
        Là khóa thứ hai, họ kế thừa kinh nghiệm quý báu từ những người đi trước, đồng thời mang đến làn gió mới 
        với nhiệt huyết và sáng tạo của tuổi trẻ.
        </p>
  
        <Swiper
          className="cursor-pointer"
          slidesPerView={3}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
        
          keyboard={true}
          spaceBetween={30}
          modules={[Pagination, Navigation, Mousewheel, Keyboard, Autoplay]}
        >
          {teamK18.map(
            ({
              imageUrl,
              name,
              position
            }: TeamProps) => (
              <SwiperSlide>
                <div>
                  <Card className="relative mt-8 mx-auto max-w-xs flex flex-col items-center bg-white rounded-[30px] shadow-lg">
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
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>
    );
};
