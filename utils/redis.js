#!/usr/bin/node

import redis from 'redis';
class RedisClient {
  constructor() {
    this.client = redis.createClient({
      host: localhost,
      port: 6379,
    });
    this.client.on('error', (err) => {
        console.error('Redis connection error:', err);
    });
    this.client.on('connect', () => {
        console.log('Redis client connected to the server');
    }
    );
  }

  isAlive() {
    return this.client.isOpen;
  }

  async get(key) {
    try {
        const value = await this.client.get(key);
        return value;
    } catch (error) {
        console.error('Error getting key from Redis: ',error);
        return null;
    }
}

  async set(key, value, duration) {
    try {
        await this.client.set(key, value, { EX: duration });
    } catch (error) {
        console.error('Error setting key in Redis: ',error);
    }
}

  async del(key) {
    try {
        const result = await this.client.del(key);
        return result;
      } catch (error) {
        console.error('Error deleting key from Redis:', error);
        return null;
    }
  }
}

const redisClient = new RedisClient();
export default redisClient;