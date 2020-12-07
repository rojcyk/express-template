
import {Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id!: number

  @Column('varchar',{
    length: 160
  })
  email!: string

  @Column('varchar',{
    length: 160
  })
  name!: string

}

export default User