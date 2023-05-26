import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  AfterUpdate,
} from "typeorm";
import { maxCount, productions } from "../utils";
import { Building } from "./Building";
import { User } from "./User";

@Entity()
export class UserBulding extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  level: number;

  @Column()
  count: number;

  @Column()
  maxResourceLevel: number

  @Column({ default: 0 })
  generation: number;

  @Column({ default: 0 })
  capacity: number;

  @ManyToOne(() => Building, (building) => building.userBuildings, {
    eager: true,
  })
  building: Building;

  @ManyToOne(() => User, (user) => user.buildings)
  user: User;

  @AfterUpdate()
  updateCounters() {
    this.generation = productions[this.building.id][this.level];
    this.capacity = maxCount[this.building.id][this.maxResourceLevel];
  }
}
