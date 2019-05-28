import Product from "./Product";

export default class Usuario {
    constructor(name=null,cellPhone=null, product = new Product()){
        this.name = name;
        this.cellPhone =cellPhone;
        this.products =  [product]
    }
}