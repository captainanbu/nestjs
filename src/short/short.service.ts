import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { short } from "./short.entity";
import { New } from "src/new/new.entity";


@Injectable()
export class shortservice{

    constructor(@InjectRepository(short) private shortRepository:Repository<short> ,
    @InjectRepository(New)private newRepository:Repository<New>) {}

    get():Promise<short[]> {
        return this.shortRepository.find();
    }

    getone(id:number):Promise<short>{
        return this.shortRepository.findOne({ where: {id}})
    }

    create(short: short){
        this.shortRepository.save(short);
    }

    async remove(id: string): Promise<void> {
        await this.shortRepository.delete(id);
    }

    async update(id:any , entity:short){
        const updateRow = await this.shortRepository.findOne({where:{id}})
        if(!updateRow){
            throw new NotFoundException('short is not found')
        }

        updateRow.title = entity.title;
        updateRow.description = entity.description
        await this.shortRepository.save(updateRow)

        return updateRow;
    }

    async updatetonew(id:number,newEntity:short){
        const NewupdateRow = await this.shortRepository.findOne({where:{id}})

        if(!NewupdateRow){
            throw new NotFoundException('ssssssssssss')
        }
        newEntity.title = NewupdateRow.title;
        newEntity.description = NewupdateRow.description
        await this.shortRepository.save(NewupdateRow)
        return NewupdateRow
    }

}