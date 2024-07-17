import {Button} from "@/components/ui/button.tsx";
import {Avatar, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography} from "@material-tailwind/react";
// // { Khoa hoc }
// import khoaHocTuLamImages from "@/assets/images/products/achievement/hoang.png"
// { Landing pages hackathon}
import landingPageImages from "@/assets/images/products/achievement/landingpage/landingpageTitle.png"
import oniamey from "@/assets/images/oniamey/nobg/png/oniamey/oniamey-big.png"
// { Gold Bee }
import goldBeeImages from "@/assets/images/products/achievement/goldbee/nghiahoangthiv2.png"
import thiAvatar from "@/assets/images/products/achievement/goldbee/thi.png";
import hoangAvatar from "@/assets/images/products/achievement/goldbee/hoangversion1.jpg";
// { OLP ICPC }
import olpImages from "@/assets/images/products/achievement/olpicpc/title.png"
import olpAvatar from "@/assets/images/products/achievement/olpicpc/ledinhdao.png";

interface AchievementProps {
    image: string;
    title: string;
    description: string;
    avatar: AvatarProps[];
    link: string;
}

interface AvatarProps {
    src: string;
    alt: string;
    title: string;
}

const features: AchievementProps[] = [
    // {
    //     image: khoaHocTuLamImages,
    //     title: "Giải nhì thiết bị khoa học tự làm toàn quốc 2022",
    //     description:
    //         "Đoạt giải nhì trong cuộc thi thiết bị khoa học tự làm toàn quốc 2022.",
    //     avatar: [
    //         {
    //             src: "https://via.placeholder.com/32x32",
    //             alt: "Avatar 1",
    //             title: "Avatar 1",
    //         },
    //         {
    //             src: "https://via.placeholder.com/32x32",
    //             alt: "Avatar 2",
    //             title: "Avatar 2",
    //         }
    //     ],
    //     link: "https://www.poly.edu.vn/vn/khoa-hoc/khoa-khoa-hoc-hoc-vien/chuyen-nganh-khoa-hoc-cong-nghe/ung-dung-phan-mem-quan-ly-kho-luu-tru-va-chuyen-giao-bai-viet",
    // },
    {
        image: olpImages,
        title: "Asia OPL-ICPC toàn quốc 2023",
        description:
            "Lê Đình Đạo cùng Trương Văn Hoàng, Nguyễn Sĩ Thành Long đoạt giải nhì cuộc thi Olympic ICPC toàn quốc diễn ra tại Huế.",
        avatar: [
            {
                src: olpAvatar,
                alt: "Lê Đình Đạo",
                title: "Lê Đình Đạo",
            },
        ],
        link: "https://www.facebook.com/share/p/vLdtKP7ecGXAm4Ai/",
    },
    {
        image: landingPageImages,
        title: "Landing Page Hackathon 2023",
        description:
            "Quán quân cuộc thi Landing Page Hackathon 2023" +
            " với sự tham gia của 16 đội thi đến từ các cơ sở FPT Polytechnic trên toàn quốc.",
        avatar: [
            {
                src: oniamey,
                alt: "Nghĩa Bé",
                title: "Trịnh Hiếu Nghĩa",
            },
        ],
        link: "https://caodang.fpt.edu.vn/tin-tuc-poly" +
            "/quan-quan-cuoc-thi-landing-page-hackathon-2023-chinh-thuc-lo-dien.html",
    },
    {
        image: goldBeeImages,
        title: "Liên tiếp dành Golden Bee 2023",
        description:
            "Dành ong vàng với những cái tên quen thuộc: Phạm Đức Hoàng, Nguyễn Đình Thi. Với kinh nghiệp làm việc tại" +
            " Xưởng rất nhiều thành viên trở thành key member" +
            " của công ty công nghệ hàng đầu Việt Nam như: Fpt Software, VP Bank, VinBigdata... .",
        avatar: [
            {
                src: hoangAvatar,
                alt: "Phạm Đức Hoàng",
                title: "Phạm Đức Hoàng",
            },
            {
                src: thiAvatar,
                alt: "Nguyễn Đình Thi",
                title: "Nguyễn Đình Thi",
            }
        ],
        link: "https://caodang.fpt.edu.vn/tin-tuc-poly/ha-noi-tin-sinh-vien/ong-vang-ky-summer-2023-voi-so-diem-986-o-fpt-polytechnic-ha-noi-la-ai.html#:~:text=%C4%90%E1%BA%A1t%20%C4%91i%E1%BB%83m%20t%E1%BB%95ng%20k%E1%BA%BFt%209,Ong%20V%C3%A0ng%20k%E1%BB%B3%20Summer%202023.",
    },

];

export const Achievement = () => {
    return (
        <section
            id="achievement"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                Thành Tựu {" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Thành Viên{" "}
                </span>
                FPLHN-FACTORY
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Cày ngày cày đêm với tinh thần làm việc "Can do" các thành viên xưởng đã đạt được nhiều thành tựu xuất
                sắc.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(({image, title, description, avatar, link}: AchievementProps) => (
                        <Card className="relative max-w-[30rem] overflow-hidden" placeholder={undefined}
                              onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 w-auto h-56 rounded-none overflow-hidden flex justify-center items-center"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                            >
                                <img
                                    src={image}
                                    alt="ui/ux review check"
                                    className="w-full h-full object-cover"
                                />
                            </CardHeader>
                            <CardBody placeholder={undefined} onPointerEnterCapture={undefined}
                                      onPointerLeaveCapture={undefined} className={'pb-20'}>
                                <Typography variant="h4" color="blue-gray" placeholder={undefined}
                                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {title}
                                </Typography>
                                <p color="gray" className="mt-3 font-normal text-left">
                                    {description}
                                </p>
                            </CardBody>
                            <CardFooter className="flex items-center justify-between absolute bottom-0"
                                        placeholder={undefined} onPointerEnterCapture={undefined}
                                        onPointerLeaveCapture={undefined}>
                                <div className="flex items-center -space-x-3">
                                    {avatar.map((ava) => {
                                        return (
                                            <Tooltip key={ava.title} content={ava.title}>
                                                <Avatar
                                                    size="sm"
                                                    variant="circular"
                                                    alt={ava.alt}
                                                    src={ava.src}
                                                    className="border-2 border-white hover:z-10" placeholder={undefined}
                                                    onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                                />
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                                <Typography className="font-normal" placeholder={undefined}
                                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <a href={link} className="grid justify-end">
                                        <Button size="sm" variant="link" className="flex items-center gap-2">
                                            Tìm hiểu thêm
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </Button>
                                    </a>
                                </Typography>
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>

        </section>
    )
        ;
};
