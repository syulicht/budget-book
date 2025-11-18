import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import router from './routes/route';

const app = express();
console.log(process.env.DATABASE_URL, 1);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
