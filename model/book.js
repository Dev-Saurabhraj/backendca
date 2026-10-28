import mongoose from 'mongoose';


const Book = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
    },
    category : {
        type : String,
        required : true
    },
    isAvailable : {
        type : Boolean,
        default : true,
    }
}, {
    timestamps:true
})

        

export default mongoose.model('Book', Book);