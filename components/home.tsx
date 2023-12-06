import Link from "next/link";
import React from "react";

interface Props {
  data: {
    rooms: any;
    totalRooms: Number;
  };
}
const HomeComp = ({ data }: Props) => {
  const { rooms, totalRooms } = data;
  return (
    <div>
      <div>
        <section id="rooms" className="container mt-5">
          <h2 className="mb-3 ml-2 stays-heading">All Rooms</h2>
          <Link href="/search" className="ml-2 back-to-search">
            <i className="fa fa-arrow-left"></i> Back to Search
          </Link>
          <div className="row mt-4">
            {rooms?.length > 0
              ? rooms.map((item: any) => {
                  return (
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3 d-flex">
                      <div className="card p-2 w-100">
                        <img
                          className="card-img-top mx-auto"
                          src={
                            item.images.length > 0
                              ? item.images[0].url
                              : "images/default_room_image.jpg"
                          }
                          alt={item.name}
                          height="170"
                          width="100"
                        />
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">
                            <Link href="/rooms/roomId">{item.name}</Link>
                          </h5>
                          <div className="mt-auto">
                            <p className="card-text mt-2">
                              <b>${item.pricePerNight}:</b> / night
                            </p>
                          </div>
                          <div>
                            <div>
                              <span className="no-of-reviews">
                                {item.numOfReviews} Reviews
                              </span>
                            </div>
                            <Link
                              className="btn view-btn mt-3 w-100"
                              href={`${process.env.API_URL}/rooms/${item._id}`}
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeComp;
