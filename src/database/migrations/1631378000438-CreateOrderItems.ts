import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateOrderItems1631378000438 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "OrderItems",
                columns: [
                    {
                        name: "orderId",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "productId",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "quantity",
                        type: "integer"
                    },
                    {
                        name: "price",
                        type: "decimal"
                    },
                ]
            })
        );

        queryRunner.clearSqlMemory();

        const foreignKeyOrder = new TableForeignKey({
            columnNames: ["orderId"],
            referencedColumnNames: ["id"],
            referencedTableName: "Orders",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("OrderItems", foreignKeyOrder);

        const foreignKeyProduct = new TableForeignKey({
            columnNames: ["productId"],
            referencedColumnNames: ["id"],
            referencedTableName: "Products",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("OrderItems", foreignKeyProduct);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("OrderItems");
    }

}
