import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { Emails } from 'tools/Emails/emails.service';
import { AppDocument, AppModel } from './app.model';

@Injectable()
export class AppService {

  constructor(
    private email: Emails,
    private httpService: HttpService,
    @InjectModel(AppModel.name) private AppCollection: Model<AppDocument>
  ) { }

  JobMonitorTest1(): Observable<AxiosResponse<void>> {
    try {
      this.httpService.get(process.env.LOCAL_HOST + process.env.PORTA_TEST1 + '/health/' + process.env.DATA_BASE_TEST1)
        .subscribe(
          async result => {
            if (result.status === 200) {
              if (result.data.status === 'ok') {
                return
              } else {
                const servico = await this.AppCollection.find({ "servico": "test1" }).limit(1).sort({ $natural: -1 })
                if (servico.length > 0) {
                  servico.map(async item => {
                    const dateItem = item.createdAt.getHours()
                    const dateNow = new Date().getHours()
                    const hours = dateNow - dateItem
                    if (hours > 0) {
                      await this.AppCollection.create({
                        servico: process.env.DATA_BASE_TEST1
                      })
                      await this.email.sendEmail(item.servico)
                    }
                  })
                } else {
                  await this.AppCollection.create({
                    servico: process.env.DATA_BASE_TEST1
                  })
                  await this.email.sendEmail('test1')
                }
              }
            }
          },
          async error => {
            const servico = await this.AppCollection.find({ "servico": "test1" }).limit(1).sort({ $natural: -1 })
            if (servico.length > 0) {
              servico.map(async item => {
                const dateItem = item.createdAt.getHours()
                const dateNow = new Date().getHours()
                const hours = dateNow - dateItem
                if (hours > 0) {
                  await this.AppCollection.create({
                    servico: process.env.DATA_BASE_TEST1
                  })
                  await this.email.sendEmail('test1')
                }
              })
            } else {
              await this.AppCollection.create({
                servico: process.env.DATA_BASE_TEST1
              })
              await this.email.sendEmail('test1')
            }
          })
      return
    } catch (err) { console.log('Error no job Monitor test1', err) }
  }

  JobMonitorTest2(): Observable<AxiosResponse<void>> {
    try {
      this.httpService.get(process.env.LOCAL_HOST + process.env.PORTA_TEST2 + '/health/' + process.env.DATA_BASE_TEST2)
        .subscribe(
          async result => {
            if (result.status === 200) {
              if (result.data.status === 'ok') {
                return
              } else {
                const servico = await this.AppCollection.find({ "servico": "test2" }).limit(1).sort({ $natural: -1 })
                if (servico.length > 0) {
                  servico.map(async item => {
                    const dateItem = item.createdAt.getHours()
                    const dateNow = new Date().getHours()
                    const hours = dateNow - dateItem
                    if (hours > 0) {
                      await this.AppCollection.create({
                        servico: process.env.DATA_BASE_TEST2
                      })
                      await this.email.sendEmail('test2')
                    }
                  })
                } else {
                  await this.AppCollection.create({
                    servico: process.env.DATA_BASE_TEST2
                  })
                  await this.email.sendEmail('test2')
                }
              }
            }
          },
          async error => {
            const servico = await this.AppCollection.find({ "servico": "test2" }).limit(1).sort({ $natural: -1 })
            if (servico.length > 0) {
              servico.map(async item => {
                const dateItem = item.createdAt.getHours()
                const dateNow = new Date().getHours()
                const hours = dateNow - dateItem
                if (hours > 0) {
                  this.AppCollection.create({
                    servico: process.env.DATA_BASE_TEST2
                  })
                  await this.email.sendEmail('test2')
                }
              })
            } else {
              await this.AppCollection.create({
                servico: process.env.DATA_BASE_TEST2
              })
              await this.email.sendEmail('test2')
            }
          })
      return
    } catch (err) { console.log('Error no job Monitor test2', err) }
  }

  JobMonitorTest3(): Observable<AxiosResponse<void>> {
    try {
      this.httpService.get(process.env.LOCAL_HOST + process.env.PORTA_TEST3 + '/health/' + process.env.DATA_BASE_TEST1)
        .subscribe(
          async result => {
            if (result.status === 200) {
              if (result.data.status === 'ok') {
                return
              } else {
                const servico = await this.AppCollection.find({ "servico": "test3" }).limit(1).sort({ $natural: -1 })
                if (servico.length > 0) {
                  servico.map(async item => {
                    const dateItem = item.createdAt.getHours()
                    const dateNow = new Date().getHours()
                    const hours = dateNow - dateItem
                    if (hours > 0) {
                      await this.AppCollection.create({
                        servico: process.env.DATA_BASE_TEST3
                      })
                      await this.email.sendEmail('test3')
                    }
                  })
                } else {
                  await this.AppCollection.create({
                    servico: process.env.DATA_BASE_TEST3
                  })
                  await this.email.sendEmail('test3')
                }
              }
            }
          },
          async error => {
            const servico = await this.AppCollection.find({ "servico": "test3" }).limit(1).sort({ $natural: -1 })
            if (servico.length > 0) {
              servico.map(async item => {
                const dateItem = item.createdAt.getHours()
                const dateNow = new Date().getHours()
                const hours = dateNow - dateItem
                if (hours > 0) {
                  await this.AppCollection.create({
                    servico: process.env.DATA_BASE_TEST3
                  })
                  await this.email.sendEmail('test3')
                }
              })
            } else {
              await this.AppCollection.create({
                servico: process.env.DATA_BASE_TEST3
              })
              await this.email.sendEmail('test3')
            }
          })
      return
    } catch (err) { console.log('Error no job Monitor test3', err) }
  }

  async allLogs(servico: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await this.AppCollection.find({"servico": servico}))
    })
  }
}


