// example.controller.ts
import {Body, Controller, Get, ParseIntPipe, } from '@nestjs/common';

@Controller('sorting')
export class sortingcontroller {
  constructor(private readonly sortingService:sortingService) {}


@Post()
create(@Body() body:sortingEntity){
  return this.sortingService.createsorting(body);
}

@Get()
findAll(){
  return this.sortingService.getsorting();
}

@Get(':id')
fingOne(@Param('id', ParseIntPipe)id) {
  return this.sortingService.getone(id)
}

@Delete(':id')
delete(@Param('id', ParseIntPipe)id){
  return this.sortingService.removestudent(id)
}


@Put(':id')
async updaterow(@Body() entity:student ,@Param('id',ParseIntPipe)id){
    return this.sortingService.updatesorting(id,entity)







  // @Get()
  // async findAll(
  //   @Query('sortBy') sortBy: string = 'id',
  //   @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',): Promise<ExampleEntity[]> {
  //   return this.exampleService.findAll(sortBy, sortOrder);
  // }
}
