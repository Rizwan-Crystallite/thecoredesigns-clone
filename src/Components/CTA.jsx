const CTA = ({ text, href, bg = "bg-yellow", css }) => {
    return (
        <div className="w-full sm:w-max" dangerouslySetInnerHTML={{
            __html: `<a href=${href} class="w-full sm:w-max text-center px-5 h-[50px] ${bg} border-2 text-[18px] font-semibold rounded-md block leading-[48px] ${css} transition-all" >
            ${text}
        </a>`
        }} />
    )
}

export default CTA;