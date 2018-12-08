import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import accountReducer from './accountReducer'
import accountsReducer from './accountsReducer'
import messagesReducer from './messagesReducer'
import contentReducer from './contentReducer'
import uiReducer from './uiReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  account: accountReducer,
  accounts: accountsReducer,
  messages: messagesReducer,
  content: contentReducer,
  ui: uiReducer
})

export default rootReducer
