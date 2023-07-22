import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { New } from "./new.entity";
import { newservice } from "./new.service";
import { newcontroller } from "./new.controller";
import { shortModule } from "src/short/short.module";
import { shortservice } from "src/short/short.service";
import { short } from "src/short/short.entity";


@Module({
    imports: [TypeOrmModule.forFeature([New,short]),forwardRef(() => shortModule)],
    providers:[newservice,shortservice],
    controllers:[newcontroller],
})




// @Module({
//     imports: [forwardRef(() => shortModule)],
// })



export class NewModule {
    
}