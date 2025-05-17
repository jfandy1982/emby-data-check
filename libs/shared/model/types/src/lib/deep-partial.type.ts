// Type which makes each property and subsequent property of an object optional
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Date ? T[P] : T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends object ? DeepPartial<T[P]> : T[P];
};
