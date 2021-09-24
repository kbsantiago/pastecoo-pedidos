import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateOrderNumberSequence1632138583588 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE seq_order_number INCREMENT 1 START 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
