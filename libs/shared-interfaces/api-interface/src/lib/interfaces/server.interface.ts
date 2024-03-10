export interface ServerInterface {
  id: string;
  serverIdFromEmbyDb: string;
  serverName: string;
  description: string;
  isMainServer: boolean;
  isActive: boolean;
  apiKey: string;
  ipAddress: string;
  portNumber: number;
}
