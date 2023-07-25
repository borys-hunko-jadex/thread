import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProfileStatus } from './types';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ nullable: false, length: 40 })
  name: string;
  @Column({ nullable: false, length: 40, unique: true })
  email: string;
  @Column({ nullable: false, length: 30, unique: true })
  login: string;
  @Column({ nullable: false, length: 60 })
  password: string;
  @Column({ length: 100 })
  description: string;
  @Column({
    enum: ProfileStatus,
    default: ProfileStatus.VALID,
    nullable: false,
  })
  status: ProfileStatus;
  @Column({ type: 'date', nullable: false, default: new Date() })
  createdDate: Date;
}
