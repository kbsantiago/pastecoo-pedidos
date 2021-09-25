import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertAdminUser1632602036056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into "Users" 
                                values ('146f86fb-a684-43ef-b6bd-013ef2ac950f', 
                                        'admin', 
                                        'admin', 
                                        'bb67ec62-1614-47a3-8390-27e58cc5f510',
                                        '$2a$08$eTj4ZGAehr0sm4pDo4/zHu0HMZ2g0ZkmRMq5qX5JACZm0eMqkhkLu',
                                        '146f86fb-a684-43ef-b6bd-013ef2ac950f',
                                        now(),
                                        '146f86fb-a684-43ef-b6bd-013ef2ac950f',
                                        now())`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
