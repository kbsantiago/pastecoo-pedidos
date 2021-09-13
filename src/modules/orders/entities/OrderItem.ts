import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("OrderItems")
class Item {
    @PrimaryColumn()
    orderId: number;
    @PrimaryColumn()
    productId: number;
    @Column()
    quantity: number;
    @Column()
    price: number;
}

export { Item }