// Type to return a value that can be either synchronous or asynchronous
export type SyncOrAsync<T> = T | Promise<T>;
