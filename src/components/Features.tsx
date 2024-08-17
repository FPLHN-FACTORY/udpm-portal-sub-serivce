// import {Badge} from "./ui/badge";
// import {
//     Card,
//     CardContent,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";

// import responseDesignImages from "@/assets/looking-ahead.png";
// import intuitiveUserInterface from "@/assets/reflecting.png";
// import aiPoweredInsights from "@/assets/growth.png";

import JavaLogo from "@/assets/images/logo/technology/FullOptions/Java.png";
import Auth0Logo from "@/assets/images/logo/technology/FullOptions/Auth0.png";
import AWSLogo from "@/assets/images/logo/technology/FullOptions/AWS.png";
import DockerLogo from "@/assets/images/logo/technology/FullOptions/Docker.png";
import GithubActionLogo from "@/assets/images/logo/technology/FullOptions/GithubAction.png";
import GoogleCloudPlatformLogo from "@/assets/images/logo/technology/FullOptions/GoogleCloudPlatform.png";
import JenkinsLogo from "@/assets/images/logo/technology/FullOptions/Jenkins.png";
import Junit5Logo from "@/assets/images/logo/technology/FullOptions/Junit.png";
import KotlinLogo from "@/assets/images/logo/technology/FullOptions/Kotlin.png";
import MicrosoftAzure from "@/assets/images/logo/technology/FullOptions/MicrosoftAzure.png";
import NodeJs from "@/assets/images/logo/technology/FullOptions/Node.png";
import ReactLogo from "@/assets/images/logo/technology/FullOptions/React.png";
import SeleniumLogo from "@/assets/images/logo/technology/FullOptions/Selenium.png";
import SpringLogo from "@/assets/images/logo/technology/FullOptions/Spring.png";
import CSharp from "@/assets/images/logo/technology/CSharp/CSharp2.png";
import vuejs from "@/assets/images/logo/technology/VueJs/vuejs2.jpg";

// interface FeatureProps {
//     title: string;
//     description: string;
//     image?: string;
// }

// const features: FeatureProps[] = [
//     {
//         title: "Bước 1: Bài kiểm tra cấp độ 1",
//         description:
//             "Kiểm tra cơ bản vận dụng xoay quanh các tính chất của lập trình hướng đối tượng.",
//     },
//     {
//         title: "Bước 2: Bài kiểm tra cấp độ 2",
//         description:
//             "Kiểm tra nâng cao đòi hỏi khả năng thao tác dữ liệu với cơ sở dữ liệu.",
//     },
//     {
//         title: "Bước 3: Bài kiểm tra cấp độ 3",
//         description:
//             "Kiểm tra nâng cao thao tác dữ liệu với giao diện người dùng.",
//     },
//     {
//         title: "Bước 4: Phỏng vấn",
//         description:
//             "Trả lời phỏng vấn từ các thành viên kỳ cựu của xưởng.",
//     },
//     {
//         title: "Bước 5: Git & mô hình Agile",
//         description:
//             "Hướng dẫn cách sử dụng git, cách làm việc nhóm theo mô hình phát triển phần mềm: Agile.",
//     },
//     {
//         title: "Bước 6: Đào tạo dự án",
//         description:
//             "Đào tạo thực hành dự án được giao tại xưởng.",
//     },
// ];

import "@fortawesome/fontawesome-free/css/all.min.css";

const steps = [
  {
    id: "Bước 1: Bài kiểm tra cấp độ 1",
    text: "Kiểm tra cơ bản vận dụng xoay quanh các tính chất của lập trình hướng đối tượng.",
    icon: "fas fa-file-alt",
  },
  {
    id: "Bước 2: Bài kiểm tra cấp độ 2",
    text: "Kiểm tra nâng cao đòi hỏi khả năng thao tác dữ liệu với cơ sở dữ liệu.",
    icon: "fas fa-question-circle",
  },
  {
    id: "Bước 3: Bài kiểm tra cấp độ 3",
    text: "Kiểm tra nâng cao thao tác dữ liệu với giao diện người dùng.",
    icon: "fas fa-file-contract",
  },
  {
    id: "Bước 4: Phỏng vấn",
    text: "Trả lời phỏng vấn từ các thành viên kỳ cựu của xưởng.",
    icon: "fas fa-file-signature",
  },
  {
    id: "Bước 5: Git & mô hình Agile",
    text: "Hướng dẫn cách sử dụng git, cách làm việc nhóm theo mô hình phát triển phần mềm: Agile.",
    icon: "fas fa-handshake",
  },
  {
    id: "Bước 6: Đào tạo dự án",
    text: "Đào tạo thực hành dự án được giao tại xưởng.",
    icon: "fas fa-running",
  },
];

// const featureList: string[] = [
//     "Java/C#",
//     "Spring Boot / ASP.NET Core",
//     "Thymeleaf / Blazor",
//     "Hibernate / Entity Framework",
//     "JUnit / xUnit",
//     "Maven / NuGet",
//     "JPA / LINQ to SQL",
//     "Jenkins / Azure DevOps",
//     "Microservices",
//     "Vue"
// ];

const featureImageList: string[] = [
  JavaLogo,
  ReactLogo,
  SpringLogo,
  DockerLogo,
  JenkinsLogo,
  AWSLogo,
  Auth0Logo,
  NodeJs,
  
];

const featureImageList2: string[] = [
  GithubActionLogo,
  Junit5Logo,
  GoogleCloudPlatformLogo,
  KotlinLogo,
  MicrosoftAzure,
  SeleniumLogo,vuejs,CSharp];

export const Features = () => {
  return (
    <section id="training" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Tham Gia {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-orange-600">
          Đào Tạo
        </span>{" "}
        Theo Lộ Trình Có Sẵn
      </h2>

      <p className="text-muted-foreground text-xl mt-4 mb-8 text-center">
        Lộ trình đào tạo Dev Test bao gồm 2 giai đoạn với 3 cấp độ kiểm tra, chú
        trọng vào trọng tâm ngành Ứng Dụng Phần Mềm - Phát Triển Phần Mềm.
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureImageList.map((imageSrc: string, index: number) => (
          <div key={index}>
            <img
              src={imageSrc}
              alt={`Feature ${index}`}
              className="w-[115px] h-[115px] mx-5"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap md:justify-center gap-4 ">
        {featureImageList2.map((imageSrc: string, index: number) => (
          <div key={index}>
            <img
              src={imageSrc}
              alt={`Feature ${index}`}
              className="w-[100px] h-[100px] mx-5" 
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8 ">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative">
          {steps.slice(0, 3).map((step) => (
            <div key={step.id} className="flex flex-col items-center max-w-xs">
              <div className="relative flex items-center justify-center w-16 h-16 mb-4 border-2 border-blue-500 rounded-full text-blue-500 text-2xl">
                <i className={step.icon}></i>
              </div>
              <div className="flex flex-col items-center p-4 border-2 border-dashed rounded-lg border-blue-300 h-[200px] justify-center">
                <span className="text-lg font-bold text-center">{step.id}</span>
                <span className="text-center mt-2">{step.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative">
          {steps.slice(3, 6).map((step) => (
            <div key={step.id} className="flex flex-col items-center max-w-xs">
              <div className="relative flex items-center justify-center w-16 h-16 mb-4 border-2 border-blue-500 rounded-full text-blue-500 text-2xl">
                <i className={step.icon}></i>
              </div>
              <div className="flex flex-col items-center p-4 border-2 border-dashed rounded-lg border-blue-300  h-[200px] justify-center">
                <span className="text-lg font-bold text-center">{step.id}</span>
                <span className="text-center mt-2">{step.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
