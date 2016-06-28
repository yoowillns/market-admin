/**
 * Created by Willians on 28/06/2016.
 */

import {Template} from 'meteor/templating';
import './nav.html';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
