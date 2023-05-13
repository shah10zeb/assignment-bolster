import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('charts')
export class Chart {
  @PrimaryColumn('varchar')
  chartId: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  dataType: string;

  @Column('varchar', { nullable: true })
  locals: object;

  @Column('jsonb')
  data: any[];
}
