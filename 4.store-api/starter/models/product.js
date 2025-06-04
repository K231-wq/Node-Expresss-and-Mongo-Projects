const mongoose = require('mongoose');

const ProductScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'PRODUCT NAME MUST BE PROVIDED'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'PRODUCT PRICE MUST BE PROVIDED']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported',
        }
        // enum: ['ikea', 'liddy', 'caressa', 'marcos']
    }
});

module.exports = mongoose.model('Product', ProductScheme);