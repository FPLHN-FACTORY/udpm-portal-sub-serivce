import {Footer} from "@/components/Footer.tsx";
import { NavbarMain } from "../NavbarMain";
import { BannerArticle2 } from "../BannerArticle2";
import { Article2 } from "../Article2";

export const Blog2Router = () => {
    return (
        <>
            <NavbarMain/>
            <BannerArticle2/>
            <Article2/>
            <Footer/>
        </>
    );
};