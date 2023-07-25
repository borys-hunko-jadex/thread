import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProfile1690281664165 implements MigrationInterface {
  name = 'AddProfile1690281664165';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "profile" ("id" SERIAL NOT NULL, "name" character varying(40) NOT NULL, "email" character varying(40) NOT NULL, "login" character varying(30) NOT NULL, "password" character varying(60) NOT NULL, "description" character varying(100) NOT NULL, "status" character varying NOT NULL DEFAULT 'VALID', "createdDate" date NOT NULL DEFAULT '"2023-07-25T10:41:04.561Z"', CONSTRAINT "UQ_3825121222d5c17741373d8ad13" UNIQUE ("email"), CONSTRAINT "UQ_046f2b4c31fc341220622ee2f61" UNIQUE ("login"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "profile"`);
  }
}
