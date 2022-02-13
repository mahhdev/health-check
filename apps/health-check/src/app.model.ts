import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type AppDocument = AppModel & Document;
@Schema({ collection: 'logErros' })

export class AppModel {
    @Prop()
    servico: string;

    @Prop({default: new Date()})
    createdAt: Date;
}

export const AppSchema = SchemaFactory.createForClass(AppModel);