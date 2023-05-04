import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { ResourceType } from "./ResourceType"
import { User } from "./User"
import { UserBulding } from "./UserBuilding"

@Entity()
export class Building extends BaseEntity{

    @PrimaryColumn()
    id: number

    @Column()
    label: string

    @Column("int", { array: true })
    productionByLevel: number[]

    @OneToMany(() => UserBulding, (userBuilding) => userBuilding.building)
    userBuildings: UserBulding[] 

    @ManyToOne(() => ResourceType, (resourceType) => resourceType.building)
    resourceType: ResourceType
}
