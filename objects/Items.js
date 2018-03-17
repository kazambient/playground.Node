/*  Item is a base Class that holds all data and functions related to
    Physical items in this app

*/

class Item {

    constructor(id){
        this.id = id; // unique id of this item
        this.desc = 'none'; // decripton 
        this.dim = {'width':0,'height':0,'length':0};
        this.pkgdim = {'width':0,'height':0,'length':0};
        this.make = '';
        this.model = '';
        this.price = 0.00;
        this.discount = 0;
        this.category = '';
                

    }
    // Get the properties of this object
    get props(){
        return Object.getOwnPropertyNames(this);
    }
    // this will likely have to be upgraded
    get json(){
        return JSON.stringify(this);
    } 

    
}

class Computer extends Item{
    
    constructor(id){
        super(id);
        this.os = '';
        this.hd = null;
        this.ram = 0;
        this.proc = {'name':'','model':'','cores':''};
        


    }

    
        
    
}
module.exports = {Item,Computer};