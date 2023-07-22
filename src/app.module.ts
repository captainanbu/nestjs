import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/todo.entity';
import { NewModule } from './new/new.module';
import { New } from './new/new.entity';
import { shortModule } from './short/short.module';
import { short } from './short/short.entity';
import { ExampleModule } from './example/example.module';
import { ExampleEntity } from './example/example.entity';
import { StudentModule } from './student/student.module';
import { student } from './student/student.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "Anbu***24",
      "database": "student",
      "entities": [Todo,New,short,ExampleEntity,student],
      "synchronize": true
  }),
    TodoModule,
    NewModule,shortModule,ExampleModule, StudentModule,

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}