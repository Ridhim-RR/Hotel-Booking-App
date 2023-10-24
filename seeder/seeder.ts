import mongoose from "mongoose";
import Room from "../models/room";
import { rooms } from "./data";
const seedRooms = async () => {
  try {
    await mongoose.connect("mongodb+srv://Ridhim:dzS4LfXJL8Gvvzjd@cluster0.u6rhpfw.mongodb.net/");
    await Room.deleteMany();
    console.log("Deleted many");
    await Room.insertMany(rooms);
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};

seedRooms();
