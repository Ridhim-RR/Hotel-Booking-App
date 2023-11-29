import mongoose from "mongoose";
import Room from "../models/room";
import { rooms } from "./data";
const seedRooms = async () => {
  try {
    await mongoose.connect("mongodb+srv://Ridhim-user:T5qL0DQMbIoK0ZZ3@cluster0.fkmczrj.mongodb.net/?retryWrites=true&w=majority&authMechanism=DEFAULT");
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
