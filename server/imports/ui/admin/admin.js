/**
 * Created by Willians on 09/07/2016.
 */
import {Template} from 'meteor/templating';
import './admin.html';
import {Products} from '../../api/products/products.js';
import {Orders} from '../../api/products/products.js';

var verDetalle = new ReactiveVar(false);

Template.adminSuccess.events({
    'click #bregistrar':function (e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var precio = $("#precio").val();
        var cantidad = $("#cantidad").val();
        if(nombre.length == 0 || precio.length == 0 || cantidad.length == 0){
            alert("Datos vacios");
            return;
        }
        var producto = {
            nombre:nombre,
            cantidad:cantidad,
            precio:precio,
            fecha:new Date()
        }
        //console.log(producto);
        Products.insert(producto);
        $('#fprodcuto')[0].reset();
    },
    'click .eliminar':function (e){
        event.preventDefault();
        Products.remove(this._id);
    },
    'click .pedido':function (e){
        e.preventDefault();
        verDetalle.set(true);
    }
});

Template.adminSuccess.helpers({
   productos:function (){
     return Products.find();
   },
    pedidos:function (){
        var data = Orders.find().fetch();
        var distinctData = _.uniq(data, false, function(d) {return d.usuario});
        return distinctData;
    },
    getPedidoUser:function (id){
        var user = Meteor.users.findOne({'_id':id});
        //console.log(user.username);
        return user.username;
    },
    getCantidadPedido:function (id){
        var lista = Orders.find({usuario:id});
        //console.log(lista);
        return lista.count();
    },
    getDetalle:function (){
        return verDetalle.get();
    },
    pedidosUsuario:function (){
        var lista = Orders.find({'usuario':idUsuario});
        return lista;
    },
});