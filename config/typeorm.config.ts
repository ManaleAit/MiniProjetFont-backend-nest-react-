
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const config:TypeOrmModuleOptions =({
    type:"mysql",
    host:"localhost",
    port:3308,
    username:"root",
    password:"root",
    database:"testppp",
    entities:[__dirname+'/../**/*.entity.js'],
    synchronize:true
})