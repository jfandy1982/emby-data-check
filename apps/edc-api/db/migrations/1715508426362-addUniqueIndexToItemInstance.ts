import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUniqueIndexToItemInstance1715508426362 implements MigrationInterface {
  name = 'AddUniqueIndexToItemInstance1715508426362';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const schema = `"${queryRunner.connection.driver.schema}"`;
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_a7be2bfffbe475aa112b8db6cd" ON ${schema}."edc_iteminstance" ("item_id_from_emby_db", "serverinstanceId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const schema = `"${queryRunner.connection.driver.schema}"`;
    await queryRunner.query(`DROP INDEX ${schema}."IDX_a7be2bfffbe475aa112b8db6cd"`);
  }
}
