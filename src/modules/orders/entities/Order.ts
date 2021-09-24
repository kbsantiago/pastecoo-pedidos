import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("Orders")
class Order {
    @PrimaryColumn()
    id: string;
    @Column()
    number: number;
    @Column()
    customerName: string; 
    @Column()
    status: string;
    @Column()
    paymentType: string;
    @Column() 
    amount: number;
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
            this.created_by = "f524e7b0-22a7-43b8-85b2-063b0a57423a";            
            this.created_at = new Date();
        } else {
            this.updated_by = "f524e7b0-22a7-43b8-85b2-063b0a57423a" 
            this.updated_at = new Date();
        }
    }
}

export { Order }

