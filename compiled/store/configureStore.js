"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=configureStore;var _redux=require("redux"),_reduxThunk=_interopRequireDefault(require("redux-thunk")),_reduxDevtoolsExtension=require("redux-devtools-extension"),_reducers=_interopRequireDefault(require("../reducers"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function configureStore(a){return(0,_redux.createStore)(_reducers.default,a,(0,_reduxDevtoolsExtension.composeWithDevTools)((0,_redux.applyMiddleware)(_reduxThunk.default)))}