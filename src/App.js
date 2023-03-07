import React, { useState, useRef } from "react";
import ToolBar from './components/ToolbarItem';
import Button from "./components/Button";
import AddImageIcon from "./components/AddImgIcon";
import AddCameraImageIcon from "./components/AddCameraImgIcon"
import DownloadIcon from "./components/DownloadIcon"

function App() {

  const [image, setImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [blur, setBlur] = useState(0);
  const [inversion, setInversion] = useState(0);

  let filters = [
    {
      id: "brightness",
      value: brightness,
      label: "Brightness",
      min: "0",
      max: "200",
      setFunction: setBrightness,
    },
    {
      id: "saturation",
      value: saturation,
      label: "Saturation",
      min: "0",
      max: "200",
      setFunction: setSaturation,
    },
    {
      id: "contrast",
      value: contrast,
      label: "Contrast",
      min: "0",
      max: "200",
      setFunction: setContrast,
    },
    {
      id: "blur",
      value: blur,
      label: "Blur",
      min: "0",
      max: "20",
      setFunction: setBlur,
    },
    {
      id: "inversion",
      value: inversion,
      label: "Inversion",
      min: "0",
      max: "200",
      setFunction: setInversion,
    },
  ]

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();
      image.onload = () => {
        setImage(image);
      };
      image.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  const hiddenFileInput = useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  function handleDownload() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    context.filter = `brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%)`;
    context.drawImage(image, 0, 0);
    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "edited-image.png";
      link.href = url;
      link.click();
    }, "image/png");
  }
  return (
    <div className="bg-[#161718] font-['Montserrat'] h-full min-h-screen">
      <div className="flex relative gap-6 sm:gap-10 md:flex-row flex-col xl:justify-start justify-start w-[100vw] min-h-screen md:h-full h-full sm:p-10 p-5 max-w-[1600px] mx-auto">
        <div className="rounded-[16px] md:grow grow-0">
          <img
            src={image && image.src}
            className="w-full h-full object-contain border-none"
            style={{
              filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px) invert(${inversion}%)`
            }}
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 justify-center md:w-[450px] w-full rounded-[16px] mb-[100px]">
          <h1 className="font-semibold text-white text-[32px]">Image editor</h1>
          <label htmlFor="file-input" className="sm:py-[16px] py-[8px] sm:block hidden">
            <Button func={handleClick} title="Upload a file" className="" />
            <input className="mb-[12px] hidden" ref={hiddenFileInput} id="file-input" type="file" onChange={handleImageUpload} />
          </label>
          <div className="mb-4">
            {filters.map((el, index) => {
              return (
                <ToolBar
                  id={el.id}
                  value={el.value}
                  label={el.label}
                  min={el.min}
                  max={el.max}
                  setFunction={el.setFunction}
                  key={index}
                />
              )
            })}
          </div>
          <Button className="sm:block hidden" func={handleDownload} title="Download" />
        </div>

        <div className="sm:hidden flex justify-between fixed bg-[#161718] bottom-0 left-0 right-0 w-full p-4 border-t-2 border-t-[#4D4D4F]">
          <AddImageIcon func={handleClick} />
          <DownloadIcon func={handleDownload} />
        </div>
      </div>
    </div>

  );
}

export default App;
