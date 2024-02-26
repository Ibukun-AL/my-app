import React from "react";

const PhotoGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col ">
          <img
            src={image.src}
            alt={image.alt || `Image ${index + 1}`}
            className="object-cover rounded-lg w-full h-48 sm:h-64 md:h-80"
          />
          <p className="mt-2 ml-6">{image.description}</p>
          <small className="text-left text-gray-400  ml-6">{image.date}</small>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
