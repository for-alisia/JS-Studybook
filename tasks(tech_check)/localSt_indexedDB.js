//? Local storage
// - up to 5+ Mb (depends on browser)
// - Not sending to server, not expiring
// - sharing between tabs/windows for the same origin (domain/protocol/port)
// - only strings for keys and values - use JSON.parse/JSON.stringify
// - Not iterable - use for..in (with ownProperties) or Object.keys(localStorage);
// - Methods - setItem(key, value), getItem(key), removeItem(key), clear(), length, key(index) - returns a key with index
// - Different tabs/windows can exchange info through events (window.onstorage or window.addEventListener('storage'))
// - under storage event we can get: key, oldValue, newValue, url, storageArea

//? Session storage
// - exists only in current tab
// - shared between iframes for the same tab
// - API is the same as for localStotage

//? IndexedDB
// - supports almost any data types (not only strings)
// - supports transactions
// - bigger data volumes
// - supports query ranges, indexes
// - collections, tables
// - key types - number, date, string, binary, or array - should be unique

// Usually used for offline apps (combining with server workers)

// to start work
let openRequest = indexedDB.open(name, version);

// it returns an objest where we can listen for events - success, error, upgradeneeded

// upgradeneeded - if version is changed we use this event for updating or initial set up (if client has no version)
