import { TypeOrmModule } from "@nestjs/typeorm";
import { short } from "./short.entity";
import { shortservice } from "./short.service";
import { Module, forwardRef } from "@nestjs/common";
import { shortcontroller } from "./short.controller";
import { New } from "src/new/new.entity";
import { NewModule } from "src/new/new.module";
import { newservice } from "src/new/new.service";


@Module({
    imports: [TypeOrmModule.forFeature([short,New]),forwardRef(() => NewModule)],
    providers:[shortservice,newservice],
    controllers:[shortcontroller],
})




// @Module({
//     imports: [forwardRef(() => NewModule)],
// })


export class shortModule {

}