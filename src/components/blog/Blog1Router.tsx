import {Footer} from "@/components/Footer.tsx";
import { NavbarMain } from "../NavbarMain";
import { BlogItem } from "../BlogItem";
import { BannerArticle1 } from "../BannerArticle1";
import { Article1 } from "../Article1";
import { BannerArticle2 } from "../BannerArticle2";
import { Article2 } from "../Article2";

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