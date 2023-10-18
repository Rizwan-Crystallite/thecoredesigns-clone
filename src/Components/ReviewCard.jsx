// Components
import Image from "next/image";

const ReviewCard = ({ content, name }) => {
    return (
        <div className="p-5 shadow-md shadow-gray-200 bg-white w-[90%] m-auto">
            <div className="flex items-center gap-5">
                <span className="text-[#17313b] text-[20px] block leading-none font-medium">5.0</span>
                <Image src="/icons/5stars.png" width={90} height={18} alt="stars" />
            </div>
            <p className="text-[#17313b] text-[15px] leading-[23px] my-5 min-h-[80px]">
                {content}
            </p>
            <span className="text-[14px] text-[#6a7a7e] block leading-none">{name}</span>
            <span className="text-[14px] text-[#6a797d] leading-none flex mt-10 items-center gap-2">
                <Image src="/icons/verified.svg" width={14} height={14} alt="verified" />
                Verified Review
            </span>
        </div>
    )
}

export default ReviewCard