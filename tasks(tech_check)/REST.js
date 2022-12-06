//? REST
// Representational State Transfer - architectural style from 2000
/**
 * REST is designed about resources (any kind of object - data, document, service), that can be accessed by a client
 * A resource should have an identifier (https://adventure-works.com/orders/1)
 * REST uses uniform interface built on the top of HTTP (GET, POST, DELETE and so on)
 * REST APIs are stateless - requests are independant and may occur in any order. All information is stored
 * under resources themselves
 */

// * Best Practices

/**
 * 1. Use JSON as a format of data and do not forget to set correct header - 'Content-Type': 'application/json'
 * 2. Use nouns instead od verbs in Endpoints - https://mysite.com/createPost -> https://mysite.com/post
 * 3. Name collections with plural names
 * 4. Use status codes in Error handling: 3xx - redirection, 4xx - client side errors, 5xx - server side errors,
 * 1xx - informational responses
 * 5. Use nesting in Endpoints to show relationships (but it's better not to nest too deep - more then 3 levels)
 * 6. Use filtering, sorting and pagination to retrieve data
 * 7. Use SSL for security
 * 8. Be clear with versioning (https://mysite.com/v1/)
 * 9. Provide accurate API documentation
 */
