import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CoreMetricsDocument = HydratedDocument<CoreMetric>;

@Schema()
export class CoreMetric {
  @Prop()
  tmsTenantId: string;

  @Prop()
  data: any;
}

export const CoremetricSchema = SchemaFactory.createForClass(CoreMetric);