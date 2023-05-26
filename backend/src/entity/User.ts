import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { UserBulding } from "./UserBuilding"

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    // Level = Mairie
    @Column({default: 0})
    level: number

    @Column()
    password: string

    @OneToMany(() => UserBulding, (UserBulding => UserBulding.user), {cascade: true})
    buildings: UserBulding[]     
}
