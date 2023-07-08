import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, BeforeUpdate, ManyToOne } from "typeorm"
import { UnitType } from "./UnitType";
import { User } from "./User";

@Entity()
export class UnitStock extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: 0})
    stock: number

    @ManyToOne(() => User, (user) => user.unitStocks)
    user: User;

    @ManyToOne(() => UnitType, (unitType) => unitType.unitStocks, {
        eager: true,
      })
    type: UnitType;

}
