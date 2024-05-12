import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUniqueIndexToUserInstance1715509845414 implements MigrationInterface {
  name = 'AddUniqueIndexToUserInstance1715509845414';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const schema = `"${queryRunner.connection.driver.schema}"`;
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_ce6fef406b60137ee23334c557" ON ${schema}."edc_userinstance" ("user_id_from_emby_db", "serverinstanceId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const schema = `"${queryRunner.connection.driver.schema}"`;
    await queryRunner.query(`DROP INDEX ${schema}."IDX_ce6fef406b60137ee23334c557"`);
  }
}
