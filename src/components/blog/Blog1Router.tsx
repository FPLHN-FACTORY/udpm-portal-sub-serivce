import {Footer} from "@/components/Footer.tsx";
import { NavbarMain } from "../NavbarMain";
import { BannerArticle1 } from "../BannerArticle1";
import { Article1 } from "../Article1";

export const Blog1Router = () => {
    return (
        <>
            <NavbarMain/>
            <BannerArticle1/>
            <Article1/>
            <Footer/>
        </>
    );
};