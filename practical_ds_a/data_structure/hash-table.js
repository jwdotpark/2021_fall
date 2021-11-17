class HashTable {
  // size of hash table
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    // if empty, set new array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // or set nested key value pair
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      // look for the index in array
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // look for exact match in sub array
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // filter duplicate keys
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            // push each first item(key) in array into values arr
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // filter duplicate values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            // push each second item(value) in array into values arr
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
      return valuesArr;
    }
  }
}

let ht = new HashTable(17);
ht.set("Hello World", "Good bye!");
ht.set("cute dog", "okja!");
ht.set("jongwoo", "park");
ht.set("okgu", "small dog");
ht.keys();
ht.values();