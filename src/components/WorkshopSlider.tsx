import event1 from '@/assets/images/background/event/1.png';
import event2 from '@/assets/images/background/event/2.png';
import event3 from '@/assets/images/background/event/3.png';
import event4 from '@/assets/images/background/event/4.png';
import event5 from '@/assets/images/background/event/5.png';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCards} from "swiper/modules";

// { CSS }
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/assets/css/workshop-slider.css'


const images = [event1, event2, event3, event4, event5];

export const WorkshopSlider = () => {

    return (
        <Swiper
            id={'workshop-slider'}
            effect={'cards'}
            grabCursor={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiper hidden lg:flex flex-row flex-wrap gap-8 w-[70vh] h-[40vh] z-40"
        >
            {images.map((image, index) => (
                <SwiperSlide className={'rounded-lg'}>
                    <img
                        className={'w-full h-auto'}
                        key={index}
                        src={image}
                        alt={`background ${index}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
