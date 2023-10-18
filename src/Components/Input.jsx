// Hooks
import { useId } from "react";

const Input = ({
    type = "text",
    name,
    value,
    placeholder,
    disabled = false,
    handle,
    label,
    css,
    height = "h-[40px]",
    bg = "bg-transparent",
    color = "text-gray-700"
}) => {
    const referenceID = useId();
    return (
        <div className="relative">
            {label && <label
                htmlFor={referenceID}
            >
                {label}
            </label>}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                id={referenceID}
                onChange={handle}
                className={`focus-visible:outline-none w-full px-2 border-2 text-[15px] placeholder:text-gray-300 ${bg} ${color} font-medium ${height} ${css}`}
            />
        </div>
    )
}

export default Input;