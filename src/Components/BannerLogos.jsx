"use client"
// Hooks
import { useEffect, useRef } from 'react';
// Components
import Image from "next/image";
// Swiper
import { register } from 'swiper/element/bundle';

const BannerLogos = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        // Register Swiper web component
        register();
        // Object with parameters
        const params = {
            slidesPerView: 5,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                },
            },
        };
        // Assign it to swiper element
        Object.assign(swiperRef.current, params);
        // initialize swiper
        swiperRef.current.initialize();
    }, []);
    return (
        <swiper-container ref={swiperRef} className="flex items-center" css-mode="true">
            <swiper-slide >
                <Image src="/technologies/htmlcss.png" width={66} height={40} alt="htmlcss" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/laravel.png" width={116} height={24} alt="laravel" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/magento.png" width={104} height={28} alt="magento" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/opencart.png" width={126} height={40} alt="opencart" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/shopify.png" width={111} height={40} alt="shopify" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/squarespace.png" width={272} height={38} alt="squarespace" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/wix.png" width={100} height={39} alt="wix" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/woocommerce.png" width={111} height={23} alt="woocommerce" className='block m-auto' />
            </swiper-slide>
            <swiper-slide>
                <Image src="/technologies/wordpress.png" width={125} height={25} alt="wordpress" className='block m-auto' />
            </swiper-slide>
        </swiper-container>
    )
}

export default BannerLogos