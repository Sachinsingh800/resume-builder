import React, { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import style from "./CropImage.module.css";
import { useRecoilState } from 'recoil';
import { croppedImageState } from '../../Recoil';

const CropImage = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState(null);

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
    if (!image) return null;

    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      croppedAreaPixels.x * scaleX,
      croppedAreaPixels.y * scaleY,
      croppedAreaPixels.width * scaleX,
      croppedAreaPixels.height * scaleY,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to create a blob.'));
          return;
        }
        resolve(blob);
      }, 'image/jpeg');
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = new window.Image(); // Use the standard JavaScript Image constructor
        newImage.src = event.target.result;
        newImage.onload = () => {
          setImage(newImage);
          setZoom(1);
          setCrop({ x: 0, y: 0 });
          setCroppedImage(null);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    // You can send the 'croppedImage' blob to your server for saving or perform further actions here.
    // For this example, we'll just display the cropped image.
    alert('Cropped image saved or processed.');
  };

  return (
    <div className={style.main}>
      <div className="image-upload">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="image-upload-input"
        />
      </div>
      {image && (
        <>
          <div className={style.crop_container}>
            <Cropper
              image={image.src}
              crop={crop}
              zoom={zoom}
              aspect={2 / 2}
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
      {croppedImage && (
        <div>
          <img src={croppedImage} alt="Cropped Image" />
          <button onClick={handleSaveImage}>Save Cropped Image</button>
        </div>
      )}
    </div>
  );
};

export default CropImage;
