
let ToolBar = ({
  id,
  title,
  name,
  min,
  max,
  value,
  className,
  onChange }) => {
  return (
    <div className={`${className} mb-4`}>
      <label htmlFor={id}>{title}</label>
      <input
        type="range"
        id={id}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        style={{
          WebkitAppearance: "none",
          appearance: "none",
          width: "100%",
          height: "2px",
          background: "gray",
          borderRadius: "5px",
          outline: "none",
          opacity: "0.7",
          transition: "opacity .2s",
          cursor: "pointer",
        }}
      />
      <style jsx>{`
        input::-webkit-slider-thumb {
          WebkitAppearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: black;
          border-radius: 50%;
          boxShadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          position: relative;
          top: 0px;
          transition: transform 0.2s;
          transform: scale(1.2);
        }

        input:hover::-webkit-slider-thumb {
          opacity: 1;
        }

        input:active::-webkit-slider-thumb {
          transform: scale(1.5);
        }

        input::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: black;
          border-radius: 50%;
          boxShadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          position: relative;
          top: -5px;
          transition: transform 0.2s;
          transform: scale(1.2);
        }

        input:hover::-moz-range-thumb {
          opacity: 1;
        }

        input:active::-moz-range-thumb {
          transform: scale(1.5);
        }       
      `}</style>
    </div>
  )
}

export default ToolBar

