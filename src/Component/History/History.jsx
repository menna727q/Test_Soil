import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getuserHistory();
  }, []);

  const soilTypeToCrops = {
    "Red Soil": ["Wheat", "Millet", "Sorghum", "Pigeon Peas", "Chickpeas", "Groundnut", "Soybean", "Citrus", "Pomegranate", "Guava", "Potatoes", "Tomatoes", "Onions"],
    "Clay Soil": ["Rice", "Cabbage", "Broccoli", "Brussels Sprouts", "Apple", "Pear", "Plum", "Beans", "Peas", "Sugarcane", "Cotton"],
    "Black Soil": ["Sorghum", "Wheat", "Maize", "Lentils", "Peas", "Chickpeas", "Cotton", "Sunflower", "Safflower", "Soybean", "Onions", "Carrots"],
    "Alluvial Soil": ["Rice", "Wheat", "Maize", "Barley", "Gram", "Lentils", "Pigeon Peas", "Mustard", "Sunflower", "Mango", "Banana", "Papaya", "Potatoes", "Beans", "Cucumbers", "Sugarcane"]
  };
  const imageappear=process.env.REACT_APP_PUBLIC_FOLDER;

  function getuserHistory() {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    axios.get("https://gp-rb8c.onrender.com/history", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(({ data }) => {
        console.log("API Response Data:", data);
        if (Array.isArray(data)) {
          setHistory(data);
        } else {
          console.error("Data is not an array:", data);
          data.array.forEach(element => {

            console.log(element.image.secure_url)
          });
          setHistory([]);
        }
      })
      .catch(err => {
        console.error("Error fetching user history:", err);
        setHistory([]);
      });
  }
  function removeFromHistory(id) {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    axios.delete(`https://gp-rb8c.onrender.com/delete`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { _id: id } // Send _id in the request body
    })
      .then(() => {
        setHistory(history.filter(item => item._id !== id));
      })
      .catch(err => {
        console.error("Error removing item from history:", err.response); // Log detailed error response
      });
  }
  

  function handleImageError(event) {
    event.target.src = 'https://via.placeholder.com/150'; // URL of the dummy image
  }

  return (
    <div className='container mt-5'>
      {history.length === 0 ? (
        <p className='fw-bolder fs-1 text-center'>No history found</p>
      ) : (
        history.map(item => (
          <div className="row p-1 border-bottom" key={item._id}>
            <div className="col-md-6">
              <div className="content d-flex">
                <img src={item.image.secure_url} className='w-25' alt="" />
                <h4 className='mt-5 ms-3'>{item.name}</h4>
                <p className='mt-5 ms-5'>{soilTypeToCrops[item.name] ? soilTypeToCrops[item.name].join(', ') : 'No suitable crops found'}</p>
              </div>
            </div>
            <div className="col-md-4 ms-auto">
              <button 
                className={`btn m-0 p-0 text-red mt-5`} 
                onClick={() => removeFromHistory(item._id)}
              >
                <i className='fa-solid fa-trash-can'></i> <span>Remove</span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
