import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', () =>{
            console.log('MongoDB connected');
        })
        connection.on('error',(err) => {
            console.log('There is some error.' + err)
        })
    }catch(error){
        console.log('Something goes wrong!')
        console.log(error)
    }
    
}