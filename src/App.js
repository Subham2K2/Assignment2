// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [selectedImages, setSelectedImages] = useState([]);

  // Dragging Effect



  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    // console.log(selectedFiles);
    // console.log(Array.isArray(selectedFiles))
    const selectedFilesArray = Array.from(selectedFiles);

    // console.log(selectedFilesArray)

    const imagesArray = selectedFilesArray.map((File) => {
      return URL.createObjectURL(File);
    });

    // setSelectedImages(imagesArray);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  }
  return (
    <section>
      <label>
        + Add Images
        <br />
        <input type='file' name='images' onChange={onSelectFile} multiple accept='image/png, image/jpeg, image/webp' />
      </label>
      <div className='images'>
        {selectedImages && selectedImages.map((image, index) => {
          return (
            <div key={image} className='image'>
              <img key={index} src={image} className='image' draggable />
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default App;


{/* <button onClick={() => setSelectedImages(selectedImages.filter((e) => e !== image))}>
                delete image
              </button> */}