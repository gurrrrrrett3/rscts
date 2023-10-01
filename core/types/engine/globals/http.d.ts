/**
 * Library for sending HTTP(S) requests.
 */
declare class http {
  /**
   * Send an HTTP(S) GET request synchronously.
   * Available in worker threads.
   * Not recommended to use this on the main thread.
   * @param scheme The hostname of the server to send the request to, with optional protocol and port. Ex. google.com, https://google.com, https://google.com:443
   * @param path The path to request from the server.
   * @param headers The table of request headers.
   */
  public static getSync(
    scheme: string,
    path: string,
    headers?: {
      [key: string]: string;
    }
  ): HTTPResponse | null;

  /**
   * Send an HTTP(S) POST request synchronously.
   * Available in worker threads.
   * Not recommended to use this on the main thread.
   * @param scheme The hostname of the server to send the request to, with optional protocol and port. Ex. google.com, https://google.com, https://google.com:443
   * @param path The path to request from the server.
   * @param headers The table of request headers.
   * @param body The request body.
   * @param contentType The request body MIME type.
   */
  public static postSync(
    scheme: string,
    path: string,
    headers: {
      [key: string]: string;
    },
    body: string,
    contentType: string
  ): HTTPResponse | null;
}

declare interface HTTPResponse {
  /**
   * The HTTP status code.
   */
  status: number;

  /**
   * The response body.
   */
  body: string;

  /**
   * The response headers.
   */
  headers: {
    [key: string]: string;
  };
}
