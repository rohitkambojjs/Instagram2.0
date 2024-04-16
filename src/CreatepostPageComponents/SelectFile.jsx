import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addPreviewUrl} from "../Redux-Toolkit/postSlice"

function ImageSelector() { // Improved name for clarity
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // Using imageUrl for clarity
  const dispatch = useDispatch()
  const handleFileChange = (event) => {
    const newFile = event.target.files[0];
    setSelectedFile(newFile);

    if (newFile) {
      const newImageUrl = URL.createObjectURL(newFile);
      setImageUrl(newImageUrl);
      dispatch(addPreviewUrl(newImageUrl))
    } else {
      setImageUrl(null); // Clear image preview if no file selected
    }
  };

  return (
    <div className='w-96 min-h-[420px] rounded-xl my-8 m-auto bg-black text-white flex flex-col items-center justify-center'>
      <img src={imageUrl} alt="" width={"200px"} className='mb-10'/>
      <div className='w-full mb-12 text-9xl flex items-center justify-center'>
        <i className="fa-solid fa-photo-film"></i>  {/* Using className for proper usage */}
      </div>
      <div className='relative'>
        <button
          className='text-[18px] bg-[#0095f6] font-semibold py-1 px-4 rounded-lg text-white '
        >
          Select from computer
        </button>
        <input type="file" className='absolute top-0 left-0 opacity-0' onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default ImageSelector;
