import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'short'})
export class short{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    title:string;
    
    @Column()
    description:String;
}

