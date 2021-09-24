import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnOrderNumber1632008382115 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Orders" ADD COLUMN "number" INTEGER NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
