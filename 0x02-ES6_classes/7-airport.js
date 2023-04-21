export default class Airport {
    constructor(name, code) {
      
      this._code = code;
      this._name = name;
    }
  
   get [Symbol.toStringTag]() {
      return `${this._code}`;
    }
  
    set code(newCode) { 
      this._code = newCode;
    }
  
    set name(newName) { 
      this._name = newName;
    }
  
    get code() { 
      return this._code;
    }
  
    get name() { 
      return this._name;
    }
  }
