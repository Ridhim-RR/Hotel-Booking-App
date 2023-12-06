import React from "react";
import Carousel from "react-bootstrap/Carousel";

interface RoomDetailsProps {
  images: any; // Ensure that this line exists
}

const ImageSlider: React.FC<RoomDetailsProps> = ({ images }) => {
  console.log(images, "IMAGES");

  return (
    // <div className="container">
    //   <div className="d-flex flex-col p-2 col-12 border border-secondary rounded">
    //     <div
    //       id="carouselExampleControls"
    //       className="carousel slide"
    //       data-ride="carousel"
    //     >
    //       <div className="carousel-inner">

    //         <div className="carousel-item active">
    //           <img className="d-block w-100" src="https://a0.muscache.com/im/pictures/miso/Hosting-676044415326884478/original/e32429f8-56bd-4ba1-a98a-46efc64e3e69.jpeg?im_w=1200" alt="First slide" />
    //         </div>
    //         <div className="carousel-item">
    //           <img className="d-block w-100" src="https://a0.muscache.com/im/pictures/miso/Hosting-676044415326884478/original/e32429f8-56bd-4ba1-a98a-46efc64e3e69.jpeg?im_w=1200" alt="Second slide" />
    //         </div>
    //         <div className="carousel-item">
    //           <img className="d-block w-100" src="https://a0.muscache.com/im/pictures/miso/Hosting-676044415326884478/original/e32429f8-56bd-4ba1-a98a-46efc64e3e69.jpeg?im_w=1200" alt="Third slide" />
    //         </div>
    //       </div>
    //       <a
    //         className="carousel-control-prev"
    //         href="#carouselExampleControls"
    //         role="button"
    //         data-slide="prev"
    //       >
    //         <span
    //           className="carousel-control-prev-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="sr-only">Previous</span>
    //       </a>
    //       <a
    //         className="carousel-control-next"
    //         href="#carouselExampleControls"
    //         role="button"
    //         data-slide="next"
    //       >
    //         <span
    //           className="carousel-control-next-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="sr-only">Next</span>
    //       </a>
    //     </div>
    //     {/* <img
    //       className="d-block m-auto"
    //       src="https://a0.muscache.com/im/pictures/miso/Hosting-676044415326884478/original/e32429f8-56bd-4ba1-a98a-46efc64e3e69.jpeg?im_w=1200"
    //       alt="images/default_room_image.jpg"
    //       style={{ width: "100%", height: "400px" }}
    //     /> */}
    //   </div>
    // </div>
    <Carousel>
      {images.map((item: any) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item.url} alt="test" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
// {images.map((item: any) => (
//   <div className="carousel-item">
//     <img
//       className="d-block w-100"
//       src={item.url}
//       alt="test"

//     />
//   </div>
// ))}
