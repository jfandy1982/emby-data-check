import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1698354952907 implements MigrationInterface {
    name = 'Initial1698354952907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "server" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "changedAt" TIMESTAMP NOT NULL DEFAULT now(), "servername" character varying(50) NOT NULL, "description" character varying(100), "apiKey" character varying(32), "ipAddress" inet, "port" smallint, CONSTRAINT "UQ_dd26d21676246873a3c9cd1b304" UNIQUE ("servername"), CONSTRAINT "PK_f8b8af38bdc23b447c0a57c7937" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "installation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "changedAt" TIMESTAMP NOT NULL DEFAULT now(), "serverIdFromEmbyDb" character varying(32) NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "serverId" uuid, CONSTRAINT "UQ_4c651ecf664bfedb42a526909aa" UNIQUE ("serverIdFromEmbyDb"), CONSTRAINT "PK_f0cd0b17a45357b5e1da1da1680" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "changedAt" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying(50) NOT NULL, "name" character varying(100), "password" character varying(32) NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "media-item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "changedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, "providerType" character varying NOT NULL, "providerId" character varying NOT NULL, "displayName" character varying NOT NULL, "itemNameSlug" character varying, "path" character varying NOT NULL, "customTags" character varying, CONSTRAINT "PK_be1292a50e5d5bfd3d5de62538d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "watch-state" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "changedAt" TIMESTAMP NOT NULL DEFAULT now(), "isWatched" boolean NOT NULL DEFAULT false, "lastWatchedAt" TIMESTAMP, "embyUserId" uuid, "mediaItemId" uuid, CONSTRAINT "PK_b1bca548e485a716263bb13c05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emby-user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "test" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "changedAt" TIMESTAMP NOT NULL DEFAULT now(), "userIdFromEmbyDb" character varying(32) NOT NULL, "isActive" boolean NOT NULL DEFAULT false, "userId" uuid, "installationId" uuid, CONSTRAINT "UQ_420e11321a08484ef1c2eafa3c0" UNIQUE ("userIdFromEmbyDb"), CONSTRAINT "PK_883f64452ecbfbc6ccd9ecbe351" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "installation" ADD CONSTRAINT "FK_4746dd3b34e9d02166567418edc" FOREIGN KEY ("serverId") REFERENCES "server"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "watch-state" ADD CONSTRAINT "FK_3fd4856e45ed2822ac4eeb3d710" FOREIGN KEY ("embyUserId") REFERENCES "emby-user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "watch-state" ADD CONSTRAINT "FK_52672d63b6c439e41f2b351f191" FOREIGN KEY ("mediaItemId") REFERENCES "media-item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emby-user" ADD CONSTRAINT "FK_65ecc69b6c5ade76bede06574ae" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emby-user" ADD CONSTRAINT "FK_2ba848031e17afca7c7064d72c9" FOREIGN KEY ("installationId") REFERENCES "installation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "emby-user" DROP CONSTRAINT "FK_2ba848031e17afca7c7064d72c9"`);
        await queryRunner.query(`ALTER TABLE "emby-user" DROP CONSTRAINT "FK_65ecc69b6c5ade76bede06574ae"`);
        await queryRunner.query(`ALTER TABLE "watch-state" DROP CONSTRAINT "FK_52672d63b6c439e41f2b351f191"`);
        await queryRunner.query(`ALTER TABLE "watch-state" DROP CONSTRAINT "FK_3fd4856e45ed2822ac4eeb3d710"`);
        await queryRunner.query(`ALTER TABLE "installation" DROP CONSTRAINT "FK_4746dd3b34e9d02166567418edc"`);
        await queryRunner.query(`DROP TABLE "emby-user"`);
        await queryRunner.query(`DROP TABLE "watch-state"`);
        await queryRunner.query(`DROP TABLE "media-item"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "installation"`);
        await queryRunner.query(`DROP TABLE "server"`);
    }

}
