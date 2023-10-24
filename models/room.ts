import mongoose, { Schema } from "mongoose";


const roomSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please enter room name"],
      trim: true,
      maxLength: [200, "Room name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      // required: [true, "Please enter room name"],
    },
    pricePerNight: {
      type: Number,
      // required: [true, "Please enter room address"],
    },
    address: {
      type: String,
      // required: [true, "Please enter room address"],
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number], // Array of two numbers for longitude and latitude
        index: "2dsphere",
      },
      formattedAddress: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    guestCapacity: {
      type: Number,
      // required: [true, "Please enter guest capacity"],
    },
    numberOfBeds: {
      type: Number,
      // required: [true, "Please enter no of beds in room"],
    },
    internet: {
      type: Boolean,
      default: false,
    },
    isBreakfast: {
      type: Boolean,
      default: false,
    },
    isRoomCleaning: {
      type: Boolean,
      default: false,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    images: [
      {
        publicId: String,
        url: String,
      },
    ],
    category: {
      type: String,
      // required: [true, "Please enter room category"],
      enum: {
        values: ["King", "Single", "Twins"],
        message: "Please select correct category for room",
      },
    },
    reviews: [
      {
        users: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        ratings: {
          type: Number,
        },
        Comment: {
          type: String,
        },
      },
    ],
    users: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);
export default Room;


