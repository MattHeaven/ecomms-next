import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    images: [
        {
            type: String,
        }
    ],
    price: {
        type: Number,
        },
    originalPrice: {
        type: Number,
    },
    brand: {
        type: String,
    },
    material: {
        type: String,
    },
    bracelet: {
        type: String,
    },
    condition: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ],
    averageRating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    movement: {
        type: String,
        enum: ["Rolex 3235 Automatic Movement", "Rolex 3135 Automatic Movement", "Rolex 2236 Automatic Movement", "Rolex 2235 Automatic Movement", "Rolex 2231", "Patek Philippe 324 S C", "Patek Philippe 324 S QR", "Patek Philippe 240 PS"], //Drpdown
        default: "Rolex 3235 Automatic Movement",
    },
    thickness: {
        type: String,
        default: "12 mm",
    },
    glass: {
        type: String,
        default: "Sapphire Crystal",
    },
    luminova: {
        type: String,
        default: "Yes",
    },
    casematerial: {
        type: String,
        enum: ["316L Stainless Steel", "904L Stainless Steel", "18k Yellow Gold", "18k White Gold", "18k Everose Gold", "950 Platinum"],
        default: "316L Stainless Steel",
    },
    crown: {
        type: String,
        default: "Screwed",
    },
    bandsize: {
        type: String,
        default: "14.5 cm - 22.5 cm adjustable",
    },
    lugs: {
        type: String,
        default: "20 mm",
    },
    water: {
        type: String,
        default: "3 ATM",
    },
}, {timestamps: true});

productSchema.methods.hadUserPurchased = async function (userId) {
    const Order = mongoose.model('Order');

    const order = await Order.findOne(
        {
            user: userId,
            cartProducts: this._id, 
            status: "Delivered",
            paid: true,
        }
    );
    return !!order;
}

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);