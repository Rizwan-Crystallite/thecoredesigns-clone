"use client"
import { useCallback, useEffect, useState } from "react";
// Components
import Button from "@/Components/Button";
import Image from "next/image";
import CTA from "@/Components/CTA";
// JSON
import data from "@/JSON/websiteportfolios"

const FilterTabs = () => {
    const tabs = [
        { id: 0, industry: "all" },
        { id: 1, industry: "auto" },
        { id: 2, industry: "business" },
        { id: 3, industry: "custom" },
        { id: 4, industry: "food" },
        { id: 5, industry: "ecommerce" },
        { id: 6, industry: "personal" }
    ]
    const [active, setActive] = useState(0);
    const [filterList, setFilterList] = useState([]);
    const activeTabHandle = useCallback((id, industry) => {
        setActive(id);
        const filtered = data.filter((e) => e.industry === industry);
        if (id === 0) {
            setFilterList(data)
        } else {
            setFilterList(filtered);
        }
    }, [setActive, setFilterList]);
    useEffect(() => {
        setActive(0);
        setFilterList(data);
    }, [setActive, setFilterList]);
    return (
        <section>
            <div className="py-[70px] xl:py-[100px]">
                <div className="container">
                    <div className="text-center mb-10">
                        <h2 className="text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] leading-tight text-black mb-3">
                            Check Out <span className="text-[#1d1c84]">Our Recent Website</span> Designs <br className="hidden sm:block" />
                            Work That Makes Us Proud & Happy
                        </h2>
                        <p className="text-[14px] 2xl:text-[18px] lg:text-[16px] leading-[24px] lg:leading-[26px] 2xl:leading-[28px] text-black font-normal lg:w-[80%] xl:w-[90%] m-auto">
                            Whether you are looking for E-commerce Website Design, Bespoke Web Design services, digital marketing solutions for your business or Talk Direct with one of our Website Designer Near you, we provide a one-stop shop for all your Website Design needs And The Best Part is we are Locally Based Near you.
                        </p>
                    </div>
                    <div className="flex justify-center gap-3 md:gap-5 flex-wrap lg:flex-nowrap">
                        {
                            tabs && tabs.map((e, i) => {
                                return (
                                    <Button
                                        key={i}
                                        text={e.industry}
                                        css={`border-[#db3340] uppercase hover:bg-[#db3340] hover:text-white px-3 ${active == e.id ? "bg-[#db3340] text-white" : ""}`}
                                        width="w-max"
                                        bg=""
                                        handle={() => activeTabHandle(e.id, e.industry)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                        {
                            filterList && filterList.map((e, i) => {
                                return (
                                    <div key={i} className="h-[100px] md:h-[200px] overflow-hidden p-2 md:p-5 bg-slate-100">
                                        <Image src={e.img} width={400} height={400} alt="portfolios" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex gap-5 flex-wrap sm:flex-nowrap justify-center mt-10">
                        <CTA
                            text="Let's Get Started"
                            href="javascript:$zopim.livechat.window.show();"
                            css="border-[#db3340] text-white hover:bg-transparent hover:text-[#db3340]"
                            bg="bg-[#db3340]"
                        />
                        <CTA
                            text="Call Us: (832) 532-6065"
                            href="tel:+18325326065"
                            css="border-[#db3340] text-black hover:bg-[#db3340] hover:text-white" bg="bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FilterTabs;