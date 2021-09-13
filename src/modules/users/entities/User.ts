import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { CreateOrderController } from "../../orders/useCases/createOrder/CreateOrderController";

@Entity("Users")
class User {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column() 
    username: string;
    @Column()
    roleId: string;
    @Column()
    password: string;
    @Column()
    created_by: string;
    @CreateDateColumn()
    created_at: Date;
    @Column()
    updated_by: string;
    @UpdateDateColumn()
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