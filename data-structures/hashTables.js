// In JS Hash Tables - it's an objects
// To keep { apple: 2 } object in memory JS uses hash functions (for prop name)
// Big O notation for hash tables
// insert - O(1)
// lookup - O(1)
// delete - O(1)
// serach - O(1)

// But we can have a collision
// When 1 shelf is using for multiple values
// (as linked list (separate chaining), but there are many others - Collision resolution)
// An with this scenario access will be O(n)

// Check this alg here https://visualgo.net/en

// In JS hash tables are Objects, Maps, WeakMaps, Set
// Objects let only strings to be a key
// Maps (WeakMaps) - keys can be Objects (functions, arrays, etc)
// WeakMaps do not keep oblect keys in memory if there is no link besides the map itself

// Objects do not keep order, but Maps keep the order - important on looping

// Set keeps only keys

// Example of implementation of Hash Table
// Each bucket - [[key1, value1]], doe to collision: [[key1, value1], [key2, value2], ...]
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const idx = this._hash(key);
    if (!this.data[idx]) {
      this.data[idx] = [];
    }

    this.data[idx].push([key, value]);
  }

  get(key) {
    const idx = this._hash(key);
    const bucket = this.data[idx];
    if (!bucket) return undefined;
    if (bucket.length === 1) {
      return bucket[0][1];
    }

    return this.data[this._hash(key)].find((el) => el[0] === key);
  }

  keys() {
    const keys = [];
    this.data.forEach((bucket) => {
      if (!bucket) return;
      if (bucket.length === 1) {
        keys.push(bucket[0][0]);
        return;
      }

      bucket.forEach((el) => keys.push(el[0]));
    });

    return keys;
  }
}

const myHash = new HashTable(10);
myHash.set('grapes', 100);
myHash.set('orang', 12);
myHash.set('milky', 11);
myHash.set('choko', 5);
console.log(myHash.get('grapes'));
console.log(myHash.get('some'));
console.log(myHash.keys());

// If you use for in or keys too often - hash tables are slow with this
