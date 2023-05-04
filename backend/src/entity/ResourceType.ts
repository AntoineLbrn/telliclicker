import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm"
import { Building } from "./Building"

@Entity()
export class ResourceType extends BaseEntity{

    @PrimaryColumn()
    id: number

    @Column()
    label: string

    @OneToOne(() => Building, (building) => building.resourceType)
    building: Building[] 
}
