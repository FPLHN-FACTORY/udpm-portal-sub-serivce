import {Statistics} from "./Statistics";
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
                  FPLHN-FACTORY{" "}
                </span>

                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                Xưởng dự án của chúng tôi đã ra đời từ năm 2022, với sự khởi đầu với
                                khóa đầu tiên - K17.3, đã đánh dấu bước đi quan trọng trong hành trình
                                sáng tạo của chúng tôi. Từ những ngày đầu thành lập, xưởng đã trở thành
                                nơi quy tụ của những sinh viên nhiệt huyết, đam mê công nghệ, được hướng
                                dẫn tận tình bởi các thầy cô có kinh nghiệm trong ngành.
                            </p>
                            <p className={'text-xl text-muted-foreground mt-4'}>
                                Với cam kết không ngừng phát triển, chúng tôi đã đạt được những thành tựu
                                đáng kể và xây dựng nên những giá trị khác biệt. Chúng tôi luôn tập trung
                                vào sự sáng tạo và đột phá công nghệ, nhằm chinh phục những đỉnh cao
                                đem lại chất lượng vượt trội. FPL HN FACTORY - Điểm đến của sự sáng tạo và đột phá.
                            </p>
                        </div>

                        <Statistics/>
                    </div>
                </div>
            </div>
        </section>
    );
};
