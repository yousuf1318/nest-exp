import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type addressDocument = address & Document;

@Schema()
export class address {
    @Prop({ required: true })
    userId: string;
    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    pin?: string;

    @Prop({ required: true })
    city?: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt?: Date;
}

export const addressSchema = SchemaFactory.createForClass(address);