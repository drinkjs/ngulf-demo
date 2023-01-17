import { Injectable, OrmModel, OrmModelType } from "ngulf";
import UserEntity from "../entity/UserEntity";

@Injectable()
export default class UserService {
  @OrmModel(UserEntity)
  private model!: OrmModelType<UserEntity>;

  async login(name: string, password:string) {
    return await this.model.findOneBy({ name, password });
  }

  async add(name: string, password?:string) {
    const data = this.model.create();
    data.name = name;
    data.password = password || "123456";
    return await this.model.save(data);
  }
}
