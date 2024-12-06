import express from 'express';
import cors from 'cors';
import recipesRoute from './routes/recipesRoute';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Recipe Finder Backend!');
});

app.use('/api/recipes', recipesRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});