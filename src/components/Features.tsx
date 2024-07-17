import {Badge} from "./ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// import responseDesignImages from "@/assets/looking-ahead.png";
// import intuitiveUserInterface from "@/assets/reflecting.png";
// import aiPoweredInsights from "@/assets/growth.png";

interface FeatureProps {
    title: string;
    description: string;
    image?: string;
}

const features: FeatureProps[] = [
    {
        title: "Step 1: Bài kiểm tra cấp độ 1",
        description:
            "Kiểm tra cơ bản vận dụng xoay quanh các tính chất của lập trình hướng đối tượng.",
    },
    {
        title: "Step 2: Bài kiểm tra cấp độ 2",
        description:
            "Kiểm tra nâng cao đòi hỏi khả năng thao tác dữ liệu với cơ sở dữ liệu.",
    },
    {
        title: "Step 3: Bài kiểm tra cấp độ 3",
        description:
            "Kiểm tra nâng cao thao tác dữ liệu với giao diện người dùng.",
    },
    {
        title: "Step 4: Phỏng vấn",
        description:
            "Trả lời phỏng vấn từ các thành viên kỳ cựu của xưởng.",
    },
    {
        title: "Step 5: Làm việc nhóm",
        description:
            "Hướng dẫn cách sử dụng git, cách làm việc nhóm theo mô hình phát triển phần mềm: Agile.",
    },
    {
        title: "Step 6: Trở thành thành viên",
        description:
            "Thực hành làm việc nhóm tại phòng làm việc của xưởng.",
    },
];

const featureList: string[] = [
    "Java/C#",
    "Spring Boot / ASP.NET Core",
    "Thymeleaf / Blazor",
    "Hibernate / Entity Framework",
    "JUnit / xUnit",
    "Maven / NuGet",
    "JPA / LINQ to SQL",
    "Jenkins / Azure DevOps",
    "Microservices",
];

export const Features = () => {
    return (
        <section
            id="training"
            className="container py-24 sm:py-32 space-y-8"
        >
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
                Tham Gia {" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Đào Tạo
                </span>
                {" "}Theo Lộ Trình Có Sẵn
            </h2>

            <p className="text-muted-foreground text-xl mt-4 mb-8 text-center">
                Lộ trình đào tạo Dev Test bao gồm 2 giai đoạn với 3 cấp độ kiểm tra, chú trọng vào trọng tâm ngành
                Ứng Dụng Phần Mềm - Phát Triển Phần Mềm.
            </p>

            <div className="flex flex-wrap md:justify-center gap-4">
                {featureList.map((feature: string) => (
                    <div key={feature}>
                        <Badge
                            variant="secondary"
                            className="text-sm"
                        >
                            {feature}
                        </Badge>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({title, description}: FeatureProps) => (
                    <Card key={title}>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>

                        <CardContent>{description}</CardContent>

                        <CardFooter>
                            {/*<img*/}
                            {/*  src={image}*/}
                            {/*  alt="About feature"*/}
                            {/*  className="w-[200px] lg:w-[300px] mx-auto"*/}
                            {/*/>*/}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};
