import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertAdminRole1632602022940 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT  INTO "Roles" 
                                 VALUES ('bb67ec62-1614-47a3-8390-27e58cc5f510', 
                                         'admin', 
                                         '146f86fb-a684-43ef-b6bd-013ef2ac950f',
                                         now(),
                                         '146f86fb-a684-43ef-b6bd-013ef2ac950f',
                                         now())`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
