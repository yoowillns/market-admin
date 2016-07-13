/**
 * Created by Willians on 09/07/2016.
 */
import {Template} from 'meteor/templating';
import './products.html';
import {Products} from '../../api/products/products.js';
import {Orders} from '../../api/products/products.js';

var enCarrito = new ReactiveVar([]);
var carritoTemp = new Array();

Template.productsList.helpers({
    productos:function (){
        return Products.find();
    },
});

Template.carrito.helpers({
    getCarrito:function (){
        var lista = enCarrito.get().length;
        return lista;
    },
    carritoVacio:function (){
        var lista = enCarrito.get().length;
        if(lista == 0){
            return true;
        }
        else{
            return false;
        }
    },
})

Template.productsList.events({
    'click .carrito':function (e){
        var idProducto = $(e.target).attr('idProducto');
        carritoTemp.push({id:idProducto});
        enCarrito.set(carritoTemp);
    },
});

Template.carrito.events({
    'click #bcarrito':function (e){
        e.preventDefault();
        if(Meteor.userId()){
            var usuario = Meteor.userId();
            Orders.insert({
                usuario : usuario,
                fecha: new Date(),
                pedido : enCarrito.get()
            });
            alert("Se registro el pedido");
            enCarrito.set([]);
            carritoTemp = new Array();

        }
        else{
            alert("Inicie session");
        }
    },
});
