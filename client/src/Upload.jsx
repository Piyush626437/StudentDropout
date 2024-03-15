import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('excelFile', file);

    try {
      await axios.post('http://localhost:5000/upload-student-data', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });
      // Handle successful upload
    } catch (error) {
      // Handle errors
    }
    alert("Data Upload")
  };

  return (
    <div>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
