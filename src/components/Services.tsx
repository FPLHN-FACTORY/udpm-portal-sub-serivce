import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import clientServiceImages from "@/assets/images/teacher/tiennh21/svg/tiennh21-fulloptions.svg";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Nâng Cao Hiệu Quả Thông Qua Làm Việc Nhóm.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Tổ Chức và Thực Hiện Dự Án Một Cách Hiệu Quả.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Tối Ưu Hoá Hoạt Động Thông Qua Quá Trình Tự Động Hoá.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32" id={"activities"}>
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Các Hoạt Động{" "}
            </span>
            Của FPLHN-FACTORY
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Trở thành 1 trong các thành viên để hưởng quyền lợi.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={clientServiceImages}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
