import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from 'tools/tools.module';
import { Test3Controller } from './test-3.controller';
import { Test3Service } from './test-3.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: false }),
    MongooseModule.forRoot(process.env.DATA_BASE_URL + process.env.DATA_BASE_TEST3),
    ToolsModule,
  ],
  controllers: [Test3Controller],
  providers: [Test3Service],
})
export class Test3Module {}
