import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";




@Entity({name: 'student'})
export class student{
   
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    age:number;

    @Column()
    city:string;

    @Column()
    initial:string;
   

}