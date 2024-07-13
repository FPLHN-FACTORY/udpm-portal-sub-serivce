import {GoogleForm} from "@/components/GoogleForm.tsx";
import {FAQ} from "@/components/FAQ.tsx";
import {Navbar} from "@/components/product/Navbar.tsx";
import {Footer} from "@/components/Footer.tsx";
import {Products} from "@/components/Products.tsx";

export const ProductsRouter = () => {
    return (
        <>
            <Navbar/>
            <Products/>
            <GoogleForm/>
            <FAQ/>
            <Footer/>
        </>
    );
};
