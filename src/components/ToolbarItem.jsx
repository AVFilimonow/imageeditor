
let ToolBar = ({ id, label, value, min, max, setFunction }) => {
    return (
        <div className="sm:py-[16px] py-[8px] w-full">
            <div className="flex justify-between w-full">
                <label className="block mb-2 text-slate-400" for={id}>{label}</label>
                <p className=" text-slate-400">{value}</p>
            </div>
            <input
                className="w-full cursor-pointer rounded-lg appearance-none bg-gray-400 focus:bg-white h-[2px] w-128"
                name={id}
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(event) => { setFunction(event.target.value) }}
            />
        </div>
    )
}

export default ToolBar

