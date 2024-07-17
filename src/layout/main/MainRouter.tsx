import {Hero} from "@/components/Hero.tsx";
import {About} from "@/components/About.tsx";
import {Opportunity} from "@/components/Opportunity.tsx";
import {Features} from "@/components/Features.tsx";
import {Cta} from "@/components/Cta.tsx";
import {Team} from "@/components/Team.tsx";
import {GoogleForm} from "@/components/GoogleForm.tsx";
import {FAQ} from "@/components/FAQ.tsx";
import {NavbarMain} from "@/components/NavbarMain.tsx";
import {Footer} from "@/components/Footer.tsx";
import {Achievement} from "@/components/Achievement.tsx";
import {VeteranMember} from "@/components/VeteranMember.tsx";
import {TechnologySlider} from "@/components/TechnologySlider.tsx";

export const MainRouter = () => {
    return (
        <>
            <NavbarMain/>
            <Hero/>
            <About/>
            <Opportunity/>
            <Features/>
            <Cta/>
            <Achievement/>
            <TechnologySlider/>
            <Team/>
            <VeteranMember/>
            <GoogleForm/>
            <FAQ/>
            <Footer/>
        </>
    );
};
