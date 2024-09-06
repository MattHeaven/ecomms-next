import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide Customer name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide customer email'],
    },
    city: {
        type: String,
        required: [true, 'Please provide customer city'],
    },
    postalCode: {
        type: String,
        required: [true, 'Please provide customer postal code'],
    },
    streetAddress: {
        type: String,
        required: [true, 'Please provide customer street address'],
    },
    country: {
        type: String,
        required: [true, 'Please provide customer country'],
    },
    paid: {
        type: Boolean,
        default: false,
    },
    cartProducts: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                price: Number,
            },
        }
    ],
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["processing", "pending", "phipped", "delivered", "cancelled", "payment_failed"], 
        default: "pending",
    },
    total: {
        type: Number,
        required: [true, 'Must have a total number'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

const Order = mongoose.models.Order || mongoose.model('Product', productSchema);