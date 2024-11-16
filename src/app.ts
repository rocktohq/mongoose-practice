import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//* Parsers
app.use(express.json());
app.use(cors());

//* Define routes

//* Default route
app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Hello from MONGOOSE server!',
  });
});

//* Global routing error
app.all('/*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Page not found!',
  });
});

//* Global Error handler
app.use((error: unknown, req: Request, res: Response) => {
  if (error) {
    res.status(400).send({
      success: false,
      message: 'An error occurred!',
    });
  }
});

export default app;
