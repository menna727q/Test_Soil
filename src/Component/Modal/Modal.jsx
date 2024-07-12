import React from 'react';

const soilTypeToCrops = {
  "Red Soil": ["Wheat", "Millet", "Sorghum", "Pigeon Peas", "Chickpeas", "Groundnut", "Soybean", "Citrus", "Pomegranate", "Guava", "Potatoes", "Tomatoes", "Onions"],
  "Clay Soil": ["Rice", "Cabbage", "Broccoli", "Brussels Sprouts", "Apple", "Pear", "Plum", "Beans", "Peas", "Sugarcane", "Cotton"],
  "Black Soil": ["Sorghum", "Wheat", "Maize", "Lentils", "Peas", "Chickpeas", "Cotton", "Sunflower", "Safflower", "Soybean", "Onions", "Carrots"],
  "Alluvial Soil": ["Rice", "Wheat", "Maize", "Barley", "Gram", "Lentils", "Pigeon Peas", "Mustard", "Sunflower", "Mango", "Banana", "Papaya", "Potatoes", "Beans", "Cucumbers", "Sugarcane"]
};

function Modal({ show, soilType, onSave, onIgnore }) {
  if (!show) {
    return null;
  }

  const crops = soilTypeToCrops[soilType] || [];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Your soil type is <span className='soill'>{soilType}</span></h3>
        <h4>Suitable crops:</h4>
        <ul className='list-unstyled d-flex mb-3 '>
          {crops.map((crop, index) => (
            <li key={index}>{crop} , </li>
          ))}
        </ul>
        <div className="buttons d-flex m-auto align-items-center">
          <button className="btn  text-white me-3" onClick={onSave}>Save to History</button>
          <button className="btn bg-danger text-white" onClick={onIgnore}>Ignore</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
