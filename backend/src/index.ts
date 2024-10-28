import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import path from 'path';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const uri: string = process.env.MONGO_URI || "";


// (async () => {
//     try {
//         await mongoose.connect(uri);
//         console.log('Connected to the database');
//     } catch(error) {
//         console.error(error);
//     }
// })();

app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html', 'index.html'));
});

app.use('/api', contactRoutes);

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
