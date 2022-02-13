import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { Emails } from "./Emails/emails.service";
import { HealthController } from "./health/health.controller";

@Module({
    imports: [
        TerminusModule,
        HttpModule
    ],
    controllers: [HealthController],
    exports: [Emails],
    providers: [Emails]
})
export class ToolsModule { }