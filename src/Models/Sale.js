import Pool from "./Pool";
import User from "./User";

export  default class Sale {

    constructor(pool = new Pool(), user = new User()) {
        this.pool = pool;
        this.users = [user];
    }


}