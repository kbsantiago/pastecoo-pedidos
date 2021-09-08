import { v4 as uuidV4} from "uuid";

class Item {
    id: string;
    name: string; 
    price: number;
    created_by: string;
    created_at: Date;
    updated_by: string;
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
            this.created_by = "user";
            this.created_at = new Date();
        } else {
            this.updated_by = "user" 
            this.updated_at = new Date();
        }
    }

}

export { Item }