/**
 * Created by Willians on 28/06/2016.
 */
//Routes
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Meteor} from  'meteor/meteor';
//Importar Layouts y templates
import '../../ui/layouts/layout.js';
import '../../ui/home/home.js';
import '../../ui/admin/admin.js';
import '../../ui/products/products.js';

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('layout', { main: 'home',section :'' });
    }
});

FlowRouter.route('/admin',{
    name: 'admin',
    action:function(){
        BlazeLayout.render('layout2', { main2: 'admin',section2 :'' });
    }
});

FlowRouter.route('/products',{
    name: 'products',
    action:function(){
        BlazeLayout.render('layout', { main: 'products',section :'carrito' });
    }
});