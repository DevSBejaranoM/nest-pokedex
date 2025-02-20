export const EnvConfigutation = () => ({
  enviroment: process.env.NODE_ENV || 'development',
  mongodb: process.env.MONGODB || 'mongodb://mongo:yshtXplcWmXeKrFVRkQRfBVoUdwXpWyk@gondola.proxy.rlwy.net:55681',
  port: process.env.PORT || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 10,
});
