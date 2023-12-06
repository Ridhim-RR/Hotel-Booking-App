"use client";
import React from "react";
import ImageSlider from "./imageSlider";
import RoomFeatures from "./roomFeatures";
import BookingDatePicker from "./BookingDatePicker";


const RoomDetails = ({ data }: any) => {
  console.log(data,"DATA");
  return (
    <>
      <div className="container container-fluid">
        <h2 className="mt-5">Lorem Ipsum Room</h2>
        <p>1234 Lorem Ipsum Street, Lorem City</p>
        <div className="ratings mt-auto mb-3">
          {/* <StarRatings
   rating={data?.ratings}
   starRatedColor="#e61e4d"
   numberOfStars={5}
   starDimension="18px"
   starSpacing="1px"
   name="rating"
  /> */}

          <span className="no-of-reviews">(50 Reviews)</span>
        </div>
      </div>
      <ImageSlider images={data?.room?.images} />
      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum nulla sit amet eros iaculis, id venenatis purus tempor.
            Sed bibendum bibendum tellus, sed suscipit elit condimentum nec.
            Aliquam id venenatis ipsum. Sed vel lorem vitae leo sodales iaculis.
            Sed vehicula, tellus in ultrices vestibulum, erat quam fermentum
            tortor, quis feugiat erat dolor in est.
          </p>
          <RoomFeatures room={data} />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={data} />
        </div>
      </div>
    </>
  );
};
export default RoomDetails;
