import Ngulf from "ngulf";
import * as path from "path"

const app = Ngulf.create({
  routePrefix: "/api",
  controllers: path.join(__dirname, "controller"),
  orm: {
    type: "mysql",
    port: 3306,
    host: "localhost",
    username: "root",
    password: "",
    database: "test",
    entityPrefix: "ng_",
    entities: [path.join(__dirname, "entity/*{.ts,.js}")],
    bigNumberStrings: false,
    synchronize: true, // 生产环境必需为false，否则可能会丢失数据
  },
});
app.listen({ port: 3737 }).then(() => {
  console.log("Ngulf listen on 3737");
});