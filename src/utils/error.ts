/*****************************
 * Error Definition
 *****************************/

export class ResponseError extends Error {
  statusCode: number
  body: any
  // name: string string is inherited
  // message: string is inherited
  // stack: string is inherited

  constructor(statusCode: number, message: string = 'Unknown error', body?: any) {
    super();
    this.statusCode = statusCode
    this.message = message
    this.body = body
  }
}

export default ResponseError