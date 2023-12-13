import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";
import { CiHeart } from "react-icons/ci";


interface RoomDetailsProps {
  images: any; // Ensure that this line exists
}

const ImageSlider: React.FC<RoomDetailsProps> = ({ images }) => {
  console.log(images, "IMAGES");

  return (
    <Carousel indicators={false}
    nextIcon={
      <IoIosArrowDroprightCircle size={30} />
    }
    prevIcon={
      <IoIosArrowDropleftCircle size={30} />
    }>
      {images.map((item: any) => (
        <Carousel.Item>
          <img className="card-img-top mx-auto img-fluid img-thumbnail" src={item.url} alt="test"/>
        </Carousel.Item>
        
      ))}
    </Carousel>
  );
};

export default ImageSlider;
