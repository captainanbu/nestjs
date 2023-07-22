import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { firstservice } from "./todo.service";
import { firstcontroller } from "./todo.controller";
import { newservice } from "src/new/new.service";
import { New } from "src/new/new.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Todo,New])],
    providers:[firstservice],
    controllers:[firstcontroller],
})
export class TodoModule {
    
}