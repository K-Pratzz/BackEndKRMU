const mongoose=require('mongoose');
//userdb 
async function connectDB(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/userdb');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error); 
        process.exit(1);
    }
}

connectDB();