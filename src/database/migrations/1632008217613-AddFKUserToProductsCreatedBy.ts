import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddFKUserToProductsCreatedBy1632008217613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const foreignKeyProduct = new TableForeignKey({
            columnNames: ["created_by"],
            referencedColumnNames: ["id"],
            referencedTableName: "Users",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("Products", foreignKeyProduct);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
