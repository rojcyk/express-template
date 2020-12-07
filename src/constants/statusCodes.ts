/********************************
 * SERVER ERROR 2xx STATUS CODES
 ********************************/

/* The request has succeeded. */
type OK = 200
export const OK: OK = 200

/* The request has been fulfilled and resulted in a new resource being created. */
type CREATED = 201
export const CREATED: CREATED = 201

/* The request has been accepted for processing but the processing has not been completed. */
type ACCEPTED = 202
export const ACCEPTED: ACCEPTED = 202

/* The server has fulfilled the request but does not need to return an entity-body and might
/* want to return updated meta-information. */
type NO_CONTENT = 204
export const NO_CONTENT: NO_CONTENT = 204

/********************************
 * SERVER ERROR 3xx STATUS CODES
 ********************************/

/* The requested resource has been assigned a new permanent URI and any future references to this
/* resource. SHOULD use one of the returned URIs. */
type MOVED_PERMANENTLY = 301
export const MOVED_PERMANENTLY: MOVED_PERMANENTLY = 301

/* If the client has performed a conditional GET request and access is allowed but the document
/* has not been modified the server SHOULD respond with this status code. */
type NOT_MODIFIED = 304
export const NOT_MODIFIED: NOT_MODIFIED = 304

/********************************
 * SERVER ERROR 4xx STATUS CODES
 ********************************/

/* The request could not be understood by the server due to malformed syntax. The client SHOULD
# NOT repeat the request without modifications. */
type BAD_REQUEST = 400
export const BAD_REQUEST: BAD_REQUEST = 400

/* The request requires user authentication */
type UNAUTHORIZED = 401
export const UNAUTHORIZED: UNAUTHORIZED = 401

/* Reserved for future use. The original intention was that this code might be used as part of
# some form of digital cash or micropayment scheme but that has not happened and this code is
# not usually used. */
type PAYMENT_REQUIRED = 402
export const PAYMENT_REQUIRED: PAYMENT_REQUIRED = 402

/* The server understood the request but is refusing to fulfill it. Authorization will not help
# and the request SHOULD NOT be repeated. */
type FORBIDDEN = 403
export const FORBIDDEN: FORBIDDEN = 403

/* The server has not found anything matching the Request-URI. No indication is given of whether
# the condition is temporary or permanent. */
type NOT_FOUND = 404
export const NOT_FOUND : NOT_FOUND = 404

/* The client did not produce a request within the time that the server was prepared to wait.
# The client MAY repeat the request without modifications at any later time. */
type REQUEST_TIMEOUT = 408
export const REQUEST_TIMEOUT: REQUEST_TIMEOUT = 408

/* The request could not be completed due to a conflict with the current state of the resource.
# This code is only allowed in situations where it is expected that the user might be able to
# resolve the conflict and resubmit the request. */
type CONFLICT = 409
export const CONFLICT: CONFLICT = 409

/* Indicates that the resource requested is no longer available and will not be available again.
  * This should be used when a resource has been intentionally removed and the resource should be
  * purged. Upon receiving a 410 status code the client should not request the resource again in
  * the future. Clients such as search engines should remove the resource from their indices. */
 type GONE = 410
export const GONE: GONE = 410

/* The precondition given in one or more of the request-header fields evaluated to false when it
  * was tested on the server. This response code allows the client to place preconditions on the
  * current resource meta-information (header field data) and thus prevent the requested method
  * from being applied to a resource other than the one intended. */
 type PRECONDITION_FAILED = 412
export const PRECONDITION_FAILED: PRECONDITION_FAILED = 412
/*
  * The server understands the content type of the request entity (hence a 415 Unsupported Media
  * Type status code is inappropriate) and the syntax of the request entity is correct (thus a
  * 400 Bad Request status code is inappropriate) but was unable to process the contained
  * instructions. */
type UNPROCESSABLE_ENTITY = 422
export const UNPROCESSABLE_ENTITY: UNPROCESSABLE_ENTITY = 422

/********************************
 * SERVER ERROR 5xx STATUS CODES
 ********************************/

/* The server encountered an unexpected condition which prevented it from fulfilling the request */
type INTERNAL_SERVER_ERROR = 500
export const INTERNAL_SERVER_ERROR: INTERNAL_SERVER_ERROR = 500
