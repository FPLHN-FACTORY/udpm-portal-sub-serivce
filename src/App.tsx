import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainRouter} from "@/layout/main/MainRouter.tsx";
import {ScrollToTop} from "@/components/ScrollToTop.tsx";
import {ProductsRouter} from "@/layout/product/ProductsRouter.tsx";
import { AboutTheFactoryRouter } from "@/components/aboutthefactory/AboutTheFactoryRouter";
import { RecruitmentRouter } from "@/components/recruitment/RecruitmentRouter";
import { BlogRouter } from "@/components/blog/BlogRouter";
import { Blog1Router } from "@/components/blog/Blog1Router";
import UseScrollToTop from "@/components/UseScrollToTop";
import { Blog2Router } from "@/components/blog/Blog2Router";
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
function App() {
    const env = import.meta.env;

    UseScrollToTop;
    return (
        <>
            <BrowserRouter basename={env.VITE_APP_BASE}>
                <Routes>
                    <Route path="/" element={<MainRouter/>}/>
                    <Route path="products" element={<ProductsRouter/>}/>
                    {/* <Route path="products/module" element={<ProductDetailsRouter/>}/> */}
                    <Route path="aboutthefactory" element={<AboutTheFactoryRouter/>}/>
                    <Route path="recruitment" element={<RecruitmentRouter/>}/>
                    <Route path="blog" element={<BlogRouter/>}/>
                    <Route path="tieu-chi-tham-gia-xuong" element={<Blog1Router/>}/>
                    <Route path="lam-viec-voi-git" element={<Blog2Router/>}/>

                </Routes>
                <ScrollToTop/>
            </BrowserRouter>
        </>
    );
}

export default App;
