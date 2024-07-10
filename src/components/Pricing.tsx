import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Đào Tạo",
    popular: 1,
    price: "Kỳ 1 - 2",
    description: "Tham gia training theo kế hoạch có sẵn.",
    buttonText: "Tham gia ngay",
    benefitList: [
      "Training theo nhóm 5 người",
      "Có bàn làm việc theo nhóm",
      "Nâng cao khả năng thực hành giao tiếp",
      "Nhận hỗ trợ từ FPLHN-FACTORY",
    ],
  },
  {
    title: "Thử Thách",
    popular: 0,
    price: "Kỳ 1 - 4",
    description: "Làm bài thi để vượt qua vòng sơ loại.",
    buttonText: "Đăng ký ngay",
    benefitList: [
      "Thử thách bản thân với đề siêu khó",
      "Công nghệ, tính năng mới",
      "Nâng cao kiến thức chuyên môn",
      "Nhận hỗ trợ từ FPLHN-FACTORY",
    ],
  },
  {
    title: "Nhận Thêm Thông Tin",
    popular: 0,
    price: "Kỳ 1 - 6",
    description:
      "Nhận chi tiết thông tin training và nội quy FPLHN-FACTORY.",
    buttonText: "Liên hệ ngay",
    benefitList: [
      "Thông tin chi tiết từ FPLHN-FACTORY",
      // "8 GB Storage",
      // "Upto 10 pages",
      "Nhận hỗ trợ từ FPLHN-FACTORY",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="options"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Nhận
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Hỗ Trợ{" "}
        </span>
        Từ FPLHN-FACTORY
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Hưởng lợi ích từ việc tham gia training ngay.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}</span>
                <span className="text-muted-foreground"> / PTPM</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <a href={"#support"}><Button className="w-full">{pricing.buttonText}</Button></a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
