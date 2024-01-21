"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const Sample = () => {
  const [image, setImage] = useState("");
  const [preview, setpreview] = useState("");
  const handleChange = async (e: any) => {
     const file =  e.target.files;
     const img = file[0];
     setpreview(URL.createObjectURL(img));
     setImage(img);
     const form = new FormData();
     form.set('upload',img);

     const res = await fetch(`${process.env.NEXT_PUBLIC_API}/upload`,{
      method:'POST',
      body: form
     })
     console.log(res);
    }
    console.log(image);
    console.log(preview);

    return (
      <div>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <label>Select a file:</label>
        <div>
        {preview !== "" ? <Image src ={preview} alt="imageeee" height={500} width={500}/> : null}
        </div>
      
        <input type="file" id="myfile" name="myfile" onChange={(e: any) => handleChange(e)}></input>
      </div>
    );
  };
  
  export default Sample;
   


