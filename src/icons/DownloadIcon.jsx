
let DownloadIcon = ({ clickHandler, className }) => {
    return (
        <button onClick={clickHandler} className={`cursor:pointer ${className}`}>
            <svg width="60px" height="60px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M11.335 13.315l-0.754 0.754 5.419 5.419 5.419-5.419-0.754-0.754-4.132 4.132v-16.877h-1.066v16.877z" fill="#6E6F71">

                </path>
                <path d="M18.666 5.9v1.066h6.931v18.126h-19.192v-18.126h6.931v-1.066h-7.997v20.259h21.325v-20.259z" fill="#6E6F71">

                </path>

            </svg>

        </button>
    )
}

export default DownloadIcon;

