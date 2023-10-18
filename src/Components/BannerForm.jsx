"use client"
// Components
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import Textarea from "@/Components/Textarea";
import Button from "@/Components/Button";

const BannerForm = () => {
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
        <form autoComplete="off" spellCheck="false" className="flex flex-col gap-5 relative">
            <Input
                name="name"
                placeholder="Name*"
                css="focus:border-yellow"
            />
            <Input
                type="email"
                name="email"
                placeholder="Email*"
                css="focus:border-yellow"
            />
            <Input
                type="phone"
                name="phone"
                placeholder="Phone*"
                css="focus:border-yellow"
            />
            <Select
                options={businessSize}
                name="businessSize"
                placeholder="Business Size ?"
                css="focus:border-yellow"
            />
            <Select
                options={budget}
                name="budget"
                placeholder="Budget ?"
                css="focus:border-yellow"
            />
            <Select
                options={industry}
                name="industry"
                placeholder="Industry ?"
                css="focus:border-yellow"
            />
            <Textarea
                name="description"
                placeholder="To help us understand better, enter a brief description about your project."
                css="focus:border-yellow"
            />
            <Button
                text="Get A Free Quote"
                css="border-yellow hover:bg-transparent"
            />
        </form>
    )
}

export default BannerForm;