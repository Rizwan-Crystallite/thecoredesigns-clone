"use client"
// Hooks
import { useCallback, useState } from "react";

const data = [
    {
        id: 1,
        title: "Consultation",
        content: "A brief discussion over a call is the initial step of our development process. In the discovery call, our expert consultant will talk to you about your project and determine if the required specifications are feasible. We also put forth our expert suggestions about how you can make modifications to improve the store."
    },
    {
        id: 2,
        title: "Design",
        content: "Once we have everything we need from you, we will move to the design phase. Our woocommerce expert UI/UX developers will create wireframes for your website and move toward executing a design that best fits your business upon approval."
    },
    {
        id: 3,
        title: "Development",
        content: "A team of developers will work on your WordPress site and WooCommerce plugin. We'll also use other members such as HTML experts, SEO strategists, and others in case we need their input during your site and plugin development."
    },
    {
        id: 4,
        title: "Quality Assurance",
        content: "There are a number of nuances involved in setting up and using WooCommerce. Therefore, Website Iconix runs multiple tests on the website before its launch to ensure its bug-free and performing at its best."
    },
    {
        id: 5,
        title: "Deployment / Maintenance",
        content: "We at Website Iconix aren't content with just providing you with an eCommerce platform; we want to ensure that you have the best possible experience with it. That's why we offer regular updates and support for WooCommerce, ensuring that everything runs smoothly for you."
    }
]

const ProcessTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleSetTab = useCallback((id) => {
        setActiveTab(id);
        console.log(activeTab);
    }, [activeTab])
    return (
        <section>
            <div className="bg-[#f5f5f5] py-[50px] md:py-[70px] xl:py-[100px]">
                <div className="container">
                    <h2 className="text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[65px] leading-tight text-black mb-10">
                        How it works?
                    </h2>
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 sm:col-span-1">
                            <div className="relative w-max pb-[50px] pr-[50px] sm:pr-0 flex sm:flex-col gap-8 sm:gap-10 z-10">
                                <span className="absolute top-[18%] sm:top-0 sm:bottom-0 sm:h-full h-[2px] bg-[#abacb2] w-full sm:w-[2px] m-auto block left-0 right-0 -z-10"></span>
                                <span className="absolute top-[10%] sm:top-[inherit] sm:bottom-0 bg-[#db3340] w-[15px] h-[15px] m-auto block sm:left-0 sm:right-0 right-[-10px] -z-10 rounded-full"></span>
                                {
                                    data && data.map((e, i) => {
                                        return (
                                            <button onClick={() => handleSetTab(e.id)} key={i}
                                                className={`block w-[30px] h-[30px] border-[1px] rounded-full ${activeTab === e.id ? "bg-[#db3340] border-[#db3340] text-white" : "border-[#abacb2] bg-white"}`}>
                                                {e.id}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                            {
                                data && data.map((e, i) => {
                                    return (
                                        <div key={i} className={`${activeTab === e.id ? "block" : "hidden"}`}>
                                            <span className="bg-[#db3340] w-[70px] h-[70px] flex items-center justify-center text-[20px] font-bold text-white mb-5">{e.id}</span>
                                            <h3 className="text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] leading-tight text-[#1d1c84] mb-3">
                                                {e.title}
                                            </h3>
                                            <p className="text-[14px] 2xl:text-[18px] lg:text-[16px] leading-[24px] lg:leading-[26px] 2xl:leading-[28px] text-black font-normal">
                                                {e.content}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProcessTabs;