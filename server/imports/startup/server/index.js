import {Meteor} from 'meteor/meteor';
import './methods.js';

Meteor.startup(function (){
    Accounts.onCreateUser(function(opciones, user){
        if(!user.profile){
            user.profile = {};
        }
        user.profile.state = true;
        return user;
    });
    Accounts.onLogin(function (){
        console.log(Meteor.userId());
        var id = Meteor.userId();
        var email = Meteor.user().emails[0].address;
        if(email === 'admin@gmail.com'){
            console.log("Admin");
            Roles.addUsersToRoles(id, ['admin','staff']);
        }
        else{
            console.log("Client");
            Roles.addUsersToRoles(id, ['client']);
        }
    });
});