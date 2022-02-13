import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ToolsModule } from 'tools/tools.module';
import { AppController } from './app.controller';
import { AppModel, AppSchema } from './app.model';
import { AppService } from './app.service';
import { SchedulerService } from './scheduler/scheduler.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: false }),
    MongooseModule.forRoot(process.env.DATA_BASE_URL + process.env.DATA_BASE_HEALTH_CHECK),
    MongooseModule.forFeature([{ name: AppModel.name, schema: AppSchema }]),
    ScheduleModule.forRoot(),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ToolsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    SchedulerService,
  ],
})
export class AppModule {}
