import { useRef } from 'react'
import useImageEditor from '../helpers/useImageEditor'
import ToolBar from './ToolbarItem'
import Button from './Button'

const ImageEditor = () => {
    const {
        image,
        handleFileInputChange,
        filterValues,
        handleFilterChange,
        handleResetFilters,
        applyFilters,
        handleDownloadImage,
    } = useImageEditor();


    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };


    return (
        <div className="min-h-screen bg-[#F5F5F5] max-w-[1600px] md:px-[54px] sm:px-[32px] px-[16px] mx-auto">
            <div className="flex md:flex-row flex-col md:justify-between justify-start min-h-screen items-center">
                <div className="md:w-[25%] w-full p-4">
                    <div className="mb-4">
                        <input
                            type="file"
                            id="file-input"
                            accept="image/*"
                            onChange={handleFileInputChange}
                            ref={inputRef}
                            className="hidden"
                        />
                        <Button clickHandler={handleClick} title="Upload Image" />
                    </div>
                    <ToolBar
                        id="brightness-input"
                        title="Brightness"
                        name="brightness"
                        min="0"
                        max="200"
                        value={filterValues.brightness}
                        onChange={handleFilterChange}
                    />
                    <ToolBar
                        id="contrast-input"
                        title="Contrast"
                        name="contrast"
                        min="0"
                        max="200"
                        value={filterValues.contrast}
                        onChange={handleFilterChange}
                    />
                    <ToolBar
                        id="saturation-input"
                        title="Saturation"
                        name="saturation"
                        min="0"
                        max="200"
                        value={filterValues.saturation}
                        onChange={handleFilterChange}
                    />
                    <ToolBar
                        id="hue-rotate-input"
                        title="HueRotate"
                        name="hueRotate"
                        min="0"
                        max="360"
                        value={filterValues.hueRotate}
                        onChange={handleFilterChange}
                    />
                    <ToolBar
                        id="blur-input"
                        title="Blur"
                        name="blur"
                        min="0"
                        max="20"
                        value={filterValues.blur}
                        onChange={handleFilterChange}
                    />
                    <ToolBar
                        id="grayscale-input"
                        title="Grayscale"
                        name="grayscale"
                        min="0"
                        max="100"
                        value={filterValues.grayscale}
                        onChange={handleFilterChange}
                    />
                    <ToolBar
                        id="sepia-input"
                        title="Sepia"
                        name="sepia"
                        min="0"
                        max="100"
                        value={filterValues.sepia}
                        onChange={handleFilterChange}
                    />
                    <ToolBar
                        id="invert-input"
                        title="Invert"
                        name="invert"
                        min="0"
                        max="100"
                        value={filterValues.invert}
                        onChange={handleFilterChange}
                        className="mb-4"
                    />
                    {image && (

                        <div className="flex flex-col">
                            <Button className="mb-4" clickHandler={handleResetFilters} title="Reset Filters" />
                            <Button clickHandler={handleDownloadImage} title="Download Image" />
                        </div>

                    )}
                </div>
                <div className="md:w-[80%] w-full md:order-last order-first">
                    {image && (
                        <div className="">
                            <img
                                className="p-4 max-h-screen mx-auto"
                                src={image}
                                alt="Uploaded image"
                                style={applyFilters()}
                            />
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default ImageEditor;