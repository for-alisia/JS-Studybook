// 

/**
 * 1. Broken access control - access to resources without correct permissions 
 *   example - manually update url for other user id and get data back, fake cookie or token
 * 2. Cryptographic Failures - access to sensitive data (hashes, encrypting, modern algorithms)
 *    As a main rule - do not store what you really do not not need about your users
 * 3. Injections - 
 *    a) SQL, LDAP, XPATH injections
 *    b) XML
 *    c) SMTP headers
 * 4. Insecure design - gaps in software design that can open possibility for all other threats
 * 5. Security Misconfiguration - incorrect logging, cloud configs, outdated and unsecure packages, cookie: http-only
 * 6. Vulnerable and outdated components
 * 7. Authentification and Identification failures - could get access to names and passwords, guessing passwords, 
 *    insecure resetting password mechanisms (question-answer), too simple passwords (admin), 
 *    insecure or weak hashed passwords stores, auth session token in url, not cleaned up tokens
 * 8. Software and Data Integrity Failures - libraries, plugins from not trusted sources
 * 9. Security Logging and Monitoring Failures - not detected attacks (including penetration tests), not specified rules to escalate
 * 10. Server-Side Request Forgery (SSRF) - access to server from not supposed to be used urls (for example fake host header) 
 */