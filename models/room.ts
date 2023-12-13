import mongoose, { Schema, Document, Types } from "mongoose";

interface Location {
  type: string;
  coordinates: [number, number];
  formattedAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

interface Image {
  publicId: string;
  url: string;
}

interface Review {
  user: Types.ObjectId;
  ratings: number;
  comment: string;
}
export interface IRoom extends Document {
  name?: string;
  description?: string;
  pricePerNight?: number;
  address?: string;
  location?: Location;
  guestCapacity?: number;
  numberOfBeds?: number;
  internet?: boolean;
  isBreakfast?: boolean;
  isAirConditined?: boolean
  isRoomCleaning?: boolean;
  isPetsAllowed?: boolean;
  ratings?: number;
  numOfReviews?: number;
  images?: Image[];
  category?: "King" | "Single" | "Twins";
  reviews?: Review[];
  user?: Types.ObjectId;
}



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
    isAirConditined:{
      type: Boolean,
      default: false
    },
    isPetsAllowed:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.models.Room || mongoose.model<IRoom>('Room', roomSchema);

export default Room;


