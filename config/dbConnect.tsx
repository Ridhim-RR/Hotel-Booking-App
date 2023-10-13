import mongoose from "mongoose";

const DbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  } else {
    let DB_URI: string = "";

    if (process.env.NODE_ENV !== "production") {
      DB_URI = process.env.DB_LOCAL_URI!;
    }
    await mongoose.connect(DB_URI).then((con) => console.log("Database connecteddddd"))
  }
};

export default DbConnect;
