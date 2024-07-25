import {useEffect, useRef, useState} from "react";
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
import '@/assets/css/technology.css';

const technologies = [
    JavaLogo,
    ReactLogo,
    SpringLogo,
    DockerLogo,
    JenkinsLogo,
    AWSLogo,
    Auth0Logo,
    KotlinLogo,
    NodeJs,
    MicrosoftAzure,
    SeleniumLogo,
    GoogleCloudPlatformLogo,
    GithubActionLogo,
    Junit5Logo,
    JavaLogo,
    ReactLogo,
    SpringLogo,
    DockerLogo,
    JenkinsLogo,
    AWSLogo,
];

export const TechnologySlider = () => {
    const [fade, setFade] = useState(true);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setFade(false);
        setTimeout(() => {
            if (slideRef.current) {
                const slideTrack = slideRef.current;
                const clonedSlideTrack = slideTrack.cloneNode(true);
                slideTrack.parentNode?.appendChild(clonedSlideTrack);
            }
            setFade(true);
        }, 1000);
    }, []);

    return (
        <section id="technology" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Luôn Cập Nhật
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    Công Nghệ
                    {" "}
                </span>
                Mới Nhất, Nâng Cao Hiệu Quả Phát Triển Framework Riêng Của FPLHN-FACTORY
            </h2>
            <div className="slider">
                <div className={`slide-track transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    {technologies.map((tech, index) => (
                        <div className="slide" key={index}>
                            <img
                                src={tech}
                                alt={`Technology ${index}`}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
