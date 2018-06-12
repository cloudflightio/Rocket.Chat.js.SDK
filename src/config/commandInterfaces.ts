/*
 * RocketChat clientCommand type
 */
export interface IClientCommand {
  _id: string // generated by Random.id()
  u: {
    _id: string,
    username: string
  }
  cmd: {
    key: string
  }
  ts: Date
}

/*
 * Structure of the object to reply to a clientCommand
 */
export interface IClientCommandResponse {
  status?: number,
  msg: string
}

/*
 * Prototype of a function that handles a clientCommand
 */
export interface IClientCommandHandler {
  (command: IClientCommand): Promise<IClientCommandResponse>
}

/*
 * Structure of a map of handlers, - add types to avoid TSLint errors
 */
export interface IClientCommandHandlerMap {
  [key: string]: IClientCommandHandler
}
