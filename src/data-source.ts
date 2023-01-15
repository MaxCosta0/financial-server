import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "123mudar",
    database: "admin",
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity.ts'],
    migrations: [],
    subscribers: [],
})
