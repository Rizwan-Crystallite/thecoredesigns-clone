const Button = ({
    handle,
    text,
    width = "w-full",
    height = "h-[45px]",
    bg = "bg-yellow",
    css
}) => {
    return (
        <button
            type="button"
            onClick={handle}
            className={`block text-center text-[18px] font-semibold rounded-sm leading-[43px] border-2 transition-all ${bg} ${height} ${width} ${css}`}
        >
            {text}
        </button>
    )
}

export default Button;