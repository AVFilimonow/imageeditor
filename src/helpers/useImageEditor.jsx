import React, { useState } from "react";

const useImageEditor = () => {
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState("");
    const [filterValues, setFilterValues] = useState({
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotate: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        invert: 0,
    });

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            setImage(event.target.result);
            setFilename(file.name);
        };
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterValues((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleResetFilters = () => {
        setFilterValues({
            brightness: 100,
            contrast: 100,
            saturation: 100,
            hueRotate: 0,
            blur: 0,
            grayscale: 0,
            sepia: 0,
            invert: 0,
        });
    };

    const applyFilters = () => {
        const filterString = Object.entries(filterValues)
            .map(([filterName, filterValue]) => {
                switch (filterName) {
                    case "brightness":
                        return `brightness(${filterValue}%)`;
                    case "contrast":
                        return `contrast(${filterValue}%)`;
                    case "saturation":
                        return `saturate(${filterValue}%)`;
                    case "hueRotate":
                        return `hue-rotate(${filterValue}deg)`;
                    case "blur":
                        return `blur(${filterValue}px)`;
                    case "grayscale":
                        return `grayscale(${filterValue}%)`;
                    case "sepia":
                        return `sepia(${filterValue}%)`;
                    case "invert":
                        return `invert(${filterValue}%)`;
                    default:
                        return "";
                }
            })
            .join(" ");
        return {
            filter: filterString,
        };
    };

    String.prototype.hashCode = function () {
        let hash = 0;
        if (this.length == 0) {
            return hash;
        }
        for (let i = 0; i < this.length; i++) {
            let char = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };

    const handleDownloadImage = () => {
        const canvas = document.createElement("canvas");
        const imageElement = document.createElement("img");
        imageElement.src = image;
        imageElement.onload = () => {
            canvas.width = imageElement.width;
            canvas.height = imageElement.height;
            const ctx = canvas.getContext("2d");
            ctx.filter = applyFilters().filter;
            ctx.drawImage(imageElement, 0, 0);

            // Get a hash code based on the used filters
            const hash = Object.values(filterValues).join("-").hashCode();

            // Combine the filename and hash code to create the new filename
            const newFilename = `${filename.split(".")[0]}-filtered-${hash}.png`;

            const link = document.createElement("a");
            link.download = newFilename;
            link.href = canvas.toDataURL();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    };

    return {
        image,
        handleFileInputChange,
        filterValues,
        handleFilterChange,
        handleResetFilters,
        applyFilters,
        handleDownloadImage,
    };
};

export default useImageEditor

