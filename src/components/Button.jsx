
let Button = ({ func, title, className }) => {
    return (
        <button className={`${className} font-regular text-white px-10 py-4 cursor-pointer bg-transparent border-[1px] border-[#4D4D4F] hover:bg-[#4D4D4F] focus:bg-[#b9b8b8] transition ease-in-out delay-150`} onClick={func}>
            {title}
        </button>
    )
}

export default Button;

