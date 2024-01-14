import 'dotenv/config';
import express from 'express';
import authRoute from './routes/v1/auth.routes';
import { notFoundError,otherError } from './middlewares/errorhandling.middleware';

const app = express();
const {PORT} = process.env;
app.use(express.json());

app.use('/api/v1/auth',authRoute);

//error handling
app.use(otherError);
app.use(notFoundError);

app.listen(PORT,() : void => {
    console.log('connected to port',PORT);
});

