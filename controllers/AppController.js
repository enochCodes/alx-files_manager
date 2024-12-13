#!/usr/bin/node
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static async getStatus(_, res) {
    const redisStatus = await redisClient.isAlive();
    const dbStatus = await dbClient.isAlive();
    console.log(redisStatus, dbStatus);
    res.status(200).json({
      redis: redisStatus,
      db: dbStatus,
    });
  }

  static async getStats(_, res) {
    const numberOfUsers = await dbClient.nbUsers();
    const numberOfFiles = await dbClient.nbFiles();
    res.status(200).send({
      users: numberOfUsers,
      files: numberOfFiles,
    });
  }
}

module.exports = AppController;
