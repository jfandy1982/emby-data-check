import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1699101720558 implements MigrationInterface {
  name = 'Initial1699101720558';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const schema = `"${queryRunner.connection.driver.schema}"`;
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_tag" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "tag" character varying(50) NOT NULL, CONSTRAINT "UQ_27e2a12900bcaf4b9362b981158" UNIQUE ("tag"), CONSTRAINT "PK_90892ef47c224cd3c7f219148f2" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_tag"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_tag"."tag" IS 'Display value of a tag'`,
    );
    await queryRunner.query(
      `CREATE TYPE ${schema}."edc_item_item_type_enum" AS ENUM('Episode', 'Movie', 'MusicVideo', 'Season', 'Series', 'Video')`,
    );
    await queryRunner.query(`CREATE TYPE ${schema}."edc_item_provider_type_enum" AS ENUM('Imdb', 'Tmdb', 'Tvdb', 'Unknown')`);
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_item" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "item_type" ${schema}."edc_item_item_type_enum" NOT NULL DEFAULT 'Video', "provider_type" ${schema}."edc_item_provider_type_enum" NOT NULL DEFAULT 'Unknown', "provider_id" character varying(20) NOT NULL, "display_name" character varying(100), "item_slug" character varying(100), "path" character varying(2048) NOT NULL, CONSTRAINT "UQ_2e7a6464161a4abd05a87bff6a9" UNIQUE ("item_slug"), CONSTRAINT "PK_e9abcf8a340f4739a54f968715c" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_item"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_item"."created_at" IS 'UTC timestamp, when record was created'; COMMENT ON COLUMN ${schema}."edc_item"."updated_at" IS 'UTC timestamp, when record was updated'; COMMENT ON COLUMN ${schema}."edc_item"."deleted_at" IS 'UTC timestamp, when record was soft-deleted'; COMMENT ON COLUMN ${schema}."edc_item"."item_type" IS 'Type Identifier for the Item'; COMMENT ON COLUMN ${schema}."edc_item"."provider_type" IS 'Provider Type Identifier, where the item information is taken from'; COMMENT ON COLUMN ${schema}."edc_item"."provider_id" IS 'Value points to a record from the Provider Type, where the item information is taken from'; COMMENT ON COLUMN ${schema}."edc_item"."display_name" IS 'Display value of the Item (e.g. a film title)'; COMMENT ON COLUMN ${schema}."edc_item"."item_slug" IS 'Slugified display name and/or file path information'; COMMENT ON COLUMN ${schema}."edc_item"."path" IS 'File path, where the item is stored'`,
    );
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_server" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying(50) NOT NULL, "description" character varying(100), "main_server" boolean NOT NULL DEFAULT false, "api_key" character varying(32), "ip" inet, "port" smallint, CONSTRAINT "UQ_99961dcf6df0783200db5ad6155" UNIQUE ("name"), CONSTRAINT "PK_4e394a58e80b5b568db154e86e8" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_server"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_server"."created_at" IS 'UTC timestamp, when record was created'; COMMENT ON COLUMN ${schema}."edc_server"."updated_at" IS 'UTC timestamp, when record was updated'; COMMENT ON COLUMN ${schema}."edc_server"."deleted_at" IS 'UTC timestamp, when record was soft-deleted'; COMMENT ON COLUMN ${schema}."edc_server"."name" IS 'Unique server name'; COMMENT ON COLUMN ${schema}."edc_server"."description" IS 'Description or remarks for the server'; COMMENT ON COLUMN ${schema}."edc_server"."main_server" IS 'This server is the one with the truth'; COMMENT ON COLUMN ${schema}."edc_server"."api_key" IS 'API Key of the Emby server required for REST API access'; COMMENT ON COLUMN ${schema}."edc_server"."ip" IS 'IP Address of the server - used for REST API access'; COMMENT ON COLUMN ${schema}."edc_server"."port" IS 'Port number of the server - used for REST API access'`,
    );
    await queryRunner.query(`CREATE TYPE ${schema}."edc_user_user_role_enum" AS ENUM('admin', 'user')`);
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_user" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "user_id" character varying(50) NOT NULL, "user_name" character varying(100), "password" character varying(32) NOT NULL, "user_role" ${schema}."edc_user_user_role_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_a255611bfd1bff8c08e0a6e7ba5" UNIQUE ("user_id"), CONSTRAINT "PK_726e311ebc5a1a7307b4475969e" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_user"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_user"."created_at" IS 'UTC timestamp, when record was created'; COMMENT ON COLUMN ${schema}."edc_user"."updated_at" IS 'UTC timestamp, when record was updated'; COMMENT ON COLUMN ${schema}."edc_user"."deleted_at" IS 'UTC timestamp, when record was soft-deleted'; COMMENT ON COLUMN ${schema}."edc_user"."user_id" IS 'Unique user name'; COMMENT ON COLUMN ${schema}."edc_user"."user_name" IS 'Display Name of a user'; COMMENT ON COLUMN ${schema}."edc_user"."password" IS 'encrypted password of a user'; COMMENT ON COLUMN ${schema}."edc_user"."user_role" IS 'User Role Identifier'`,
    );
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_watchedinstance" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "watched" boolean NOT NULL DEFAULT false, "last_watched_at" TIMESTAMP, "userinstanceId" uuid, "iteminstanceId" uuid, CONSTRAINT "PK_6ce5457c1504c91cd7a4ccef6c7" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_watchedinstance"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_watchedinstance"."created_at" IS 'UTC timestamp, when record was created'; COMMENT ON COLUMN ${schema}."edc_watchedinstance"."updated_at" IS 'UTC timestamp, when record was updated'; COMMENT ON COLUMN ${schema}."edc_watchedinstance"."deleted_at" IS 'UTC timestamp, when record was soft-deleted'; COMMENT ON COLUMN ${schema}."edc_watchedinstance"."watched" IS 'The item has been watched by the user on the referenced server instance'; COMMENT ON COLUMN ${schema}."edc_watchedinstance"."last_watched_at" IS 'UTC timestamp, when the user watched the item the last time'; COMMENT ON COLUMN ${schema}."edc_watchedinstance"."userinstanceId" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_watchedinstance"."iteminstanceId" IS 'Unique Identifier for the record'`,
    );
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_userinstance" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "user_id_from_emby_db" character varying(32) NOT NULL, "active" boolean NOT NULL DEFAULT false, "userId" uuid, "serverinstanceId" uuid, CONSTRAINT "UQ_7262def6dc76881792871795e2c" UNIQUE ("user_id_from_emby_db"), CONSTRAINT "PK_3f5e478a495138982568e69a3ee" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_userinstance"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_userinstance"."created_at" IS 'UTC timestamp, when record was created'; COMMENT ON COLUMN ${schema}."edc_userinstance"."updated_at" IS 'UTC timestamp, when record was updated'; COMMENT ON COLUMN ${schema}."edc_userinstance"."deleted_at" IS 'UTC timestamp, when record was soft-deleted'; COMMENT ON COLUMN ${schema}."edc_userinstance"."user_id_from_emby_db" IS 'Identifier as stored in the Emby DB assigned to the Server'; COMMENT ON COLUMN ${schema}."edc_userinstance"."active" IS 'This user is still relevant and managed'; COMMENT ON COLUMN ${schema}."edc_userinstance"."userId" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_userinstance"."serverinstanceId" IS 'Unique Identifier for the record'`,
    );
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_serverinstance" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "server_id_from_emby_db" character varying(32) NOT NULL, "active" boolean NOT NULL DEFAULT false, "serverId" uuid, CONSTRAINT "UQ_6a61206427b9fc8d01bb362de81" UNIQUE ("server_id_from_emby_db"), CONSTRAINT "PK_2e9648a33e0fae6019a05b8fcc1" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_serverinstance"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_serverinstance"."created_at" IS 'UTC timestamp, when record was created'; COMMENT ON COLUMN ${schema}."edc_serverinstance"."updated_at" IS 'UTC timestamp, when record was updated'; COMMENT ON COLUMN ${schema}."edc_serverinstance"."deleted_at" IS 'UTC timestamp, when record was soft-deleted'; COMMENT ON COLUMN ${schema}."edc_serverinstance"."server_id_from_emby_db" IS 'Identifier of the Emby Server taken from the concrete installation'; COMMENT ON COLUMN ${schema}."edc_serverinstance"."active" IS 'This server is still relevant and managed'; COMMENT ON COLUMN ${schema}."edc_serverinstance"."serverId" IS 'Unique Identifier for the record'`,
    );
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_iteminstance" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "item_id_from_emby_db" character varying(32) NOT NULL, "itemId" uuid, "serverinstanceId" uuid, CONSTRAINT "UQ_071ce0224187cf11806c1866163" UNIQUE ("item_id_from_emby_db"), CONSTRAINT "PK_1fce910d4020d8125c8a6aa6159" PRIMARY KEY ("uuid")); COMMENT ON COLUMN ${schema}."edc_iteminstance"."uuid" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_iteminstance"."created_at" IS 'UTC timestamp, when record was created'; COMMENT ON COLUMN ${schema}."edc_iteminstance"."updated_at" IS 'UTC timestamp, when record was updated'; COMMENT ON COLUMN ${schema}."edc_iteminstance"."deleted_at" IS 'UTC timestamp, when record was soft-deleted'; COMMENT ON COLUMN ${schema}."edc_iteminstance"."item_id_from_emby_db" IS 'Identifier as stored in the Emby DB assigned to the Server'; COMMENT ON COLUMN ${schema}."edc_iteminstance"."itemId" IS 'Unique Identifier for the record'; COMMENT ON COLUMN ${schema}."edc_iteminstance"."serverinstanceId" IS 'Unique Identifier for the record'`,
    );
    await queryRunner.query(
      `CREATE TABLE ${schema}."edc_item_tag" ("uuid_tag" uuid NOT NULL, "uuid_item" uuid NOT NULL, CONSTRAINT "PK_8d1ac480cb326755cf74500d617" PRIMARY KEY ("uuid_tag", "uuid_item"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_e02d8e91b9e0e3b39d76d6ffd6" ON ${schema}."edc_item_tag" ("uuid_tag") `);
    await queryRunner.query(`CREATE INDEX "IDX_4a4f1d7e7cc5b08c21a1891445" ON ${schema}."edc_item_tag" ("uuid_item") `);
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_watchedinstance" ADD CONSTRAINT "FK_2f248d0be5ee421941252ce8556" FOREIGN KEY ("userinstanceId") REFERENCES ${schema}."edc_userinstance"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_watchedinstance" ADD CONSTRAINT "FK_f4a72006460be84f11d8708c0de" FOREIGN KEY ("iteminstanceId") REFERENCES ${schema}."edc_iteminstance"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_userinstance" ADD CONSTRAINT "FK_06ab412fa226e171bf23050f3f3" FOREIGN KEY ("userId") REFERENCES ${schema}."edc_user"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_userinstance" ADD CONSTRAINT "FK_50d599b1e5a336678167f7f4449" FOREIGN KEY ("serverinstanceId") REFERENCES ${schema}."edc_serverinstance"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_serverinstance" ADD CONSTRAINT "FK_3aa60db02e0daf2b4e546c7ca3a" FOREIGN KEY ("serverId") REFERENCES ${schema}."edc_server"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_iteminstance" ADD CONSTRAINT "FK_04b4023fa2c8cc82d30c3c2cc43" FOREIGN KEY ("itemId") REFERENCES ${schema}."edc_item"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_iteminstance" ADD CONSTRAINT "FK_9d7842a3713420a7796e58f2a8b" FOREIGN KEY ("serverinstanceId") REFERENCES ${schema}."edc_serverinstance"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_item_tag" ADD CONSTRAINT "FK_e02d8e91b9e0e3b39d76d6ffd60" FOREIGN KEY ("uuid_tag") REFERENCES ${schema}."edc_item"("uuid") ON DELETE NO ACTION ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE ${schema}."edc_item_tag" ADD CONSTRAINT "FK_4a4f1d7e7cc5b08c21a18914456" FOREIGN KEY ("uuid_item") REFERENCES ${schema}."edc_tag"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const schema = `"${queryRunner.connection.driver.schema}"`;
    await queryRunner.query(`ALTER TABLE ${schema}."edc_item_tag" DROP CONSTRAINT "FK_4a4f1d7e7cc5b08c21a18914456"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_item_tag" DROP CONSTRAINT "FK_e02d8e91b9e0e3b39d76d6ffd60"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_iteminstance" DROP CONSTRAINT "FK_9d7842a3713420a7796e58f2a8b"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_iteminstance" DROP CONSTRAINT "FK_04b4023fa2c8cc82d30c3c2cc43"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_serverinstance" DROP CONSTRAINT "FK_3aa60db02e0daf2b4e546c7ca3a"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_userinstance" DROP CONSTRAINT "FK_50d599b1e5a336678167f7f4449"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_userinstance" DROP CONSTRAINT "FK_06ab412fa226e171bf23050f3f3"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_watchedinstance" DROP CONSTRAINT "FK_f4a72006460be84f11d8708c0de"`);
    await queryRunner.query(`ALTER TABLE ${schema}."edc_watchedinstance" DROP CONSTRAINT "FK_2f248d0be5ee421941252ce8556"`);
    await queryRunner.query(`DROP INDEX ${schema}."IDX_4a4f1d7e7cc5b08c21a1891445"`);
    await queryRunner.query(`DROP INDEX ${schema}."IDX_e02d8e91b9e0e3b39d76d6ffd6"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_item_tag"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_iteminstance"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_serverinstance"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_userinstance"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_watchedinstance"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_user"`);
    await queryRunner.query(`DROP TYPE ${schema}."edc_user_user_role_enum"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_server"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_item"`);
    await queryRunner.query(`DROP TYPE ${schema}."edc_item_provider_type_enum"`);
    await queryRunner.query(`DROP TYPE ${schema}."edc_item_item_type_enum"`);
    await queryRunner.query(`DROP TABLE ${schema}."edc_tag"`);
  }
}
