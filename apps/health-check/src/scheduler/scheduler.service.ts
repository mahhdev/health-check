import { Injectable, Logger } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { AppService } from "../app.service";

@Injectable()
export class SchedulerService {
    private readonly logger = new Logger(SchedulerService.name)

    constructor(
        private appService: AppService,
    ) { }

    @Interval('JobMonitorTest1', 50 * 1000)
    JobMonitorTest1() {
        this.logger.debug("JobMonitorTest1 running");
        try { this.appService.JobMonitorTest1(); } catch (err) { }
    }

    @Interval('JobMonitorTest2', 55 * 1000)
    JobMonitorTest2() {
        this.logger.debug("JobMonitorTest2 running");
        try { this.appService.JobMonitorTest2(); } catch (err) { }
    }

    @Interval('JobMonitorTest3', 60 * 1000)
    JobMonitorTest3() {
        this.logger.debug("JobMonitorTest3 running");
        try { this.appService.JobMonitorTest3(); } catch (err) { }
    }
}

