import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsModule } from 'tools/tools.module';
import { Test2Controller } from './test-2.controller';
import { Test2Service } from './test-2.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: false }),
    MongooseModule.forRoot(process.env.DATA_BASE_URL + process.env.DATA_BASE_TEST2),
    ToolsModule
  ],
  controllers: [Test2Controller],
  providers: [Test2Service],
})
export class Test2Module {}
