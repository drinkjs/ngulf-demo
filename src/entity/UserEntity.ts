// More https://github.com/typeorm/typeorm
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "ngulf/typeorm";

@Entity({ name: "user" })
export default class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  password!: string;
}
