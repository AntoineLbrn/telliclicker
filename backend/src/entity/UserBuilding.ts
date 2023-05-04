import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  AfterUpdate,
  AfterInsert,
} from "typeorm";
import { productions } from "../utils";
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

  @Column({ default: 0 })
  generation: number;

  @ManyToOne(() => Building, (building) => building.userBuildings, {
    eager: true,
  })
  building: Building;

  @ManyToOne(() => User, (user) => user.buildings)
  user: User;

  @AfterUpdate()
  updateCounters() {
    this.generation = productions[this.building.id][this.level];
  }
}
