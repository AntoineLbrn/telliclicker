import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  BeforeUpdate,
} from "typeorm";
import { mairieMaxUnitsByLevel } from "../utils";
import { UnitStock } from "./UnitStock";
import { UserBulding } from "./UserBuilding";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // Level = Mairie
  @Column({ default: 0 })
  level: number;

  @Column({ default: 0 })
  units: number;

  @Column({ default: 0 })
  maxUnits: number;

  @Column("int",{ default: [], array: true })
  ennemiesBeaten: number[];

  @Column({ select: false })
  password: string;

  @OneToMany(() => UserBulding, (UserBulding) => UserBulding.user, {
    cascade: true,
  })
  buildings: UserBulding[];

  @OneToMany(() => UnitStock, (unitStock) => unitStock.user, { cascade: true })
  unitStocks: UnitStock[];

  @BeforeUpdate()
  updateUnits() {
    this.maxUnits = mairieMaxUnitsByLevel[this.level];
  }
}
