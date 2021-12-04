import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    product: String,
    leakedInfo: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostProduct = mongoose.model('PostProduct', productSchema);

export default PostProduct;