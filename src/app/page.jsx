"use client"
// Components
import BannerForm from "@/Components/BannerForm";
import CTA from "@/Components/CTA";
import Contact from "@/Components/Contact";
import FilterTabs from "@/Components/FilterTabs";
import Footer from "@/Components/Footer";
import LetsTalk from "@/Components/LetsTalk/LetsTalk";
import PackagesTabs from "@/Components/PackagesTabs/PackagesTabs";
import ProcessTabs from "@/Components/ProcessTabs";
import Reviews from "@/Components/Reviews/Reviews";
import ServicesCardSlider from "@/Components/ServicesCardSlider";
import Combo from "@/Components/WebsiteDesign/Combo";
import Image from "next/image";

const Page = () => {
  return (
    <main>
      <section>
        <div className="bg-[url('../../public/bg/texture-bg.png')] bg-cover pt-[200px] pb-[50px] bg-fixed">
          <div className="container">
            <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-5">
              <div className="basis-full lg:basis-[60%]">
                <span className="text-[16px] md:text-[20px] 2xl:text-[24px] font-medium text-yellow leading-tight block">
                  #1 TOP WEB DESIGN AGENCY
                </span>
                <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[40px] xl:text-[50px] 2xl:text-[55px] leading-tight text-white">
                  Custom Website Design <br /> Pricing Starts from <span className="text-yellow">$299</span>
                </h1>
                <span className="block my-5 h-1 bg-yellow w-7/12"></span>
                <p className="text-[16px] 2xl:text-[18px] leading-[26px] 2xl:leading-[28px] text-white font-normal text-justify md:text-left">
                  Top-rated web design and development company in Houston, TX. We build and design beautiful websites for small to medium sized businesses. Whether you need a business website, want a customized ecommerce site built for your online store, or are looking to re-design your current website, we're here to help!
                </p>
                <div className="flex gap-5 flex-wrap sm:flex-nowrap my-7">
                  <CTA
                    text="Let's Get Started"
                    href="javascript:$zopim.livechat.window.show();"
                    css="border-yellow text-black hover:bg-transparent hover:text-white"
                  />
                  <CTA
                    text="Call Us: (832) 532-6065"
                    href="tel:+18325326065"
                    css="border-yellow text-white hover:bg-yellow hover:text-black" bg="bg-transparent"
                  />
                </div>
                <Image src="/icons/ratings.png" width={436} height={45} alt="ratings" priority />
              </div>
              <div className="basis-full lg:basis-[40%]">
                <div className="bg-white rounded-2xl w-[90%] lg:w-full xl:w-5/6 m-auto p-5 shadow-2xl">
                  <h2 className="text-[30px] font-normal text-center text-black leading-tight mb-5">
                    Signup Now & <br /> <strong>Get <span className="text-yellow">70%</span> Discount</strong>
                  </h2>
                  <BannerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[60px] md:py-[100px] bg-[#f5f5f5]">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-[25px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] leading-tight text-black mb-3">
                Award-Winning Website Design Company
              </h2>
              <p className="text-[14px] 2xl:text-[18px] lg:text-[16px] leading-[24px] lg:leading-[26px] 2xl:leading-[28px] text-black font-normal lg:w-[80%] xl:w-[90%] m-auto">
                Top-Grade website design & development backed by a team of expert website designers and developers based in Houston, TX.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
              <div>
                <Image src="/awards/badge-local-excellence-upcity.png" width={215} height={185} alt="awards" className="block m-auto" />
              </div>
              <div>
                <Image src="/awards/top-web-developers-clutch-22.png" width={215} height={185} alt="awards" className="block m-auto" />
              </div>
              <div>
                <Image src="/awards/expertise-designers.png" width={215} height={185} alt="awards" className="block m-auto" />
              </div>
              <div>
                <Image src="/awards/top-website-development-companies.svg" width={215} height={185} alt="awards" className="block m-auto" />
              </div>
            </div>
            <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-10 justify-center">
              <CTA
                text="Let's Get Started"
                href="javascript:$zopim.livechat.window.show();"
                css="border-[#db3340] text-white hover:bg-transparent hover:text-[#db3340]"
                bg="bg-[#db3340]"
              />
            </div>
          </div>
        </div>
      </section>
      <FilterTabs />
      <section>
        <div className="pt-[70px] lg:pt-[90px]">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-[22px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] leading-tight text-black mb-3">
                Build Concrete Digital Existence <br />
                With Our <span className="text-[#1d1c84]">Website Design</span> Services
              </h2>
              <p className="text-[14px] 2xl:text-[18px] lg:text-[16px] leading-[24px] lg:leading-[26px] 2xl:leading-[28px] text-black font-normal lg:w-[80%] xl:w-[90%] m-auto">
                Our work is a testament to our Website Design. It speaks aloud in respect of Website Design, SEO, Google-ads and social media marketing. It demonstrates How our Web Design Service helped you achieve the caliber of value for businesses like yours.
              </p>
            </div>
          </div>
          <div className="max-w-full">
            <div className="">
              <ServicesCardSlider />
            </div>
          </div>
        </div>
      </section>
      <ProcessTabs />
      <PackagesTabs />
      <LetsTalk />
      <Combo />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default Page;