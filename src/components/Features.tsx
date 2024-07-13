import { Badge } from "./ui/badge";
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
    title: "Step 1",
    description:
      "Hoàn thiện bài kiểm tra của lộ trình đào tạo.",
  },
  {
    title: "Step 2",
    description:
      "Bảo vệ dự án, demo các chức năng làm được.",
  },
  {
    title: "Step 3",
    description:
      "Trả lời phỏng vấn dựa trên những gì đã làm được.",
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
      id="members"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Trở Thành {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Thành Viên
        </span>
        {" "}FPLHN-FACTORY
      </h2>

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
        {features.map(({ title, description }: FeatureProps) => (
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
