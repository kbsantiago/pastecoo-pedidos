import { Column, CreateDateColumn, Entity, Generated, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { OrderItem } from "./OrderItem";

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
    @OneToMany(() => OrderItem, item => item.order)
    @JoinColumn({ name: 'orderId' })
    items: OrderItem[];
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
            this.created_at = new Date();
        } else {            
            this.updated_at = new Date();
        }
    }
}

export { Order }

