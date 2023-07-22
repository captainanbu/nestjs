import { Injectable, NotFoundException } from "@nestjs/common";
import { New } from "./new.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";

@Injectable()
export class newservice{

    constructor(@InjectRepository(New) private newRepository:Repository<New>){}



    // getnew():Promise<New[]> {
    //     let keyword = "dd";
    //     let take = 10;
    //     let skip = 0;
    //     return this.newRepository.find(
    //         {​​​​​​
    //             where: {​​​​​​ title: Like('%' + keyword + '%') }​​​​​​, order: {​​​​​​ id: "DESC" }​​​​​​,
    //              take,
    //              skip,
    //         }
    //     );
    // }

  



    

    get():Promise<New[]> {
        return this.newRepository.find();
    }


    getone(id:number):Promise<New>{
        return this.newRepository.findOne({ where: { id }})
    }

    createnew(note: New){
        this.newRepository.save(note);
    }

    async removenew(id: string): Promise<void> {
      await  this.newRepository.delete(id);
    }
    
    async updatenew(id:number , entity:New){
        const updateRow = await this.newRepository.findOne({where:{id}})
        if(!updateRow){
            throw new NotFoundException('error occured ')
        }

        updateRow.title = entity.title;
        updateRow.description = entity.description
        await this.newRepository.save(updateRow)

        return updateRow;
    }
}

