import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { shortservice } from "./short.service";
import { short } from "./short.entity";
import { New } from "src/new/new.entity";
import { newservice } from "src/new/new.service";






@Controller('short')
export class shortcontroller{
    constructor(private shortservice: shortservice,private newServ:newservice) {}
    // @Get()
    // findAll(){
    //     return this.shortservice.get();
    // }

    

    @Get()
    newGet(){
        return this.newServ.get();
    }



    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.shortservice.getone(id);
    }

    @Post()
    create(@Body() short: short) {
        return this.shortservice.create(short);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id){
        return this.shortservice.remove(id)
    }

    @Put(':id')
    async updaterow(@Body() entity:short ,@Param('id',ParseIntPipe)id){
        return this.shortservice.update(id,entity)
    }

    @Put('/cross/:id')
    async updatetoNew(@Body() newentity:New,@Param('id',ParseIntPipe)id){

        return this.shortservice.updatetonew(id,newentity)
    }
   

}