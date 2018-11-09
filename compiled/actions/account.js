"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reconfirm=exports.confirm=exports.register=exports.logout=exports.loggingIn=exports.login=void 0;var _account=require("../apis/account"),_index=require("../constants/index"),success=function(a){return{type:_index.Constants.ACTIONS.LOGIN.SUCCESS,data:a}},login=function(a){return function(b){return _account.Api.login(a).then(function(a){b(success(a.data))}).catch(function(a){throw a})}};exports.login=login;var loggingIn=function(a){return function(b){return _account.Api.loggingIn(a).then(function(a){b(success(a.data))}).catch(function(a){throw a})}};exports.loggingIn=loggingIn;var logout=function(){return function(a){return _account.Api.logout().then(function(b){a(success(b.data))}).catch(function(a){throw a})}};exports.logout=logout;var register=function(a){return function(b){return _account.Api.register(a).then(function(a){b(success(a.data))}).catch(function(a){throw a})}};exports.register=register;var confirm=function(a){return function(b){return _account.Api.confirm(a).then(function(a){b(success(a.data))}).catch(function(a){throw a})}};exports.confirm=confirm;var reconfirm=function(a){return function(b){return _account.Api.reconfirm(a).then(function(a){b(success(a.data))}).catch(function(a){throw a})}};exports.reconfirm=reconfirm;