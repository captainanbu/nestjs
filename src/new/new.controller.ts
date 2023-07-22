import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { newservice } from "./new.service";
import { New } from "./new.entity";
import { shortservice } from "src/short/short.service";



@Controller('new')
export class newcontroller{
    constructor(private newservice: newservice,private shortserv:shortservice) {}
    // @Get()
    // findAll() {
    //     return this.newservice.getnew();
    // }

    @Get()
    shortGet(){
        return this.shortserv.get();
    }
    
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.newservice.getone(id)
    }

    @Post()
    create(@Body() body: New) {
        return this.newservice.createnew(body);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id){
        return this.newservice.removenew(id)
    }

    @Put(':id')
    async updaterow(@Body() entity:New ,@Param('id',ParseIntPipe)id){
        return this.newservice.updatenew(id,entity)
    }


}