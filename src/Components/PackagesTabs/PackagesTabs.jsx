"use client"
// Hooks
import { useCallback, useState } from "react";
// JSON
import data from "@/JSON/websitepackages";
// Components
import Button from "@/Components/Button";
// Css
import styles from "./packagestabs.module.css"

const PackagesTabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleSetTab = useCallback((id) => {
        setActiveTab(id);
    }, [setActiveTab])
    return (
        <section>
            <div className="py-[50px] md:py-[70px] xl:py-[100px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] leading-tight text-black mb-3">
                            Website <span className="text-[#1d1c84]">Pricing With Comprehensive</span> Features
                        </h2>
                        <p className="text-[14px] 2xl:text-[18px] lg:text-[16px] leading-[24px] lg:leading-[26px] 2xl:leading-[28px] text-black font-normal lg:w-[80%] xl:w-[90%] m-auto">
                            We offer affordable and flexible packages to choose from as per your requirements. All the packages are designed extensively to cater to the needs of any business. We maintain the same standard of services in all the packages without compromising quality. We are here to build trust and relationships with our clients.
                        </p>
                    </div>
                    <div className="flex justify-center gap-3 md:gap-5 flex-wrap lg:flex-nowrap">
                        {
                            data && data.map((e, i) => {
                                return (
                                    <Button
                                        key={i}
                                        text={e.label}
                                        css={`border-[#db3340] uppercase hover:bg-[#db3340] hover:text-white px-3 ${activeTab == e.id ? "bg-[#db3340] text-white" : ""}`}
                                        width="w-max"
                                        bg=""
                                        handle={() => handleSetTab(e.id)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 mt-10">
                        {
                            data[activeTab - 1].packages && data[activeTab - 1].packages.map(({ name, discountedPrice, originalPrice, list }, i) => {
                                return (
                                    <div key={i}
                                        className="border-2 border-[#d8dfe6] rounded-xl p-5 hover:border-[#172758] hover:cursor-pointer relative pb-10">
                                        <h4 className="text-xl text-[#282828]">{name} <br /> Package</h4>
                                        <h5 className="font-bold text-4xl text-[#172758] my-5">
                                            {discountedPrice} <sup className="text-[#d8dfe6] text-3xl"><del>{originalPrice}</del></sup>
                                        </h5>
                                        <ul className={`overflow-y-auto h-60 mb-5 ${styles.listScrollBar}`}>
                                            {list.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-sm text-black font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                        <span className="block w-[6px] h-[6px] bg-[#172758] absolute top-[6px] left-0 rounded-full"></span>
                                                        <span className="block">{e}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <span className="block h-[1px] bg-[#eeeeee]"></span>
                                        <div className="flex mt-5">
                                            <a className="block text-sm basis-1/2 text-center" href="tel:+18325326065">
                                                <span className="text-[#7f7b7b] font-bold">
                                                    <small className="text-black">Speak with us</small> <br />
                                                    (832) 532-6065
                                                </span>
                                            </a>
                                            <a className="block text-sm basis-1/2 text-center font-normal" href="tel:+18325326065">
                                                <span className="text-[#7f7b7b] font-bold">
                                                    <small className="text-black">Want to discuss?</small> <br />
                                                    Let's Get Started
                                                </span>
                                            </a>
                                        </div>
                                        <Button
                                            text="Start Project"
                                            css="uppercase border-[#172758] text-white px-3 absolute left-0 right-0 bottom-[-22px] m-auto rounded-lg"
                                            width="w-max"
                                            bg="bg-[#172758]"
                                            handle={() => handleSetTab(e.id)}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackagesTabs;