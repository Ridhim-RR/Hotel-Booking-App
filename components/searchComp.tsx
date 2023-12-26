'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchComp: React.FC = () => {
    const [location, setLocation] = useState("");
    const [guests, setGuests] = useState(1);
    const [category, setCategory] = useState("King");
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push(`/?search=${location}&guestCapacity=${guests}&category=${category}`)
    }
   
  return (
    <div className="row wrapper mt-5">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded" >
          <h2 className="mb-3">Search Rooms</h2>
          <div className="form-group mt-3">
            <label htmlFor="location_field" className="mb-1">
              {" "}
              Location{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="location_field"
              placeholder="new york"
              value={location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setLocation(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="guest_field" className="mb-1">
              {" "}
              No. of Guests{" "}
            </label>
            <select className="form-select" id="guest_field" onChange={(e:any) => setGuests(e.target.value)}>
              {[1,2,3,4,5].map((num) => (
                <option key={num} value={num}>{num}</option>
                ))}
            </select>
          </div>

          <div className="form-group mt-3">
            <label htmlFor="room_type_field" className="mb-1">
              {" "}
              Room Type{" "}
            </label>
            <select className="form-select" id="room_type_field" onChange={(e:any) => setCategory(e.target.value)}>
              {["King","Single","Twins"].map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn form-btn w-100 py-2" onClick={(e: any) => handleSubmit(e)}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchComp;
