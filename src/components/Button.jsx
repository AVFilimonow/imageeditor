
let Button = ({ clickHandler, title, className }) => {
    return (
        <button className={`${className} btn`} onClick={clickHandler}>
            {title}
        </button>
    )
}

export default Button;

