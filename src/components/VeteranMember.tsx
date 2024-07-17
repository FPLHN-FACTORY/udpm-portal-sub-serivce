import {buttonVariants} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Facebook, GithubIcon, Instagram, Linkedin, Youtube} from "lucide-react";
import {useEffect, useState} from "react";
// K17
import GiangAvatar from '../assets/images/student/k17/GiangK17.png';
import AnhAvatar from '../assets/images/student/k17/NgocAnhK17.png';
import SonAvatar from '../assets/images/student/k17/SonK17.png';
import HuyAvatar from '../assets/images/student/k17/HuyK17.png';
import HungAvatar from '../assets/images/student/k17/HungK17.png';
import ThangAvatar from '../assets/images/student/k17/ThangK17.png';
// K18
import HieuAvatar from '../assets/images/student/k18/HieuK18.png';
import NghiaAvatar from '../assets/images/student/k18/NghiaK18.png';
import HoangAvatar from '../assets/images/student/k18/HoangK18.png';
import CuongAvatar from '../assets/images/student/k18/CuongK18.png';
import LuatAvatar from '../assets/images/student/k18/LuatK18V2.png';
import PhuongAvatar from '../assets/images/student/k18/PhuongK18V2.png';
// import ThuAvatar from '../assets/images/student/k18/ThuK18V2.png';
// import ThangAvatar from '../assets/images/student/k18/';


interface Course {
    courseName: string;
    team: TeamProps[];
}

interface TeamProps {
    imageUrl: string;
    name: string;
    position: string;
    courseName: string;
    socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
    name: string;
    url: string;
}

const teamK17: TeamProps[] = [
    {
        imageUrl: SonAvatar,
        name: "Phạm Trường Sơn",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K17.3",
        socialNetworks: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/tiennh925",
            },
            {
                name: "Github",
                url: "https://github.com/tiennh21",
            },
        ],
    },
    {
        imageUrl: ThangAvatar,
        name: "Nguyễn Công Thắng",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K17.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@bocphet-lu3lj"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/hang.nguyen.04",
            },
            {
                name: "Github",
                url: "https://github.com/hangnt169",
            },
        ],
    },
    {
        imageUrl: HuyAvatar,
        name: "Nguyễn Quốc Huy",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K17.3",
        socialNetworks: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/Nguyenvv4",
            },
            {
                name: "Github",
                url: "https://github.com/nguyenvv4",
            },
        ],
    },
    {
        imageUrl: HungAvatar,
        name: "Phùng Việt Hùng",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K17.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@DNAPOLY"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/dungna0313",
            },
            {
                name: "Github",
                url: "https://github.com/dungna29",
            }
        ],
    },
];

const teamK18: TeamProps[] = [
    {
        imageUrl: HieuAvatar,
        name: "Nguyễn Minh Hiếu",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/tiennh925",
            },
            {
                name: "Github",
                url: "https://github.com/tiennh21",
            },
        ],
    },
    {
        imageUrl: NghiaAvatar,
        name: "Trịnh Hiếu Nghĩa",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@bocphet-lu3lj"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/hang.nguyen.04",
            },
            {
                name: "Github",
                url: "https://github.com/hangnt169",
            },
        ],
    },
    {
        imageUrl: CuongAvatar,
        name: "Nguyễn Bá Cường",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/Nguyenvv4",
            },
            {
                name: "Github",
                url: "https://github.com/nguyenvv4",
            },
        ],
    },
    {
        imageUrl: LuatAvatar,
        name: "Lục Văn Luật",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@DNAPOLY"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/dungna0313",
            },
            {
                name: "Github",
                url: "https://github.com/dungna29",
            }
        ],
    },
];

const teamK17K18: TeamProps[] = [
    {
        imageUrl: GiangAvatar,
        name: "Nguyễn Lê Hồng Giang",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K17.3",
        socialNetworks: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/tiennh925",
            },
            {
                name: "Github",
                url: "https://github.com/tiennh21",
            },
        ],
    },
    {
        imageUrl: AnhAvatar,
        name: "Đặng Ngọc Anh",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K17.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@bocphet-lu3lj"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/hang.nguyen.04",
            },
            {
                name: "Github",
                url: "https://github.com/hangnt169",
            },
        ],
    },
    {
        imageUrl: HoangAvatar,
        name: "Phạm Đức Hoàng",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/Nguyenvv4",
            },
            {
                name: "Github",
                url: "https://github.com/nguyenvv4",
            },
        ],
    },
    {
        imageUrl: PhuongAvatar,
        name: "Hoàng Hoài Phương",
        position: "Thành Viên FPLHN-FACTORY",
        courseName: "K18.3",
        socialNetworks: [
            {
                name: "Youtube",
                url: "https://www.youtube.com/@DNAPOLY"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/dungna0313",
            },
            {
                name: "Github",
                url: "https://github.com/dungna29",
            }
        ],
    },
];

const teamVeteranMembers: Course[] = [
    {
        courseName: "Kỳ Cựu",
        team: teamK17,
    },
    {
        courseName: "Kỳ Cựu",
        team: teamK18,
    },
    {
        courseName: "Kỳ Cựu",
        team: teamK17K18,
    }
]

export const VeteranMember = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % teamVeteranMembers.length);
                setFade(true);
            }, 1000);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const socialIcon = (iconName: string) => {
        switch (iconName) {
            case "Linkedin":
                return <Linkedin size="20"/>;

            case "Facebook":
                return <Facebook size="20"/>;

            case "Instagram":
                return <Instagram size="20"/>;
            case "Youtube":
                return <Youtube size="20"/>;
            case "Github":
                return <GithubIcon size="20"/>;
        }
    };

    return (
        <section
            id="veteran-member"
            className="container py-24 sm:py-32 relative overflow-hidden w-full"
        >
            {
                teamVeteranMembers.slice(currentIndex, currentIndex + 1).map((member: Course) => (
                    <div
                        key={member.courseName}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold">
                                <span
                                    className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                  Đội Ngũ {member.courseName} {" "}
                                </span>
                            FPLHN-FACTORY
                        </h2>

                        <p className="mt-4 mb-10 text-xl text-muted-foreground">
                            Là những thành viên kỳ cựu nhất FPLHN-FACTORY!
                        </p>

                        <div
                            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 
                             transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {member.team.map(({
                                                  imageUrl,
                                                  name,
                                                  position,
                                                  courseName,
                                                  socialNetworks
                                              }: TeamProps) => (
                                <Card key={name}
                                      className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center">
                                    <CardHeader className="mt-8 flex justify-center items-center pb-2">
                                        <img
                                            src={imageUrl}
                                            alt={`${name} ${position}`}
                                            className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                                        />
                                        <CardTitle className="text-center">{name}</CardTitle>
                                        <CardDescription className="text-primary">{position}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="text-center pb-2">
                                        <p>{courseName}</p>
                                    </CardContent>

                                    <CardFooter>
                                        {socialNetworks.map(({name, url}: SociaNetworkslProps) => (
                                            <div key={name}>
                                                <a
                                                    rel="noreferrer noopener"
                                                    href={url}
                                                    target="_blank"
                                                    className={buttonVariants({
                                                        variant: "ghost",
                                                        size: "sm",
                                                    })}
                                                >
                                                    <span className="sr-only">{name} icon</span>
                                                    {socialIcon(name)}
                                                </a>
                                            </div>
                                        ))}
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))
            }
        </section>
    );
};
