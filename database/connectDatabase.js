import mongoose from 'mongoose';

export default async function connectDatabase(){
    try{
        const connect = await mongoose.connect(process.env.DATABASE_URL);
        console.log('database connected successfully');
    }catch(error){
        console.log('unable to connect database : ' + error);
    }
}