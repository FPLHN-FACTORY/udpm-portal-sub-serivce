import { Statistics } from "./Statistics";
// import StatisticsImage from "@/assets/pilot.png";
import TienNH21Avatar from "@/assets/images/teacher/tiennh21/svg/tiennh21-1hand.svg"

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={TienNH21Avatar}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                FPLHN-FACTORY
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Xưởng dự án được thành lập ngày 01/01/2021 bởi thầy Nguyễn Anh Dũng
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
