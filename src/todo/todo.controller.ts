import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { firstservice } from "./todo.service";
import { Todo } from "./todo.entity";
import { Entity } from "typeorm";
import { New } from "src/new/new.entity";

@Controller('todo')
export class firstcontroller{
    constructor(private firstservice: firstservice) {}

    // @Get()
    // async findAll(
    //   @Query('sortBy') sortBy: string = 'id',
    //   @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',
    // ): Promise<Entity[]> {
    //   return this.firstservice.findAll(sortBy, sortOrder);
    // }


    // @Get()
    // findAll() {
    //     return this.firstservice.gettodos();
    // }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.firstservice.getone(id);
    }

    @Post()
    create(@Body() Todo: Todo) {
        return this.firstservice.createtodos(Todo);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id){
        return this.firstservice.remove(id)
    }

    @Put(':id')
    async updaterow(@Body() entity:Todo ,@Param('id',ParseIntPipe)id){
        return this.firstservice.update(id,entity)
    }

@Put('/cross/:id')
async updadateNew(@Body() newentity:New,@Param('id',ParseIntPipe)id){
    console.log(newentity);
    
    return this.firstservice.updatetonew(id,newentity)
}

@Get()

async getcol(){
return this.firstservice.getColumn();
}


}