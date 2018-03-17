'use strict';


class Registry {

    constructor() {

        if (!Registry.registry) {
            this._changed = false;
            this._keycnt = 0;
            this._refcnt = 0;
            this._root = {};
            Registry.registry = this;
        }

        return Registry.registry;
    }
    // add am item
    add(key, item) {
        if (this._root[key]) {
            throw new Error('Mabey you wanted to update ' + key);
        } else {
            this._root[key] = item;
            this._keycnt++;
        }
    }
    // get an item
    get(key) {
        if (this._root[key]) {
            return this._root[key];
        } else {
            throw new Error('Key does not exist ' + key);
        }
    }
    //update an item
    update(key, item) {
        if (this._root[key]) {
            this._root[key] = item;
        }

    }
    //remove an item
    remove(key) {
        if (this._root[key]) {
            delete this._root[key];
            this._keycnt--;
        }
    }

    keyExists(key) {
        return Boolean(this._root[key]);
    }
    // This should be a lookup and compare of two items
    // to see if they are the same as in obj === obj1
    isUnique(item) {
        var cnt = 0
        for (var key in this._root) {
            if (item === this._root[key]) {
                cnt++;
            }
        }
        if(cnt == 1){
            return true;
        }
        return false;
    }

}

module.exports = Registry;