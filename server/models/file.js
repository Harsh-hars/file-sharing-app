//  yr ye jo file h wo validate krti ki h jo file h wo shi format m h bhi ya ni 

import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
})

const File = mongoose.model('file', FileSchema);

export default File;