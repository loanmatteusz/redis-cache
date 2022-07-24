import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { redis } from "../lib/cache";

const prismaClient = new PrismaClient();

class UserController {
  static async find(request: Request, response: Response) {
    try {
      const cacheKey = 'users:all';
      const cachedUsers = await redis.get(cacheKey);
      console.time('Requested Users');
      if (cachedUsers) {
        console.timeEnd('Requested Users');
        return response.status(200).json(JSON.parse(cachedUsers));
      }

      const users = await prismaClient.user.findMany();
      console.timeEnd('Requested Users');

      await redis.set(cacheKey, JSON.stringify(users));
      return response.json(users);
    }
    catch (err) {
      console.error(err);
      return response.json({
        error: err,
      });
    }
  }
}

export { UserController }