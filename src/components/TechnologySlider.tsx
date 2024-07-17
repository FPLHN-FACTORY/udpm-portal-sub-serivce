import {useEffect, useRef, useState} from "react";
import JavaLogo from "@/assets/images/logo/technology/Java/javalogo.jpg";
import Auth0Logo from "@/assets/images/logo/technology/Auth0/auth0logo.jpg";
import AWSLogo from "@/assets/images/logo/technology/AWS/aws.jpg";
import DockerLogo from "@/assets/images/logo/technology/Docker/dockerlogo.jpg";
import GithubActionLogo from "@/assets/images/logo/technology/GithubAction/githubactionlogo.jpg";
import GoogleCloudPlatformLogo from "@/assets/images/logo/technology/GoogleCloudPlatform/googlecloudplatformlogo.jpg";
import JenkinsLogo from "@/assets/images/logo/technology/Jenkins/jenkinslogo.jpg";
import Junit5Logo from "@/assets/images/logo/technology/Junit5/junit5logo.jpg";
import KotlinLogo from "@/assets/images/logo/technology/Kotlin/kitlinlogo.jpg";
import MicrosoftAzure from "@/assets/images/logo/technology/MicrosoftAzure/microsoftazurelogo.jpg";
import NodeJs from "@/assets/images/logo/technology/NodeJs/nodejslogo.jpg";
import ReactLogo from "@/assets/images/logo/technology/React/reactlogo.jpg";
import SeleniumLogo from "@/assets/images/logo/technology/Selenium/seleniumlogo.jpg";
import SpringLogo from "@/assets/images/logo/technology/Spring/springlogo.jpg";
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
