import { registerAs } from '@nestjs/config';

export default registerAs('embyConfigEnvVars', () => ({
  emby_server_host: process.env.EMBY_SERVER_HOST,
  emby_server_port: process.env.EMBY_SERVER_PORT,
  emby_server_api_key: process.env.EMBY_SERVER_API_KEY,
}));
