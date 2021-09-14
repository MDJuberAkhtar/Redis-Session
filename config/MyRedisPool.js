const redis = require('redis');


//console.log('RedisPoolConnection:init');
let redis_config = {};
redis_config.host = process.env.RedisHost;
redis_config.port = process.env.RedisPort;
redis_config.auth_pass = process.env.RedisPasswd;
//console.log('RedisPoolConnection:redis_config',redis_config);

//Create RedisPoolConnection
const redisClient = redis.createClient(redis_config);
redisClient.on('error', function(status){console.error('RedisPoolConnection', new Date(), 'Redis_Error', status);});
redisClient.on('connect', function(){console.error('RedisPoolConnection', new Date(), 'Redis_Connected');});
redisClient.on('end', function(){console.error('RedisPoolConnection', new Date(), 'Redis_End');});
module.exports = redisClient;