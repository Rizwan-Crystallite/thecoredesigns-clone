// Components
import Image from "next/image";
// JSON
import websitecombo from "@/JSON/websitecombo";

const Combo = () => {
    return (
        <section>
            <div className="py-[70px] lg:py-[100px] bg-[url('../../public/bg/blue-texture.png')] bg-cover overflow-hidden">
                <div className="container relative">
                    <div className="xl:flex xl:gap-x-5">
                        <div className="xl:basis-3/4">
                            <h2 className="text-[25px] lg:text-[30px] leading-tight text-[#ffffff] md:w-max relative pr-[50px] py-[15px] z-10 mb-10">
                                Bespoke Website Design Combo Packages
                                <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#db3340] -z-10 rounded-r-full ml-[-100%]"></span>
                            </h2>
                            <div className="flex gap-x-2 flex-wrap md:flex-nowrap">
                                <div className="basis-full md:basis-1/2 lg:basis-1/3">
                                    <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                        {websitecombo[0].name}
                                    </h5>
                                    <ul>
                                        {
                                            websitecombo[0].lists.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                        <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                        <span>{e}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3 md:mt-10">
                                        {websitecombo[3].name}
                                    </h5>
                                    <ul>
                                        {
                                            websitecombo[3].lists.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                        <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                        <span>{e}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="block lg:hidden">
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3 md:mt-10">
                                            {websitecombo[4].name}
                                        </h5>
                                        <ul>
                                            {
                                                websitecombo[4].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                            <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="basis-full md:basis-1/2 lg:basis-1/3">
                                    <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                        {websitecombo[1].name}
                                    </h5>
                                    <ul>
                                        {
                                            websitecombo[1].lists.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                        <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                        <span>{e}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3 md:mt-10">
                                        {websitecombo[2].name}
                                    </h5>
                                    <ul>
                                        {
                                            websitecombo[2].lists.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                        <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                        <span>{e}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="block lg:hidden">
                                        <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3 md:mt-10">
                                            {websitecombo[5].name}
                                        </h5>
                                        <ul>
                                            {
                                                websitecombo[5].lists.map((e, i) => {
                                                    return (
                                                        <li key={i}
                                                            className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                            <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                            <span>{e}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden lg:block basis-1/3">
                                    <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                        {websitecombo[4].name}
                                    </h5>
                                    <ul>
                                        {
                                            websitecombo[4].lists.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                        <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                        <span>{e}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <h5 className="text-[18px] xl:text-[22px] leading-none text-[#ffffff] font-sans font-semibold mb-3 mt-10">
                                        {websitecombo[5].name}
                                    </h5>
                                    <ul>
                                        {
                                            websitecombo[5].lists.map((e, i) => {
                                                return (
                                                    <li key={i}
                                                        className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                        <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                        <span>{e}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:basis-3/12 md:grid xl:block md:grid-cols-3 md:gap-3">
                            <Image
                                src="/icons/satisfactionbadge.png"
                                alt="bagde"
                                width={150}
                                height={184}
                                className="block mx-auto mb-10"
                            />
                            <div className="relative z-10 p-5 xl:pr-0 mb-5">
                                <h5 className="text-[18px] xl: leading-none text-[#ffffff] font-sans font-semibold mb-3">
                                    {websitecombo[6].name}
                                </h5>
                                <ul>
                                    {
                                        websitecombo[6].lists.map((e, i) => {
                                            return (
                                                <li key={i}
                                                    className="text-sm text-white font-normal flex items-start gap-[10px] leading-[20px] mb-3 relative pl-3">
                                                    <span className="block w-[6px] h-[6px] bg-yellow absolute top-[7px] left-0 rounded-full"></span>
                                                    <span>{e}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <span className="absolute top-0 right-0 bottom-0 left-0 bg-[#0e2d63] -z-10  xl:mr-[-30px]"></span>
                            </div>
                            <div>
                                <h4 className="text-[18px] xl:text-[22px] leading-[32px] text-[#ffffff] mb-5">
                                    CALL FOR CUSTOM <br /> PRICING & STRATEGY
                                </h4>
                                <p className="text-[16px] leading-[22px] text-yellow font-semibold mb-3">
                                    Free 30 Min Consultation
                                </p>
                                <div className="" dangerouslySetInnerHTML={{
                                    __html: `<a href="javascript:$zopim.livechat.window.show();" class="flex items-center gap-1 text-[16px] leading-[26px] font-semibold text-[#ffffff] mb-3">
                                <Image src="/icons/chat-yellow.svg" alt="chat" width="30" height="30" />
                                <span>Live Chat Now</span>
                            </a>`
                                }} />
                                <div className="" dangerouslySetInnerHTML={{
                                    __html: `<a href="tel:(855)888-8399" class="flex items-center gap-1 text-[16px] leading-[26px] font-semibold text-[#ffffff] mb-3">
                                    <Image src="/icons/call-yellow.svg" alt="call" width="30" height="30" />
                                    <span>(855) 888-8399</span>
                                </a>`
                                }} />
                                <div className="" dangerouslySetInnerHTML={{
                                    __html: `<a href="#ContactUs" class="w-full text-center leading-[50px] rounded-full h-[50px] block bg-yellow text-black text-[18px] font-sans font-semibold hover:ring-4 hover:bg-transparent ring-yellow mx-auto hover:text-yellow mb-5">
                                Request A Quote Now
                            </a>`
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Combo;