import { IsDate, IsString, IsUUID } from 'class-validator';
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  @IsString({
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0001' },
  })
  @IsUUID('4', {
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0002' },
  })
  id: string;

  @CreateDateColumn()
  @IsDate({
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0003' },
  })
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate({
    context: { entity: 'abstract', className: 'AbstractEntity', errorCode: 'validation-0004' },
  })
  changedAt: Date;
}
