
let AddImageIcon = ({ func, className }) => {
    return (
        <button onClick={func} className={`cursor:pointer ${className}`}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2Z" fill="#6E6F71" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 16C24.5128 16 24.9355 16.386 24.9933 16.8834L25 17V31C25 31.5523 24.5523 32 24 32C23.4872 32 23.0645 31.614 23.0067 31.1166L23 31V17C23 16.4477 23.4477 16 24 16Z" fill="#6E6F71" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31 23C31.5523 23 32 23.4477 32 24C32 24.5128 31.614 24.9355 31.1166 24.9933L31 25H17C16.4477 25 16 24.5523 16 24C16 23.4872 16.386 23.0645 16.8834 23.0067L17 23H31Z" fill="#6E6F71" />
            </svg>
        </button>
    )
}

export default AddImageIcon;

