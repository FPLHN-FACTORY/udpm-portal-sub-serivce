
import {Footer} from "@/components/Footer.tsx";
import { NavbarMain } from "../NavbarMain";
import { BlogItem } from "../BlogItem";

export const BlogRouter = () => {
    return (
        <>
            <NavbarMain/>
            <BlogItem/>
            <Footer/>
        </>
    );
};