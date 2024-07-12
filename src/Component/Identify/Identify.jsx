import React, { useRef, useState, useContext } from 'react';
import { uploadcontext } from '../../context/UploadContextProvider';
import axios from 'axios';
import Modal from '../Modal/Modal';

export default function Identify() {
  const inputRef = useRef(null);
  const { uploadimage, saveToHistory } = useContext(uploadcontext);
  const [image, setImage] = useState(null);
  const [soilType, setSoilType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    if (!image) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const identifyImage = async () => {
    console.log("Identify button clicked"); // Debug log
    if (image) {
      const formData = new FormData();
      formData.append('file', image);

      try {
        console.log("Sending image to API"); // Debug log
        const response = await uploadimage(formData);
        console.log("API response:", response); // Debug log
        setSoilType(response.name);
        setShowModal(true);
      } catch (error) {
        console.error('Error identifying the image:', error);
      }
    }
  };

  
  const handleSave = async () => {
    try {
      console.log("Save to history");
      const formData = new FormData();
      formData.append('file', image);
      await saveToHistory(formData, true);
      setShowModal(false);
    } catch (error) {
      console.error('Error saving to history:', error);
    }
  };

  const handleIgnore = () => {
    // Implement ignore functionality here
    console.log("Ignore");
    setShowModal(false);
  };

  return (
    <>
      <div className="container">
        <div className="div text-center mt-4">
          <h3>{image ? 'Identify the image' : 'Upload an image:'}</h3>
        </div>
        <div className="container box mb-5 mt-5 text-center d-flex flex-wrap flex-column justify-content-center align-items-center" onClick={handleImageClick}>
          <div className='w-25'>
            {image ? (
              <img src={URL.createObjectURL(image)} className='w-50 mt-2' alt='' />
            ) : (
              <img src="images/upload.jpg" className='w-75 mt-3' alt="" />
            )}
            <p></p>
          </div>
          <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageChange} disabled={!!image}/>      
          <button className='btn bg-success text-white mb-2 mt-5' onClick={identifyImage}>
            {image ? 'Identify' : 'Upload'}
          </button>
        </div>
      </div>
      <Modal show={showModal} soilType={soilType} onSave={handleSave} onIgnore={handleIgnore} />
      </>
  );
}
