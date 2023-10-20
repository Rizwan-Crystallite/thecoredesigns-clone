import Image from "next/image";
import Link from "next/link";
import CTA from "@/Components/CTA";

const Header = () => {
    return (
        <header>
            <div className="absolute left-0 right-0 top-0 py-[30px]">
                <div className="container">
                    <nav className="flex items-center">
                        <Link href="/" className="m-auto md:m-0">
                            <Image src="/logo-2.png" width={200} height={56} alt="logo" />
                        </Link>
                        <div className="hidden md:flex ml-auto gap-5">
                            <CTA
                                text="(832) 532-6065"
                                href="tel:+18325326065"
                                css="border-yellow text-white hover:bg-yellow hover:text-black" bg="bg-transparent"
                            />
                            <CTA
                                text="Let's Get Started"
                                href="javascript:$zopim.livechat.window.show();"
                                css="border-yellow text-black hover:bg-transparent hover:text-white"
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;