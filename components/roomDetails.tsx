"use client";
import React from "react";
import ImageSlider from "./imageSlider";
import RoomFeatures from "./roomFeatures";
import BookingDatePicker from "./BookingDatePicker";

const RoomDetails = ({ data }: any) => {
  console.log(data, "DATA");
  return (
    <div className="container">
      <div className="container container-fluid">
        <h2 className="mt-5">{data?.room?.name}</h2>
        <p>{data?.room?.address}</p>
        <div className="ratings mt-auto mb-3">
          <span className="no-of-reviews">
            {data?.room?.numOfReviews} Reviews
          </span>
        </div>
      </div>
      <div className="container">
        <div className="image_detail">
          <div className="left_detailimg">
            <img src={data?.room?.images[0].url} />
          </div>
          <div className="imgdiv">
            {data?.room?.images.map((image: any, index: number) => {
              if (index != 0) {
                return <img src={image.url} />;
              }
            })}
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>{data?.room?.description}</p>
          <RoomFeatures room={data} />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <BookingDatePicker room={data} />
        </div>
      </div>
    </div>
  );
};
export default RoomDetails;
