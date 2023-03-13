
let Button = ({ clickHandler, title, className }) => {
    return (
        <button className={`${className} font-bold uppercase text-white px-10 py-2 cursor-pointer rounded-[12px] bg-[#D08884] hover:bg-[#AC6A66] transition delay-50`} onClick={clickHandler}>
            {title}
        </button>
    )
}

export default Button;

