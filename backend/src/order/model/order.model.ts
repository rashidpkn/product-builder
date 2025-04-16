import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { customerType, fabricType } from "../types";

@Schema({
  timestamps:true
})
export class Orders {
  @Prop({type:{}})
  customer: customerType

  @Prop({type:{}})
  fabric: fabricType

  @Prop()
  reference:string

  @Prop({enum:["pending" , "completed" , "failed"],default:"pending"})
  status:"pending" | "completed" | "failed"


}


export const OrdersSchema = SchemaFactory.createForClass(Orders);

export const OrdersModel = mongoose.model('Orders', OrdersSchema);