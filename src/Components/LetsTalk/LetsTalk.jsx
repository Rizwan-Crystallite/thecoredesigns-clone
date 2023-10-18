// Components
import CTA from "@/Components/CTA";
import Image from "next/image";
// CSS
import styles from "./letstalk.module.css";

const LetsTalk = () => {
    return (
        <section>
            <div className="py-[50px]">
                <div className="container">
                    <div className="border-[10px] border-[#fcd71c] p-[30px] sm:p-[40px]">
                        <div className="flex gap-10 items-center flex-wrap lg:flex-nowrap justify-between">
                            <div className="basis-full sm:basis-[45%] lg:basis-[33%]">
                                <h2 className="text-[35px] sm:text-[25px] md:text-[35px] lg:text-[25px] xl:text-[40px] 2xl:text-[45px] leading-tight text-black mb-3">
                                    Get A Free Quote
                                </h2>
                                <CTA
                                    text="Let's Get Started"
                                    href="javascript:$zopim.livechat.window.show();"
                                    css="border-[#db3340] text-white hover:bg-transparent hover:text-[#db3340]"
                                    bg="bg-[#db3340]"
                                />
                            </div>
                            <div className="basis-full sm:basis-[45%] lg:basis-[27%]">
                                <Image src="/letstalk.png" width={230} height={237} alt="letstalk" className="block m-auto" />
                            </div>
                            <div className="basis-full lg:basis-[38%]">
                                <div className={`lg:pl-[160px] ${styles.transformText} relative flex justify-evenly flex-col gap-5 sm:gap-0 sm:flex-row text-center lg:text-left lg:flex-col lg:gap-5`}>
                                    <div>
                                        <span className="text-[16px] xl:text-[20px] font-raleway block leading-none text-[#3d3d3c] font-bold mb-1">
                                            Call us Anytime
                                        </span>
                                        <div className="w-max m-auto sm:m-0" dangerouslySetInnerHTML={{
                                            __html: `<a href="tel:+18325326065" class="text-[28px] text-[#db3340] font-light">(832) 532-6065</a>`
                                        }} />
                                    </div>
                                    <div>
                                        <span className="text-[16px] xl:text-[20px] font-raleway block leading-none text-[#3d3d3c] font-bold mb-1">
                                            To discuss your project
                                        </span>
                                        <div className="w-max m-auto sm:m-0" dangerouslySetInnerHTML={{
                                            __html: `<a href="javascript:$zopim.livechat.window.show();" class="text-[28px] text-[#db3340] font-light">Start Chat Live</a>`
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LetsTalk;