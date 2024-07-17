import image1 from '@/assets/images/background/bg-left1.png';
import image2 from '@/assets/images/background/bg-left2.png';
import image3 from '@/assets/images/background/bg-left3.png';
import image4 from '@/assets/images/background/bg-left4.png';
import {useEffect, useState} from "react";

const images = [image1, image2, image3, image4];

export const WorkshopCard = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Thay đổi ảnh mỗi 3 giây

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[500px] h-[500px] z-40">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`background ${index}`}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
    );
};
