import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddFKUserToOrdersCreatedBy1632007870469 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const foreignKeyProduct = new TableForeignKey({
            columnNames: ["created_by"],
            referencedColumnNames: ["id"],
            referencedTableName: "Users",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("Orders", foreignKeyProduct);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
