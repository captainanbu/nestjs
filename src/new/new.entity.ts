import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'new'})
export class New{
   @PrimaryGeneratedColumn()
    id:number;

    @Column()  
    title:string;

    @Column()
    description:string;
}