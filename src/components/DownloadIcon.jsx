
let DownloadIcon = ({ func, className }) => {
    return (
        <button onClick={func} className={`cursor:pointer ${className}`}>
            <svg width="60px" height="60px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path xmlns="http://www.w3.org/2000/svg" d="M19 15V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V15M12 5V15M12 15L10 13M12 15L14 13" stroke="#6E6F71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            </svg>
        </button>
    )
}

export default DownloadIcon;

