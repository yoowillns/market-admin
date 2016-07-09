/**
 * Created by Willians on 28/06/2016.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import './nav.html';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Template.nav.events({
    'click #login-buttons-logout':function (){
        FlowRouter.go("/");
    },
});