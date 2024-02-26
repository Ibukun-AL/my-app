import React from "react";
import img from "../Assets/bg-image-main.jpeg";
import { Link } from "react-scroll";
import Button from "../Layout/Button";
import img1 from "../Assets/card-img.jpeg";
import ReviewCard from "../Layout/ReviewCard";

const Home = () => {
  return (
    <div className="relative">
    <div style={{ position: 'absolute', top: '166px', left: '126px' }} className="font-satoshi">
      <h2 className="text-white text-8xl font-semibold leading-tight">
        Kemi's Birthday <br/>
        <span className="text-brightGreen">Celebration</span>
      </h2>
      <Link to="contact" spy={true} smooth={true} duration={500}>
      <Button title="View Album" />
      </Link>

      <div className="grid gap-1 grid-cols-3 border-red ">
      <div className="border-red-900"> <ReviewCard img={img1} /></div>
  <div><ReviewCard img={img1} /></div>
  <div><ReviewCard img={img1} /></div>
</div>
    </div>
    <img src={img} alt="img" className="w-full  max-h-[200vh] object-cover" />
  </div>
  );
};

export default Home;