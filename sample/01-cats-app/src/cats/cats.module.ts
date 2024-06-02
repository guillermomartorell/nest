import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class CatsModule {}