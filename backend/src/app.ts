/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { SERVER_STATUS } from './api/apiConstants';
import router from './api/routes';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors({ origin: "*" }))
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // Error handling
    res.status(err.status || 500).json({
      error: {
        message: err.message,
        code: SERVER_STATUS.INTERNAL_SERVER_ERROR,
      },
      data: null,
    });
  }
);

// Routes
app.use('/', router);

export default app;
