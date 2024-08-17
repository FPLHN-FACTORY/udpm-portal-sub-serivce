import { Button } from "./ui/button";
// import {buttonVariants} from "./ui/button";
// import {GitHubLogoIcon} from "@radix-ui/react-icons";
// import {WorkshopSlider} from "@/components/WorkshopSlider.tsx";

import event1 from "@/assets/images/background/event/1.png";
import event2 from "@/assets/images/background/event/2.png";
import event3 from "@/assets/images/background/event/3.png";
// import event4 from "@/assets/images/background/event/4.png";
// import event5 from "@/assets/images/background/event/5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import { Dialog } from "@radix-ui/react-dialog";

// { CSS }
// import "swiper/css";
// import "swiper/css/effect-cards";
import "@/assets/css/workshop-slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/css/achievement.css";
import { Link } from "react-router-dom";
const images = [event1, event2, event3];

export const Hero = () => {
  return (
    <section className=" place-items-center h-[700px]  bg-image  ">
      {/* <div className="text-center lg:text-start space-y-6">
                <main className="text-5xl md:text-6xl font-bold">
                    <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Poly Business
            </span>{" "}
                    </h1>{" "}
                    Information{" "}
                    <h2 className="inline">
            <span
                className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Technology
            </span>{" "}
                        Hanoi
                    </h2>
                </main>

                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    Xưởng dự án của ngành UDPM - PTPM - XLDL trường FPT Polytechnic Hà Nội.
                </p>

                <div className="space-y-4 md:space-y-0 md:space-x-4">
                    <a href={"#about"}>
                        <Button className="w-full md:w-1/3">Tìm hiểu thêm</Button>
                    </a>
                    <a
                        rel="noreferrer noopener"
                        href="https://github.com/FPLHN-FACTORY/"
                        target="_blank"
                        className={`w-full md:w-1/3 ${buttonVariants({
                            variant: "outline",
                        })}`}
                    >
                        Github Repository
                        <GitHubLogoIcon className="ml-2 w-5 h-5"/>
                    </a>
                </div>
            </div> */}

      {/* Hero cards sections */}
      {/*<div className="z-10">*/}
      {/*  <HeroCards />*/}
      {/*</div>      */}

      {/* Hero cards sections */}
      {/*<div className="z-10 overflow-hidden">*/}
      {/*    <WorkshopCard/>*/}
      {/*</div>*/}

      {/*Hero cards sections*/}
      {/* <div className="z-10 overflow-hidden">
                <WorkshopSlider/>
            </div> */}

      <Swiper
        id="workshop-slider"
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="w-full h-full relative "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="grid w-full h-full">
            {/* Text Section */}
            <div className="grid grid-cols-2 gap-4 mt-[50px]">
              {index === 1 ? (
                <>
                  <div className="relative lg:ml-[70px] lg:mt-[70px]">
                    <img
                      className="w-full h-[500px] object-cover rounded-2xl "
                      src={image}
                      alt={`background ${index}`}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-4 lg:p-8 lg:pr-16 lg:text-left lg:ml-[120px] lg:mt-[70px] space-y-6">
                    <main className="text-3xl md:text-5xl font-bold">
                      <h1 className="inline text-primary ">THAM GIA NGAY</h1>{" "}
                      <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                          FPLHN-FACTORY
                        </span>
                      </h2>
                    </main>
                    <p className="text-lg md:text-xl text-muted-foreground">
                      Khám phá những cơ hội mới và phát triển kỹ năng của bạn
                      với dự án hấp dẫn tại FPLHN-FACTORY. Chúng tôi đang tìm
                      kiếm những tài năng sáng tạo và nhiệt huyết.
                    </p>
                    <div className="space-y-4 md:space-y-0 md:space-x-4 mt-4">
                      <Link to="/recruitment">
                        <Button className="w-full md:w-1/3 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-lg px-4 py-2 hover:from-green-600 hover:to-green-800 transition duration-300">
                          Ứng tuyển
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col justify-center p-4 lg:p-8 lg:pr-16  lg:text-left lg:ml-[120px] lg:mt-[70px]">
                    <main className="text-3xl md:text-5xl font-bold">
                      <h1 className="inline">
                        <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
                          Poly Business
                        </span>{" "}
                      </h1>{" "}
                      Information{" "}
                      <h2 className="inline">
                        <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                          Technology
                        </span>{" "}
                        Hanoi
                      </h2>
                    </main>
                    <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 mt-4">
                      Xưởng dự án của ngành UDPM - PTPM - XLDL trường FPT
                      Polytechnic Hà Nội.
                    </p>
                    <div className="space-y-4 md:space-y-0 md:space-x-4 mt-4">
                      <Link to="/aboutthefactory">
                        <Button className="w-full md:w-1/3 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-lg px-4 py-2 hover:from-green-600 hover:to-green-800 transition duration-300">
                          Tìm hiểu thêm
                        </Button>
                      </Link>

                      {/* <a
        rel="noreferrer noopener"
        href="https://github.com/FPLHN-FACTORY/"
        target="_blank"
        className={`w-full md:w-1/3 ${buttonVariants({
          variant: "outline",
        })}`}
      >
        Github Repository
        <GitHubLogoIcon className="ml-2 w-5 h-5"/>
      </a> */}
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative lg:mr-[70px] lg:mt-[70px]">
                    <img
                      className="w-full h-[500px] object-cover rounded-2xl "
                      src={image}
                      alt={`background ${index}`}
                    />
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
