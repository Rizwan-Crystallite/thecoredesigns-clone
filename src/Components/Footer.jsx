import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    // Social Links Array
    let socialLinks = [
        {
            icon: "/icons/social/facebook.svg",
            width: 13,
            height: 25,
            link: "/"
        },
        {
            icon: "/icons/social/instagram.svg",
            width: 20,
            height: 20,
            link: "/"
        },
        {
            icon: "/icons/social/linkedin.svg",
            width: 19,
            height: 19,
            link: "/"
        },
        {
            icon: "/icons/social/twitter.svg",
            width: 20,
            height: 17,
            link: "/"
        }
    ]
    // Services Links Array
    let servicesLinks = [
        {
            text: "Logo Design",
            link: "/"
        },
        {
            text: "Branding",
            link: "/"
        },
        {
            text: "Web Design & Development",
            link: "/"
        },
        {
            text: "Video Animations",
            link: "/"
        },
        {
            text: "SEO",
            link: "/"
        },
        {
            text: "Social Media Marketing",
            link: "/"
        },
        {
            text: "Hosting",
            link: "/"
        },
        {
            text: "Web Content Writing",
            link: "/"
        }
    ]
    // Company Links
    let companyLinks = [
        {
            text: "Portfolio",
            link: "/"
        },
        {
            text: "About Us",
            link: "/"
        },
        {
            text: "Blogs",
            link: "/"
        },
        {
            text: "Contact Us",
            link: "/"
        },
        {
            text: "Privacy Policy",
            link: "/"
        },
        {
            text: "Terms & Conditions",
            link: "/"
        },
    ]
    return (
        <footer>
            <div className="bg-[url('../../public/bg/footer.png')] bg-cover bg-bottom bg-no-repeat pt-[50px] lg:pt-[100px]">
                <div className="container">
                    <div className="flex flex-wrap lg:flex-nowrap lg:gap-5">
                        <div className="basis-full md:basis-1/2 lg:basis-[30%]">
                            <Image src="/logo.png" width={200} height={56} alt="logo" className="brightness-0 invert" />
                            <p className="text-[12px] sm:text-[14px] text-gray-400 leading-[24px] mt-5">
                                Website Iconix is a fully stacked result-driven professional website design agency based in Houston, Texas. We take a holistic approach to leading your business to the next level by providing engaging and fascinating website design services.
                            </p>
                            <ul className="flex gap-3 items-center mt-5">
                                {
                                    socialLinks && socialLinks.map((e, i) => (<li key={i} className="w-8 h-8 flex items-center justify-center bg-[#db3340] hover:rounded-full hover:opacity-50 transition-all cursor-pointer">
                                        <a href={e.link}><Image src={e.icon} width={e.width} height={e.height} alt="icons" /></a>
                                    </li>))
                                }
                            </ul>
                        </div>
                        <div className="basis-full my-5 md:my-0 md:basis-1/2 lg:basis-[40%] grid grid-cols-2 gap-5">
                            <div>
                                <h5 className="text-[20px] leading-none text-white font-semibold mb-5">
                                    Services
                                </h5>
                                <ul className="flex flex-col gap-2">
                                    {
                                        servicesLinks && servicesLinks.map((e, i) => (<li key={i}>
                                            <Link href={e.link} className="text-gray-400 text-[12px] sm:text-[14px]">{e.text}</Link>
                                        </li>))
                                    }
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-[20px] leading-none text-white font-semibold mb-5">
                                    Company
                                </h5>
                                <ul className="flex flex-col gap-2">
                                    {
                                        companyLinks && companyLinks.map((e, i) => (<li key={i}>
                                            <Link href={e.link} className="text-gray-400 text-[12px] sm:text-[14px]">{e.text}</Link>
                                        </li>))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="basis-full lg:basis-[30%]">
                            <h5 className="text-[20px] leading-none text-white font-semibold mb-5 flex gap-3">
                                <Image src="/icons/usa.svg" width={30} height={30} alt="usa" />
                                Headquarter
                            </h5>
                            <p className="text-[12px] sm:text-[14px] text-gray-400 leading-[24px] mb-2">
                                Northwood Tower at Midtown 5757 Alpha Rd, Suite 410 Dallas, TX 75240
                            </p>
                            <div className="w-max" dangerouslySetInnerHTML={{
                                __html: `<a href="tel:+18325326065" class="text-[12px] sm:text-[14px] text-gray-400 leading-[24px]">(832) 532-6065</a>`
                            }} />
                        </div>
                    </div>
                    <div className="border-t-2 border-[#3f3f40] mt-10">
                        <p className="text-[12px] sm:text-[14px] text-gray-400 leading-[24px] text-center py-5">
                            Copyright © 2023 Website Iconix. | Brand Of Bhaoo Incorporation Company
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;