import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([student])],
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {

}
  