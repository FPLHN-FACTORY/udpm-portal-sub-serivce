import TienNH21Avatar from "@/assets/images/teacher/tiennh21/svg/tiennh21-1hand.svg";
import  { useEffect, useState, useRef } from "react";
export const About = () => {
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

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12 bg-brown-50 bg-image ">
        <div
          ref={imgRef}
          className={`transition-all duration-1000 ease-in-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 about-content ">
            <img
              src={TienNH21Avatar}
              alt=""
              className="w-[550px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-[50px]">
                  Giới thiệu về{" "}
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-500">
                    FPLHN-FACTORY{" "}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mt-4 mb-10">
                  Xưởng dự án của chúng tôi, FPL HN FACTORY, đã chính thức ra
                  đời từ năm 2022 và nhanh chóng trở thành một trung tâm sáng
                  tạo nổi bật trong lĩnh vực công nghệ. Khóa đầu tiên - K17.3,
                  đã mở ra một hành trình đầy hứa hẹn, đánh dấu những bước tiến
                  quan trọng trong việc phát triển và định hình tương lai của
                  chúng tôi
                </p>
                <p className={"text-xl text-muted-foreground mt-4 mb-10"}>
                  Từ những ngày đầu thành lập, xưởng đã trở thành một mái nhà
                  chung cho những sinh viên đam mê công nghệ và sáng tạo. Tại
                  đây, các bạn trẻ được đắm chìm trong môi trường học tập và
                  nghiên cứu năng động, được hướng dẫn tận tình bởi những giảng
                  viên giàu kinh nghiệm và nhiệt huyết. Chúng tôi cam kết cung
                  cấp không chỉ kiến thức mà còn những kỹ năng thực tiễn cần
                  thiết để các sinh viên có thể phát triển toàn diện và chuẩn bị
                  tốt nhất cho những thử thách trong ngành công nghệ.
                </p>
                <p className={"text-xl text-muted-foreground mt-4"}>
                  FPL HN FACTORY không chỉ là một địa chỉ học tập, mà còn là nơi
                  kết nối những tâm hồn sáng tạo, những ý tưởng đột phá, và
                  những niềm đam mê công nghệ. Chúng tôi tự hào là điểm đến của
                  sự sáng tạo và đột phá, nơi những ý tưởng lớn được hiện thực
                  hóa và những giấc mơ công nghệ trở thành hiện thực.
                </p>
              </div>

              {/* <Statistics/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
