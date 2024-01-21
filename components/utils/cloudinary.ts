// import {v2 } from 'cloudinary';
// import {cloudinary} from 'cloudinary'
import {v2 as cloudinary} from 'cloudinary';

import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});
 const options = {
  resource_type: "auto",
  secure : true
 }
// const uploadOnCloudinary = async (file: string, folder:any) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.v2.uploader.upload(
//       file,
//       (result:any) => {
//         resolve({
//           public_id: result.public_id,
//           url : result.url

//         })
//       },
//       {
//         resource_type:"auto",
//         folder:folder
//       }
//     )
//   })
//  try {
//     if(!filePath){
//         return null;
//     }
//     const response = await cloudinary.uploader.upload(filePath,{
//         resource_type: "auto"
//     })
//     // file upload success::
//     console.log("File is upload is uploaded on cloudinary");
//     console.log(response.url);
//     return response
//  } catch (error) {
//     fs.unlinkSync(filePath);  //remove the locally  saved temporaray file in case the upload function is failed
//  }
// }
const uploadOnCloudinary = (file:any, folder?:any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      (result:any) => {
        resolve({
          public_id: result.public_id,
          url: result.url,
        });
        options
      },
    );
  });
};


export {uploadOnCloudinary, cloudinary};
