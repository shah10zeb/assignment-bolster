import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn('varchar')
  email: string;

  @Column('varchar')
  displayname: string;

  @Column('varchar')
  firstname: string;

  @Column('varchar')
  lastname: string;

  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column('varchar')
  profile: string;

  @Column('varchar')
  organization: string;

  @Column('date')
  dob: string;

  @Column('varchar')
  password: string;

  @Column('jsonb')
  charts: string[];

  @Column('jsonb')
  productFeatures: string[];
}
