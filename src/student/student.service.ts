import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { student } from './student.entity';

@Injectable()
export class StudentService {
    studentservice: any;

    constructor(@InjectRepository(student) private studentRepository:Repository<student>) {}
  


    
    async createstudent(student: student){
        this.studentRepository.save(student);
    }
  
    getstudent():Promise<student[]>{
        return this.studentRepository.find()

    }

   getone(id:number):Promise<student>{
    return this.studentRepository.findOne({ where: {id}})
   }

   async removestudent(id: string): Promise<void> {
    await  this.studentRepository.delete(id);
  }
  
  async updatestudent(id:number , entity:student){
      const updateRow = await this.studentRepository.findOne({where:{id}})
      if(!updateRow){
          throw new NotFoundException('error occured ')
      }

      updateRow.name = entity.name;
      updateRow.age = entity.age;
      updateRow.city = entity.city;
      updateRow.initial = entity.initial
      await this.studentRepository.save(updateRow)

      return updateRow;
  }



    }

