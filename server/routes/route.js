import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);

router.get('/file/:fileId', getImage);

export default router;



// route.js jo file h n wo handle kregi ki kya hona h kis routeb p 
// yani yha hm route ko middleware ya callback funtion denge as parameter