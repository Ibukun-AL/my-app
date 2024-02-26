import React from 'react'
import { useState } from 'react';
import Navbar from '../Components/Navbar'
import BottomHeader from '../Components/BottomHeader'
import PhotoGallery from '../Components/PhotoGallery';
import img1 from "../Assets/card-img.jpeg";
import Pagination from '../Components/Pagination';

const images = [
    { src: img1, alt: "Image 1" ,description: "This is the first image.",date:"20/06/2023 at 11am" },
    { src: img1, alt: "Image 1" ,description: "This is the first image.",date:"20/06/2023 at 11am" },
    { src: img1, alt: "Image 1" ,description: "This is the first image." ,date:"20/06/2023 at 11am"},
    { src: img1, alt: "Image 1" ,description: "This is the first image.",date:"20/06/2023 at 11am" },
    { src: img1, alt: "Image 1" ,description: "This is the first image." ,date:"20/06/2023 at 11am"},
    { src: img1, alt: "Image 1",description: "This is the first image." ,date:"20/06/2023 at 11am" },
    { src: img1, alt: "Image 1" ,description: "This is the first image.",date:"20/06/2023 at 11am" },
    { src: img1, alt: "Image 1" ,description: "This is the first image.",date:"20/06/2023 at 11am" },
  ];
  

const GalleryPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 11;
  return (
    <div>
        <Navbar/>
        <BottomHeader/>
        <PhotoGallery images={images} />
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default GalleryPage