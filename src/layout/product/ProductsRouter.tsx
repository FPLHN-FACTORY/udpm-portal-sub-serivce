import {GoogleForm} from "@/components/GoogleForm.tsx";
import {FAQ} from "@/components/FAQ.tsx";
// import {Navbar} from "@/components/product/Navbar.tsx";
import {Footer} from "@/components/Footer.tsx";
import {Products} from "@/components/Products.tsx";
import { NavbarMain } from "@/components/NavbarMain";

export const ProductsRouter = () => {
    return (
        <>
            <NavbarMain/>
            <Products/>
            {/* <GoogleForm/> */}
            <FAQ/>
            <Footer/>
        </>
    );
};
