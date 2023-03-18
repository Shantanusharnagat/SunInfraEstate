import mongoose from 'mongoose'

const {Schema} = mongoose;

const PlotSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    distance:{
        type: String,
        required:true
    },
    photos:{
        type: [String],
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    area:{
        type: [Number],
        required: true
        
    },
    price:{
        type: Number,
        requied:true,
    },
    featured:{
        type: Boolean,
        requied:false,
    }

})

export default mongoose.model("Plot", PlotSchema)