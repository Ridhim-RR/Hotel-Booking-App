import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends  Document{
    name: string,
    email: string,
    password: string,
    avatar?:{
        public_id: string,
        url: string
    },
    role?: string,
    createdAt?: Date,
    resetPasswordToken?: string,
    resetPasswordExpires?: Date
}

const userSchema: Schema<IUser> = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: [6,"Your password must be longer than 6 character"],
        select: false
    },
    avatar:{
        public_id: String,
        url: String
    },
    role: {
        type: String,
        default: "User"
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
})

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema)

export default User;