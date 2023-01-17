// More https://github.com/typestack/class-validator
import { IsNotEmpty } from "ngulf/class-validator";

export default class UserDto {
  id?:string

  @IsNotEmpty({ groups: ["login", "add"] })
  name!: string;

  @IsNotEmpty({ groups: ["login"] })
  password?: string;
}
