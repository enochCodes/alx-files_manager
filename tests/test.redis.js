#!/usr/bin/node

import redisClient from './utils/redis.js';

(async () => {
  console.log('--- Testing RedisClient ---');

  console.log('Checking if Redis is alive...');
  console.log('Redis is alive:', redisClient.isAlive()); // Should be true

  console.log('--- Testing Set and Get ---');
  console.log('Setting a key "testKey" with value "testValue" and TTL 10 seconds...');
  await redisClient.set('testKey', 'testValue', 10);
  console.log('Getting value of "testKey":', await redisClient.get('testKey')); // Should return 'testValue'

  console.log('--- Testing Expiration ---');
  console.log('Waiting for 11 seconds to check key expiration...');
  await new Promise((resolve) => setTimeout(resolve, 11000)); // Wait 11 seconds
  console.log('Getting value of "testKey" after expiration:', await redisClient.get('testKey')); // Should return null

  console.log('--- Testing Delete ---');
  console.log('Setting a new key "tempKey"...');
  await redisClient.set('tempKey', 'tempValue', 30);
  console.log('Deleting key "tempKey"...');
  console.log('Delete result:', await redisClient.del('tempKey')); // Should return 1 (number of keys deleted)
  console.log('Getting value of "tempKey" after deletion:', await redisClient.get('tempKey')); // Should return null

  console.log('--- RedisClient Testing Complete ---');
})();
