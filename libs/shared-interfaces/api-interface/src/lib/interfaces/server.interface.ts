export interface ServerInterface {
  id: string;
  serverIdFromEmbyDb: string;
  servername: string;
  description: string;
  mainServer: boolean;
  isActive: boolean;
  apiKey: string;
  ipAddress: string;
  portNumber: number;
}
