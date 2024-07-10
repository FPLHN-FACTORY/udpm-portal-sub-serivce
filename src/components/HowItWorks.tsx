import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";
import {MedalIcon, MapIcon, PlaneIcon, GiftIcon} from "../components/Icons";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: <MedalIcon/>,
        title: "Khả năng tiếp cận",
        description:
            "Lộ trình training được tạo theo các bước phù hợp cho cả người mới bắt đầu."
    },
    {
        icon: <MapIcon/>,
        title: "Cộng đồng",
        description:
            "Kết nối các chú ong Poly thuộc bộ môn Ứng Dụng Phần Mềm có cùng niềm đam mê lập trình.",
    },
    {
        icon: <PlaneIcon/>,
        title: "Khả năng mở rộng",
        description:
            "Lộ trình thử thách nằm ngoài các kiến thức được học trong bộ môn ứng dụng phần mềm."
    },
    {
        icon: <GiftIcon/>,
        title: "Cơ hội và món quà",
        description:
            "Vượt qua thử thách trở thành viên xưởng dự án sẽ là mốc thời gian tính kinh nghiệm làm việc của bạn.",
    },
];

export const HowItWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                Tham Gia{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Training{" "}
        </span>
                Theo Lộ Trình Có Sẵn
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Để trở thành thành viên của xưởng dự án đòi hỏi sự quyết tâm, khả năng tự học, hứng thú tìm tòi cái mới
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({icon, title, description}: FeatureProps) => (
                    <Card
                        key={title}
                        className="bg-muted/50"
                    >
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
