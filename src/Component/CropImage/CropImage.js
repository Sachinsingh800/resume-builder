import React, { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import style from "./CropImage.module.css";
import { useRecoilState } from 'recoil';
import { croppedImageState } from '../../Recoil';

const CropImage = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [images, setImages] = useState([]); // Store multiple images
  const [croppedImages, setCroppedImages] = useState([]); // Store multiple cropped images

  const [croppedImage, setCroppedImage] = useRecoilState(croppedImageState);

  const cropperRef = useRef(null);

  const onCropComplete = async (croppedArea, croppedAreaPixels) => {
    try {
      const croppedImageBlob = await getCroppedImageBlob(croppedAreaPixels);
      setCroppedImage(URL.createObjectURL(croppedImageBlob));
    } catch (e) {
      console.error('Error cropping image:', e);
    }
  };

  const getCroppedImageBlob = async (croppedAreaPixels) => {
    // Implementation remains the same
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imagePromises = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
    
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage = new window.Image();
          newImage.src = event.target.result;
          newImage.onload = () => {
            setImages((prevImages) => [...prevImages, newImage]);
            setZoom(1);
            setCrop({ x: 0, y: 0 });
            setCroppedImages([]); // Clear previous cropped images
        
          };
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSaveImages = async () => {
    const croppedImagePromises = images.map((image, index) => {
      return new Promise(async (resolve) => {
        const croppedAreaPixels = await cropperRef.current.getCroppedAreaPixels();
        const croppedImageBlob = await getCroppedImageBlob(croppedAreaPixels);
        resolve({ index, blob: croppedImageBlob });
      });
    });

    const croppedImagesData = await Promise.all(croppedImagePromises);
    const sortedCroppedImages = croppedImagesData
      .sort((a, b) => a.index - b.index)
      .map((item) => URL.createObjectURL(item.blob));

    setCroppedImages(sortedCroppedImages);
    setCroppedImage(sortedCroppedImages)
  };

  return (
    <div className={style.main}>
      <div className="image-upload">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="image-upload-input"
          multiple // Allow multiple file selection
          id="upload" // Use id "upload"
        />
      </div>
      {images.length > 0 && (
        <>
          <div className={style.crop_container}>
            <Cropper
              image={images[0].src} // Display the first image
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              ref={cropperRef}
            />
          </div>
          <div className={style.control}>
            <input
              type="range"
              value={zoom}
              min={1}
              max={2}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => {
                setZoom(e.target.value);
              }}
              className="zoom-range"
            />
          </div>
        </>
      )}
      {croppedImages.length > 0 && (
        <div>
          {croppedImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Cropped Image ${index}`} />
            </div>
          ))}
          <button onClick={handleSaveImages}>Save Cropped Images</button>
        </div>
      )}
    </div>
  );
};

export default CropImage;
