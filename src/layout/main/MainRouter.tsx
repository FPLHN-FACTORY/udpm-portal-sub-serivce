

import {NavbarMain} from "@/components/NavbarMain.tsx";
import {Footer} from "@/components/Footer.tsx";
import { Hero } from "@/components/Hero";
import { Address } from "@/components/Address";
import { Contact } from "@/components/Contact";


export const MainRouter = () => {
    return (
        <>
            <NavbarMain/>
            <Hero/>
            <Address/>
            <Contact/>
            <Footer/>
        </>
    );
};
