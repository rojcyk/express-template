import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1607865658153 implements MigrationInterface {
    name = 'CreateUser1607865658153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(160) NOT NULL, "username" character varying(160), "password" character varying(160) NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "isSubscribed" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
