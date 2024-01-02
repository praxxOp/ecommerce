import React from 'react';
import "./Homeslider.css";
import data from '@/app/data';
import Nike1 from "../../../ecommerce-assets/first.png";
import Image from 'next/image';
const Homeslider = () => {
  return (
    <div className="main__slider">
      <p>“Your premier source for fresh, brand new footwear. Explore the latest trends, step out in style, and make every stride a statement. Discover a world of quality, comfort, and fashion at KickUp. Elevate your look today."</p>
      <div className="imagecontainer">
        <Image src={Nike1}
        height={100}
        width={100}/>
        <h1>{data[0].Name}</h1>
      </div>
    </div>
  );
};

export default Homeslider;
