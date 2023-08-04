import mongoose from "mongoose";
const connectionDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        // Variable para ver por consola donde se esta conectando
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conectado en :${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit();
    }
}

export default connectionDB;