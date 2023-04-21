export default class Airport {
	constructor(name, code) {
	//objects
	this._code = code;
	this._name = name;
	}
	//method
	
	get [.symbol.toStringTag]() {
	return `${this._code}`;
	
	}

	set name(newname) {
	this._name = newName;
	}

	//getters
	get code() {
	return this._code;
	}
	
	get name() {
	return this._name;
	}
}

