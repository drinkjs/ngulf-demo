import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Headers,
  RouterContext,
  Validation,
} from "ngulf";
import UserDto from "../dto/UserDto";
import UserService from "../service/UserService";

@Controller("/demo")
export default class DemoController {

  constructor(private readonly service: UserService){}

  @Get("/hello")
  async hello() {
    return "hello ngulf";
  }

  @Get("/query")
  async query(@Query("name") name: string) {
    return `hello ${name}`;
  }

  @Post("/body")
  async body(@Body() data:any) {
    console.log(data)
    return data
  }

  @Post("/header")
  async header(@Headers("user-agent") userAgent?:string) {
    return userAgent
  }

  @Post("/login")
  async login(@Body(new Validation({ groups: ["login"] })) dto: UserDto){
    const rel = await this.service.login(dto.name, dto.password!)
    return rel ? "Login success" : "Login fail"
  }

  @Post("/add")
  async add(@Body(new Validation({ groups: ["add"] })) dto: UserDto){
    return this.service.add(dto.name, dto.password)
  }
}
