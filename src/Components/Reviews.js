import React from "react";
import ReviewCard from "../Layout/ReviewCard";
import img1 from "../Assets/card-img.jpeg";


const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">

      <div className=" flex flex-col md:flex-row gap-5 mt-6">
        <ReviewCard img={img1} />
        <ReviewCard img={img1} />
        <ReviewCard img={img1} />
      </div>
    </div>
  );
};

export default Reviews;