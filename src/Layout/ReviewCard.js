import React from "react";

const ReviewCard = (props) => {
  return (
     
    <img
          className="  rounded-lg object-[length:10px_400px] w-full md:w-auto  md:h-auto "
          src={props.img}
          alt="img"
        />
   
  
  );
};

export default ReviewCard;