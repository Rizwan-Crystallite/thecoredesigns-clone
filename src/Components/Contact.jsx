"use client"
// Components
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import Textarea from "@/Components/Textarea";
import Button from "@/Components/Button";

const Contact = () => {
    // Options
    let businessSize = [
        "Personal Project",
        "Sole Trader/Self-employed",
        "Size (1 to 9 Employees)",
        "Size (10 to 29 Employees)",
        "Size (30 to 99 Employees)",
        "Other"
    ]
    let industry = [
        "Business Services",
        "Creative Industries",
        "Entertainment & Events",
        "Financial Services"
    ]
    let budget = [
        "Less then $500",
        "$500 - $999",
        "$1000 - $1199",
        "$2000 - $2999"
    ]
    return (
        <section>
            <div className="bg-[url('../../public/bg/contact.png')] bg-cover bg-bottom bg-no-repeat overflow-hidden">
                <div className="container">
                    <div className="flex gap-5 items-center flex-wrap md:flex-nowrap">
                        <div className="basis-full md:basis-1/3">
                            <div className="relative z-10 py-[50px] md:py-[100px] md:px-5">
                                <span className="absolute top-0 left-0 right-0 bottom-0 bg-[#db3340] -z-10 ml-[-100%] mr-[-100%] md:mr-0"></span>
                                <h2 className="text-[50px] xl:text-[60px] leading-none text-white">
                                    Ready For <br /> Some <span className="text-yellow italic">Fun</span> <br /> Discussion?
                                </h2>
                                <span className="block my-5 h-1 bg-yellow w-7/12"></span>
                                <p className="text-[20px] text-white font-normal leading-[30px] mb-5">
                                    We make all your dreams <br /> come true in a successful <br /> project.
                                </p>
                                <div>
                                    <div className="w-max" dangerouslySetInnerHTML={{
                                        __html: `<a href="tel:+18325326065" class="text-[20px] text-white font-semibold">(832) 532-6065</a>`
                                    }} />
                                    <div className="w-max" dangerouslySetInnerHTML={{
                                        __html: `<a href="mailto:info@example.com" class="text-[20px] text-white font-semibold">info@example.com</a>`
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className="basis-full md:basis-2/3 lg:pl-[100px] pb-5 md:pb-0">
                            <div className="mb-5">
                                <h2 className="text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] leading-tight text-black mb-3">
                                    Let's Get Started
                                </h2>
                                <p className="text-[16px] leading-[26px] text-black font-normal">
                                    Fill out the form or send us an email, and we'll get back with you as soon as possible.
                                </p>
                            </div>
                            <form autoComplete="off" spellCheck="false" className="grid grid-cols-2 gap-3 relative">
                                <Input
                                    name="name"
                                    placeholder="Name*"
                                    css="focus:border-yellow"
                                    bg="bg-white"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    css="focus:border-yellow"
                                    bg="bg-white"
                                />
                                <Input
                                    type="phone"
                                    name="phone"
                                    placeholder="Phone*"
                                    css="focus:border-yellow"
                                    bg="bg-white"
                                />
                                <Select
                                    options={businessSize}
                                    name="businessSize"
                                    placeholder="Business Size ?"
                                    css="focus:border-yellow"
                                    bg="bg-white"
                                />
                                <Select
                                    options={budget}
                                    name="budget"
                                    placeholder="Budget ?"
                                    css="focus:border-yellow"
                                    bg="bg-white"
                                />
                                <Select
                                    options={industry}
                                    name="industry"
                                    placeholder="Industry ?"
                                    css="focus:border-yellow"
                                    bg="bg-white"
                                />
                                <div className="col-span-2">
                                    <Textarea
                                        name="description"
                                        placeholder="To help us understand better, enter a brief description about your project."
                                        css="focus:border-yellow"
                                        bg="bg-white"
                                    />
                                </div>
                                <Button
                                    text="Get A Free Quote"
                                    css="border-yellow hover:bg-transparent"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;