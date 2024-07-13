import {Hero} from "@/components/Hero.tsx";
import {Sponsors} from "@/components/Sponsors.tsx";
import {About} from "@/components/About.tsx";
import {HowItWorks} from "@/components/HowItWorks.tsx";
import {Features} from "@/components/Features.tsx";
import {Services} from "@/components/Services.tsx";
import {Cta} from "@/components/Cta.tsx";
import {Team} from "@/components/Team.tsx";
import {Recruitment} from "@/components/Recruitment.tsx";
import {Options} from "@/components/Options.tsx";
import {GoogleForm} from "@/components/GoogleForm.tsx";
import {FAQ} from "@/components/FAQ.tsx";
import {NavbarMain} from "@/components/NavbarMain.tsx";
import {Footer} from "@/components/Footer.tsx";

export const MainRouter = () => {
    return (
        <>
            <NavbarMain/>
            <Hero/>
            <Sponsors/>
            <About/>
            <HowItWorks/>
            <Features/>
            <Services/>
            <Cta/>
            <Team/>
            <Recruitment/>
            <Options/>
            <GoogleForm/>
            <FAQ/>
            <Footer/>
        </>
    );
};
