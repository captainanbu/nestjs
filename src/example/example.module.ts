// example.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './example.entity';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  providers: [ExampleService],
  controllers: [ExampleController],
})
export class ExampleModule {}
