import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./todo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getConnection } from "typeorm";
import { New } from "src/new/new.entity";
import { todo } from "node:test";

@Injectable()
export class firstservice{

    constructor(@InjectRepository(Todo) private TodoRepository:Repository<Todo> ,
    @InjectRepository(New)private newRepository:Repository<New>){}


    async findAll(sortBy: string = 'id', sortOrder: 'ASC' | 'DESC' = 'ASC'): Promise<Todo[]> {
        return this.TodoRepository.find({
          order: {
            [sortBy]: sortOrder,
          },
        });
      }



    gettodos():Promise<Todo[]> {
        return this.TodoRepository.find();
    }

    

    getone(id:number):Promise<Todo>{
        return this.TodoRepository.findOne({ where: { id },select:['id','title']

        },
            )
    }

    createtodos(note: Todo){
        this.TodoRepository.save(note);
    }

    async remove(id: string): Promise<void> {
      await  this.TodoRepository.delete(id);
    }
    
    async update(id:any , entity:Todo){
        const updateRow = await this.TodoRepository.findOne({where:{id}})
        if(!updateRow){
            throw new NotFoundException('first try ')
        }

        updateRow.title = entity.title;
        updateRow.description = entity.description
        await this.TodoRepository.save(updateRow)

        return updateRow;
    }








    async updatetonew(id:number,newEntity:New){
        const NewupdateRow = await this.TodoRepository.findOne({where:{id}})
        console.log(NewupdateRow,"!!!!!!!!!!!!!!!!!!");
        
        if(!NewupdateRow){
            throw new NotFoundException('firstffff try ')
           
        }
        newEntity.title = NewupdateRow.title;
        newEntity.description = NewupdateRow.description
        await this.newRepository.save(NewupdateRow)
        return NewupdateRow;
    }

async getColumn():Promise<string[]>{
    const qb = getConnection()
    .createQueryBuilder(todo,'todo')
    .select('todo.title','titleeee')
    const res = await qb.getRawMany();
return res.map((row)=>row.title)

}





}

