/**
 * Created by Willians on 09/07/2016.
 */
import {Meteor} from 'meteor/meteor';
import {Products} from './products.js';
import {Orders} from  './products.js';

Products.allow({
   insert:function (){
       return true;
   },
    update:function (){
        return true;
    },
    remove:function (){
        return true;
    },
});

Meteor.methods({
    'Orders.insert':function (productID){
        if(!Meteor.userId()){
            throw new Meteor.Error("Not login");
        }
        return Orders.insert({user:Meteor.userId(),product:productID});
    },
});