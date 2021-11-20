import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Order } from "./Order";

@Entity("OrderItems")
class OrderItem {
    @PrimaryColumn()
    orderId: string;
    @ManyToOne(() => Order, order => order.items)
    order: Order;
    @PrimaryColumn()
    productId: string;
    @Column()
    quantity: number;
    @Column()
    price: number;
}

export { OrderItem }