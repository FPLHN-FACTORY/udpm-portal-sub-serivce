import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainRouter} from "@/layout/main/MainRouter.tsx";
import {ScrollToTop} from "@/components/ScrollToTop.tsx";
import {ProductsRouter} from "@/layout/product/ProductsRouter.tsx";
import {ProductDetailsRouter} from "@/layout/product/details/ProductDetailsRouter.tsx";

function App() {
    const env = import.meta.env;
    return (
        <>
            <BrowserRouter basename={env.VITE_APP_BASE}>
                <Routes>
                    <Route path="/" element={<MainRouter/>}/>
                    <Route path="products" element={<ProductsRouter/>}/>
                    <Route path="products/module" element={<ProductDetailsRouter/>}/>
                </Routes>
                <ScrollToTop/>
            </BrowserRouter>
        </>
    );
}

export default App;
