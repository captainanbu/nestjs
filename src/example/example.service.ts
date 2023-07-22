// example.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { ExampleEntity } from './example.entity';

@Injectable()
export class ExampleService {
  userRepository: any;
  constructor(
    @InjectRepository(ExampleEntity)
    private exampleRepository: Repository<ExampleEntity>,
  ) {}

  async groupByCategory(): Promise<{id:number; name: string; category: string; totalValue: number }[]> {
    return this.exampleRepository
      .createQueryBuilder('example')
      .select('example.category', 'category')
      .addSelect('example.id')
      .addSelect('SUM(example.value)', 'totalValue')
      .groupBy('example.category')
      .getRawMany();
  }

  

async findAll(query): Promise<ExampleEntity[]> {​​​​​​
    const take = query.take || 10;
    const skip = query.skip || 0;
    const keyword = query.keyword || '';
    const [result, total] = await this.exampleRepository.findAndCount(
        {​​​​​​
            where: {​​​​​​ name: Like('%' + keyword + '%') }​​​​​​, order: {​​​​​​ name: "DESC" }​​​​​​,
             take,
             skip,
        }​​​​​​
    );

    // return {​​​​​​
    //     data: result,
    //     count: total,
    // };
    return result
}​​​​​​



}
