import {GoogleForm} from "@/components/GoogleForm.tsx";
import {FAQ} from "@/components/FAQ.tsx";
import {Footer} from "@/components/Footer.tsx";
import {ProductDetails} from "@/components/ProductDetails.tsx";
import { NavbarMain } from "@/components/NavbarMain";

export const ProductDetailsRouter = () => {
    return (
        <>
            <NavbarMain/>
            <ProductDetails/>
            <GoogleForm/>
            <FAQ/>
            <Footer/>
        </>
    );
};
