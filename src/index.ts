import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.send(`<div>
//     <h1>Hi there!</h1>
//   </div>`);
// });

app.listen(3000, () => {
  console.log('port is running');
});
