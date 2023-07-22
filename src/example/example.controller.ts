// example.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleEntity } from './example.entity';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get('group-by-category')
  async groupByCategory(): Promise<{ category: string; totalValue: number }[]> {
    return this.exampleService.groupByCategory();
  }

  @Get('/grp')
  async findAll(@Query() query): Promise<ExampleEntity[]> {
    const response = await this.exampleService.findAll(query);
    return response;
  }

 
}
