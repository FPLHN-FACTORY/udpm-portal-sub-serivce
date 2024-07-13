import {GoogleForm} from "@/components/GoogleForm.tsx";
import {FAQ} from "@/components/FAQ.tsx";
import {Navbar} from "@/components/product/Navbar.tsx";
import {Footer} from "@/components/Footer.tsx";
import {ProductDetails} from "@/components/ProductDetails.tsx";

export const ProductDetailsRouter = () => {
    return (
        <>
            <Navbar/>
            <ProductDetails/>
            <GoogleForm/>
            <FAQ/>
            <Footer/>
        </>
    );
};
