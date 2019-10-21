export = P2mLogger;
declare class P2mLogger {
  constructor(category: string, path?: string);

  log(...args: Array<any>): void;
  trace(...args: Array<any>): void;
  debug(...args: Array<any>): void;
  info(...args: Array<any>): void;
  warn(...args: Array<any>): void;
  error(...args: Array<any>): void;
  fatal(...args: Array<any>): void;
}
