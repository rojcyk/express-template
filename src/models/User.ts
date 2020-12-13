/********************************
 * Global imports
 ********************************/

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

/********************************
 * Interfaces
 ********************************/

interface UserJson {
  id: number,
  email: string,
  username?: string,
  isVerified: boolean,
  isSubscribed: boolean
}

/********************************
 * Model definition
 ********************************/

@Entity()
export class User {

  /** Primary key **/

  @PrimaryGeneratedColumn()
  id!: number

  /** Properties **/

  @Column('varchar', {
    length: 160,
    nullable: false,
    unique: true
  })
  email!: string

  @Column('varchar',{
    length: 160,
    nullable: true
  })
  username?: string

  @Column('varchar',{
    length: 160,
    nullable: false
  })
  password!: string

  @Column('bool', {
    default: false
  })
  isVerified!: boolean

  @Column('bool', {
    default: false
  })
  isSubscribed!: boolean


  /********************************
   * Custom getters and setters
   ********************************/

  // @BeforeInsert()
  // set password (newPassword: string) {
  //   this._password = await bcrypt.hash(this.password, 10)
  // }

  /********************************
   * Helpers
   ********************************/

  public get toJSON(): UserJson {
    return {
      id: this.id,
      email: this.email,
      username: this.username,
      isVerified: this.isVerified,
      isSubscribed: this.isSubscribed
    }
  }
}

export default User