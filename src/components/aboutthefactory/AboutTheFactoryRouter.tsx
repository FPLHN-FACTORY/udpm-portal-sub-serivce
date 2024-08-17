import {Cta} from "@/components/Cta.tsx";
import {Achievement} from "@/components/Achievement.tsx";
import {About} from "@/components/About.tsx";
import {Footer} from "@/components/Footer.tsx";
import {TechnologySlider} from "@/components/TechnologySlider.tsx";
import {Team} from "@/components/Team.tsx";
import {FAQ} from "@/components/FAQ.tsx";
import {VeteranMember} from "@/components/VeteranMember.tsx";
import { NavbarMain } from "../NavbarMain";
import { VeteranMember2 } from "../VeteranMember2";
import {Statistics} from "@/components/Statistics";
import { TitleAbout } from "../TitleAbout";
import { BannerAbout } from "../BannerAbout";

export const AboutTheFactoryRouter = () => {
    return (
        <>
            <NavbarMain/>
            <BannerAbout/>
            <TitleAbout/>
            <Statistics/>
            <About/>
            <Cta/>
            <Achievement/>
            <TechnologySlider/>
            <Team/>
            <VeteranMember/>
            <VeteranMember2/>
            <FAQ/>
            <Footer/>
        </>
    );
};
