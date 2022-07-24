import express from 'express';

import { UserController } from './controllers/UserController';
import { redis } from './lib/cache';

const app = express();

app.get('/users', UserController.find);
app.get('/clear-cache', async(request, response) => {
  await redis.del("users:all")
  return response.status(200).send();
});

app.listen(3001, () => console.log('Server started on port 3001!'));
