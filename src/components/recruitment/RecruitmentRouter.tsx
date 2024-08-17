import React, { useEffect, useRef } from 'react';
import { Footer } from "@/components/Footer.tsx";
import { FAQ } from "@/components/FAQ.tsx";
import { GoogleForm } from "@/components/GoogleForm.tsx";
import { NavbarMain } from "../NavbarMain";
import { Positions } from "../Positions";
import { Features } from "@/components/Features.tsx";
import { TitleAchievement } from '../TitleAchievement';
import { BannerRecruitment } from '../BannerRecruitment';

export const RecruitmentRouter = () => {
    const googleFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (googleFormRef.current) {
      googleFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  const scrollToGoogleForm = () => {
    if (googleFormRef.current) {
      googleFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
        <>
            <NavbarMain />
            <BannerRecruitment/>
            <TitleAchievement/>
            
            <Positions onApplyClick={scrollToGoogleForm} />
            <Features />
            <div ref={googleFormRef}>
                <GoogleForm />
            </div>
            <FAQ />
            <Footer />
        </>
    );
};