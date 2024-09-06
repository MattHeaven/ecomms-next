import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
    },
    password: {
        type: String,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    profileImage: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
    },
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],
    notificationPreferences: {
        orderUpdates: {
            type: Boolean,
            default: true,
        },
        promotions: {
            type: Boolean,
            default: false,
        },
        
    }, 
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ],
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;