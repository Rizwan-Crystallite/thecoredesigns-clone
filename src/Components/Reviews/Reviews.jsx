// Components
import ReviewCard from "../ReviewCard";
// import { useEffect, useRef } from "react";
// Swiper
// import { register } from 'swiper/element/bundle';

const Reviews = () => {
    // const swiperRef = useRef(null);
    // useEffect(() => {
    //     register();
    //     const params = {
    //         slidesPerGroupSkip: 1,
    //         speed: 500,
    //         injectStyles: [`
    //             .swiper {
    //                 padding: 50px 0;
    //                 background: #fafafa;
    //             }
    //             .swiper-wrapper {
    //                 height: auto;
    //             }
    //             .swiper-pagination {
    //                 top: 90% !important;
    //             }
    //             .swiper-pagination-bullet {
    //                 width: 10px;
    //                 height: 10px;
    //                 opacity: 0.8;
    //                 background: #ddd;
    //             }

    //             .swiper-pagination-bullet-active {
    //                 opacity: 1;
    //                 background: #ddd;
    //             }
    //         `],
    //         pagination: {
    //             clickable: true,
    //         },
    //         paginationType: "progressbar",
    //         breakpoints: {
    //             576: {
    //                 slidesPerView: 1,
    //             },
    //             768: {
    //                 slidesPerView: 2,
    //             },
    //             992: {
    //                 slidesPerView: 3,
    //             },
    //             1200: {
    //                 slidesPerView: 3,
    //             },
    //         },
    //     };
    //     // Assign it to swiper element
    //     Object.assign(swiperRef.current, params);
    //     // initialize swiper
    //     swiperRef.current.initialize();
    // }, []);
    return (
        // <section>
        //     <div className="py-[50px] lg:py-[100px]">
        //         <div className="container">
        //             <div className="mb-10">
        //                 <span className="text-[22px] font-semibold text-[#db3340] leading-tight block">
        //                     WHAT OUR
        //                 </span>
        //                 <h2 className="text-[30px] lg:text-[35px] xl:text-[45px] 2xl:text-[60px] leading-tight text-black">
        //                     Customers Are Saying
        //                 </h2>
        //             </div>
        //             <div className="overflow-x-hidden">
        //                 <swiper-container init={false} ref={swiperRef}>
        //                     <swiper-slide>
        //                         <ReviewCard
        //                             content={`"Website Iconix' customer service was excellent, and they treated us like we were a big company."`}
        //                             name="CEO, BlackRaters"
        //                         />
        //                     </swiper-slide>
        //                     <swiper-slide>
        //                         <ReviewCard
        //                             content={`"I like the price point and affordability for the scope of services provided."`}
        //                             name="CEO, Denach Auto Service"
        //                         />
        //                     </swiper-slide>
        //                     <swiper-slide>
        //                         <ReviewCard
        //                             content={`"The best part was that I was quoted a fraction of the price I had gotten from other companies."`}
        //                             name="CEO, American Direct Lender"
        //                         />
        //                     </swiper-slide>
        //                     <swiper-slide>
        //                         <ReviewCard
        //                             content={`"Their team was enthusiastic and responsive with follow-up, conference calls, recordings, and deadlines."`}
        //                             name="Owner, Gainz Unit"
        //                         />
        //                     </swiper-slide>
        //                 </swiper-container>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <p>Slider</p>
    )
}

export default Reviews;