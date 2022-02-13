import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from 'tools/tools.module';
import { Test1Controller } from './test-1.controller';
import { Test1Service } from './test-1.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: false }),
    MongooseModule.forRoot(process.env.DATA_BASE_URL + process.env.DATA_BASE_TEST1),
    ToolsModule,
  ],
  controllers: [Test1Controller],
  providers: [Test1Service],
})
export class Test1Module {}
