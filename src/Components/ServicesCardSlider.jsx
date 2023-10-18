// Components
import ServicesCard from "@/Components/ServicesCard/ServicesCard";
// import { useEffect, useRef } from "react";
// Swiper
// import { register } from 'swiper/element/bundle';

const ServicesCardSlider = () => {
    // const swiperRef = useRef(null);
    // useEffect(() => {
    //     register();
    //     const params = {
    //         slidesPerGroupSkip: 1,
    //         speed: 500,
    //         injectStyles: [`
    //             .swiper-pagination {
    //                 bottom: 5px !important;
    //             }
    //             .swiper-pagination-bullet {
    //                 width: 16px;
    //                 height: 16px;
    //                 text-align: center;
    //                 line-height: 16px;
    //                 font-size: 8px;
    //                 color: rgb(255, 255, 255);
    //                 opacity: 1;
    //                 background: #db3340;
    //             }

    //             .swiper-pagination-bullet-active {
    //                 color: #fff;
    //                 background: #007aff;
    //             }
    //         `],
    //         pagination: {
    //             clickable: true,
    //             renderBullet: function (index, className) {
    //                 return '<span class="' + className + '">' + (index + 1) + "</span>";
    //             },
    //         },
    //         paginationType: "progressbar",
    //         breakpoints: {
    //             576: {
    //                 slidesPerView: 2,
    //             },
    //             768: {
    //                 slidesPerView: 3,
    //             },
    //             992: {
    //                 slidesPerView: 4,
    //             },
    //             1200: {
    //                 slidesPerView: 5,
    //             },
    //         },
    //     };
    //     // Assign it to swiper element
    //     Object.assign(swiperRef.current, params);
    //     // initialize swiper
    //     swiperRef.current.initialize();
    // }, []);
    return (
        // <swiper-container init={false} ref={swiperRef}>
        //     <swiper-slide>
        //         <ServicesCard
        //             img="bg-[url('../../public/bg/service-1.png')]"
        //             title="Custom Web Design"
        //             content="Each of our website designs are tailored to create a 100% unique experience. This way, we deliver a site that connects with your audience."
        //         />
        //     </swiper-slide>
        //     <swiper-slide>
        //         <ServicesCard
        //             img="bg-[url('../../public/bg/service-2.png')]"
        //             title="Professional Web Design"
        //             content="Partnering with us means unlocking unrivalled industry expertise. Our professional designs are created to drive authority and credibility for your business."
        //         />
        //     </swiper-slide>
        //     <swiper-slide>
        //         <ServicesCard
        //             img="bg-[url('../../public/bg/service-3.png')]"
        //             title="Responsive Web Design"
        //             content="We create seamless user experiences for all. Whether screen size alterations or device optimizations, our responsive designs exceed expectations for every user."
        //         />
        //     </swiper-slide>
        //     <swiper-slide>
        //         <ServicesCard
        //             img="bg-[url('../../public/bg/service-4.png')]"
        //             title="UI/UX Web Design"
        //             content="With trusted methods and innovative approaches, our team of award-winning designers provide engaging visual experiences and user journeys."
        //         />
        //     </swiper-slide>
        //     <swiper-slide>
        //         <ServicesCard
        //             img="bg-[url('../../public/bg/service-5.png')]"
        //             title="Website Redesign"
        //             content="From design refreshes website overhauls, we analyze your pain points and opportunities to revitalize your digital experience."
        //         />
        //     </swiper-slide>
        // </swiper-container>
        <p>Slider</p>
    )
}

export default ServicesCardSlider;