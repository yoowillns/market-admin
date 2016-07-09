import {Mongo} from 'meteor/mongo';

export const Products = new Mongo.Collection('products');
export const Orders = new Mongo.Collection('orders');
