import { Body, Controller, Delete, Get ,Param,ParseIntPipe,Post, Put} from '@nestjs/common';
import { StudentService } from './student.service';
import { student } from './student.entity';

@Controller('student')
export class StudentController {

    constructor(private readonly studentservice:StudentService) {}
 
    @Post()
    create(@Body() body:student){
        return this.studentservice.createstudent(body);
    }

    @Get()
    findAll(){
        return this.studentservice.getstudent();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id) {
        return this.studentservice.getone(id)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id){
        return this.studentservice.removestudent(id)
    }

    @Put(':id')
    async updaterow(@Body() entity:student ,@Param('id',ParseIntPipe)id){
        return this.studentservice.updatestudent(id,entity)
    }




}
