// example.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sortingService } from './sorting.service';
import { sortingcontroller } from './sorting.controller';




@Module({
  imports: [TypeOrmModule.forFeature([sortingEntity])],
  providers: [sortingService],
  controllers: [sortingcontroller]
})
export class sortingModule {}
