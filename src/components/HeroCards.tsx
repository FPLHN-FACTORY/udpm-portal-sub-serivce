import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {Badge} from "./ui/badge";
import {Button, buttonVariants} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import {Check} from "lucide-react";
import {LightBulbIcon} from "./Icons";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import tiennh21Avatar from '../assets/images/teacher/tiennh21/svg/tiennh21-1hand.svg';
import bitLogoText from "@/assets/images/logo/bit/transparent/svg/logo-fpl/logo-no-text.svg";

export const HeroCards = () => {
    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
            {/* Testimonial */}
            <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar>
                        <AvatarImage
                            alt=""
                            src={tiennh21Avatar}
                        />
                        <AvatarFallback>SH</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                        <CardTitle className="text-lg">Nguyễn Anh Dũng</CardTitle>
                        <CardDescription>@dungna29</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>Người sáng lập xưởng dự án</CardContent>
            </Card>

            {/* Team */}
            <Card
                className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                    <img
                        src={bitLogoText}
                        alt="user avatar"
                        className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                    />
                    <CardTitle className="text-center">FPLHN-FACTORY</CardTitle>
                    <CardDescription className="font-normal text-primary">
                        Workshop Project
                    </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                    <p>
                        Xưởng dự án là nơi các sản phẩm thực tế do chính sinh viên của ngành Ứng Dụng Phần Mềm làm ra.
                    </p>
                </CardContent>

                <CardFooter>
                    <div className={"grid justify-center align-middle grid-flow-col"}>
                        <a
                            rel="noreferrer noopener"
                            href="https://github.com/FPLHN-FACTORY"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Github icon</span>
                            <GitHubLogoIcon className="w-5 h-5"/>
                        </a>
                        <a
                            rel="noreferrer noopener"
                            href="https://www.facebook.com/BeeSuperHeroHN"
                            target="_blank"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                            })}
                        >
                            <span className="sr-only">Facebook icon</span>
                            {/*<svg xmlns="http://www.w3.org/2000/svg"*/}
                            {/*     x="0px" y="0px"*/}
                            {/*     width="32" height="32"*/}
                            {/*     viewBox="0 0 50 50"*/}
                            {/*     className="fill-foreground w-5 h-5"*/}
                            {/*>*/}
                            {/*    <path*/}
                            {/*        d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>*/}
                            {/*</svg>*/}
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 width="24" height="24"
                                 viewBox="0 0 64 64"
                                 className="fill-foreground h-100"
                            >
                                <path
                                    d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"></path>
                            </svg>
                        </a>

                        {/*<a*/}
                        {/*  rel="noreferrer noopener"*/}
                        {/*  href="https://www.linkedin.com/"*/}
                        {/*  target="_blank"*/}
                        {/*  className={buttonVariants({*/}
                        {/*    variant: "ghost",*/}
                        {/*    size: "sm",*/}
                        {/*  })}*/}
                        {/*>*/}
                        {/*  <span className="sr-only">Linkedin icon</span>*/}
                        {/*  <Linkedin size="20" />*/}
                        {/*</a>*/}
                    </div>
                </CardFooter>
            </Card>

            {/* Pricing */}
            <Card
                className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader>
                    <CardTitle className="flex item-center justify-between">
                        Xưởng
                        <Badge
                            variant="secondary"
                            className="text-sm text-primary"
                        >
                            FPLHN-FACTORY
                        </Badge>
                    </CardTitle>
                    <div>
                        <span className="text-3xl font-bold">Dự Án</span>
                        <span className="text-muted-foreground"> / Tuyển thành viên</span>
                    </div>

                    <CardDescription>
                        Dành cho sinh viên kỳ 1 - 2 ngành phát triển phần mềm.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <a href={"#options"}>
                        <Button className="w-full">Tham gia ngay</Button>
                    </a>
                </CardContent>

                <hr className="w-4/5 m-auto mb-4"/>

                <CardFooter className="flex">
                    <div className="space-y-4">
                        {["Thực hành thực tế", "Xây dựng sản phẩm thực tế", "Hợp tác và làm việc nhóm"].map(
                            (benefit: string) => (
                                <span
                                    key={benefit}
                                    className="flex"
                                >
                  <Check className="text-green-500"/>{" "}
                                    <h3 className="ml-2">{benefit}</h3>
                </span>
                            )
                        )}
                    </div>
                </CardFooter>
            </Card>

            {/* Service */}
            <Card
                className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                    <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                        <LightBulbIcon/>
                    </div>
                    <div>
                        <CardTitle>Sáng Tạo Và Tư Duy</CardTitle>
                        <CardDescription className="text-md mt-2">
                            Tự tạo ra các sản phẩm lập trình thực tế, ứng dụng các công nghệ mới vào code.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
};
