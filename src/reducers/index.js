import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import accountReducer from './accountReducer'
import messagesReducer from './messagesReducer'
import productsReducer from './productsReducer'
import uiReducer from './uiReducer'
import widgetsReducer from './widgetsReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  account: accountReducer,
  messages: messagesReducer,
  products: productsReducer,
  ui: uiReducer,
  widgets: widgetsReducer
})

export default rootReducer
