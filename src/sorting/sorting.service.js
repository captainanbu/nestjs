// example.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExampleEntity } from './example.entity';

@Injectable()
export class sortingService { sortingService: any;
  constructor(@InjectRepository(sortingEntity) private sortingRepository:Repository<sortingEntity>) {}
  

 async createsorting(sortingEnt: sortingEntity) {
  this.sortingRepository.save(sortingService);
 }

 getsorting():Promise<sortingService[]>{
  return this.sortingRepository.find()

 }

 async removesorting(id:Number, entity:sortingEntity){
 await this.sortingRepository.delete(id);


  const updateRow = await this.sortingRepository.findOne({where:{id}})
  if(!updateRow) {
    throw new NotFoundException('error occured')
  }

  updateRow.id = entity.id;
  updateRow.name = entity.name;
  updateRow.age = entity.age;
  await this.sortingRepository.save(updateRow)

  return updateRow;
 }






  // async findAll(sortBy: string = 'id', sortOrder: 'ASC' | 'DESC' = 'ASC'): Promise<ExampleEntity[]> {
  //   return this.exampleRepository.find({
  //     order: {
  //       [sortBy]: sortOrder,
  //     },
  //   });
  // }





}
