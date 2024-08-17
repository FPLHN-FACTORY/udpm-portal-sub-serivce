import { Button } from "./ui/button";
import React, { useEffect, useState, useRef } from "react";

import image1 from "@/assets/images/background/event/1.png";
import image2 from "@/assets/images/background/event/2.png";
import image3 from "@/assets/images/background/event/3.png";
import { Link } from "react-router-dom";
export const Cta = () => {
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

  const tips = [
    {
      title: "Trải nghiệm những dự án thực tế",
      views: 28,
      image: image1,
    },
    {
      title: "Nâng cao kỹ năng lập trình",
      views: 22,
      image: image2,
    },
    {
      title: "Nâng cao kỹ năng làm việc nhóm",
      views: 25,
      image: image3,
    },
  ];
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32 justify-center "
    >
      <div
        ref={imgRef}
        className={`transition-all duration-1000 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className=" p-10  grid grid-cols-2 gap-2">
          <div className="justify-center ml-[50px] mt-[50px]">
            <h2 className="text-black text-4xl font-bold mb-4">
              Hãy tham gia ngay{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
                {" "}
                FPLHN-FACTORY
              </span>
            </h2>
            <p className="text-black mb-10">
              Xưởng đào tạo của chúng tôi là kho báu kiến thức và trải nghiệm
              quý giá.
              <br />
              Tham gia để mở rộng tầm nhìn, rèn luyện kỹ năng, và biến đam mê
              thành sự nghiệp!"
            </p>
            <Link
              to="/udpm-portal-sub-serivce/recruitment"
              className="bg-orange-400  h-[100px] text-white px-8 py-5 rounded-md font-semibold text-[20px] hover:bg-orange-500 transition duration-300"
            >
              Ứng tuyển ngay
            </Link>
          </div>
          <div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="relative bg-gray-200 rounded-lg overflow-hidden group"
                >
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-white text-sm flex items-center"></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
