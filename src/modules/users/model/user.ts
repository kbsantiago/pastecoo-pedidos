import { v4 as uuidV4 } from "uuid";

class User {
    id: string;
    name: string; 
    username: string;
    roleId: string; 
    password: string;
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

export { User }