import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterProductsAddColumnsDescriptionAndImageUrl1632000582840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Products" ADD COLUMN "description" VARCHAR(255)`);
        await queryRunner.query(`ALTER TABLE "Products" ADD COLUMN "image_url" VARCHAR(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
