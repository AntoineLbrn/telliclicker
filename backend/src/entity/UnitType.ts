import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { UnitStock } from "./UnitStock"

@Entity()
export class UnitType extends BaseEntity{

    @PrimaryColumn()
    id: number

    @Column()
    label: string

    @Column("int")
    boisCost: number

    @Column("int")
    pierreCost: number

    @Column("int")
    ferCost: number

    @Column("int")
    unitCost: number

    @Column('int')
    levelRequired: number

    @OneToMany(() => UnitStock, (unitStock) => unitStock.type)
    unitStocks: UnitStock[]
}
