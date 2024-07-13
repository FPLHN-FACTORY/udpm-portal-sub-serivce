import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Phát Triển
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Dự Án & Cộng Đồng
            </span>

          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Tham gia ứng tuyển và training thành viên ngay nếu bạn đang là học sinh kỳ 2 bộ môn Ứng Dụng Phần Mềm!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a href={"#recruitment"}>
            <Button className="w-full md:mr-4 md:w-auto">Tham gia ngay</Button>
          </a>
          <a href={"#team"}>
            <Button variant="outline" className="w-full md:w-auto">
              Tìm hiểu thêm
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
