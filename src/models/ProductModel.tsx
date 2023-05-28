import mongoose, { Document, Schema } from "mongoose";

export interface ISKU {
  skuid: number;
  quantity: number;
  active: boolean;
  unit: string;
  size: number;
  price: number;
}

export interface IProduct extends Document {
  description2: string;
  category: string;
  images: string[];
  SKUs: ISKU[];
  subCategory: string;
  isPopular: boolean;
  createdAt: number;
  active: boolean;
  id: string;
  description1: string;
  name: string;
  image: string;
  shortInfo?: string;
  NO_ID_FIELD?: string;
}

const SKUSchema = new Schema<ISKU>({
  skuid: { type: Number, required: true },
  quantity: { type: Number, required: true },
  active: { type: Boolean, required: true },
  unit: { type: String, required: true },
  size: { type: Number, required: true },
  price: { type: Number, required: true },
});

const ProductSchema = new Schema<IProduct>({
  description2: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
  SKUs: { type: [SKUSchema], required: true },
  subCategory: { type: String, required: true },
  isPopular: { type: Boolean, required: true },
  createdAt: { type: Number, required: true },
  active: { type: Boolean, required: true },
  id: { type: String, required: true },
  description1: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  shortInfo: { type: String },
  NO_ID_FIELD: { type: String },
});

const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;
