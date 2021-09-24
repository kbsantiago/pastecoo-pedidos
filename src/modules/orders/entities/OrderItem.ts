import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("OrderItems")
class OrderItem {
    @PrimaryColumn()
    orderId: string;
    @PrimaryColumn()
    productId: string;
    @Column()
    quantity: number;
    @Column()
    price: number;
}

export { OrderItem }