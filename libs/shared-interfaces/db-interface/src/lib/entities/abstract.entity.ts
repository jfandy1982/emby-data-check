import { IsDate, IsString, IsUUID } from 'class-validator';
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'uuid', comment: 'Unique Identifier for the record' })
  @IsString({
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0001' },
  })
  @IsUUID('4', {
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0002' },
  })
  id: string;

  @CreateDateColumn({ name: 'created_at', comment: 'UTC timestamp, when record was created' })
  @IsDate({
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0003' },
  })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true, name: 'updated_at', comment: 'UTC timestamp, when record was updated' })
  @IsDate({
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0004' },
  })
  changedAt: Date;

  @DeleteDateColumn({ nullable: true, select: false, name: 'deleted_at', comment: 'UTC timestamp, when record was soft-deleted' })
  @IsDate({
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0005' },
  })
  deletedAt: Date;
}
