import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1683906757148 implements MigrationInterface {
    name = 'Migrations1683906757148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "charts" ("chartId" character varying NOT NULL, "title" character varying NOT NULL, "dataType" character varying NOT NULL, "locals" character varying, "data" jsonb NOT NULL, CONSTRAINT "PK_7cdfa803ee4a69cf2fada51bd8c" PRIMARY KEY ("chartId"))`);
        await queryRunner.query(`CREATE TABLE "products" ("productId" character varying NOT NULL, "productName" character varying NOT NULL, "features" jsonb NOT NULL, CONSTRAINT "PK_7b3b507508cd0f86a5b2e923459" PRIMARY KEY ("productId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("email" character varying NOT NULL, "displayname" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "username" character varying NOT NULL, "profile" character varying NOT NULL, "organization" character varying NOT NULL, "dob" date NOT NULL, "password" character varying NOT NULL, "charts" jsonb NOT NULL, "productFeatures" jsonb NOT NULL, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_97672ac88f789774dd47f7c8be3" PRIMARY KEY ("email"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "charts"`);
    }

}
