import { v4 as uuidV4 } from 'uuid';

class Order {
    id: string;
    customerName: string; 
    orderStatus: string;
    paymentType: string; 
    amount: number;
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

export { Order }