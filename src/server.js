import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import configureStore from './store/configureStore'
import App from './components/app/Index'

module.exports = function render(path, initialState, cookies) {

  const store = configureStore(initialState)

  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={store}>
        <CookiesProvider cookies={cookies}>
          <App />
        </CookiesProvider>
      </StaticRouter>
    </Provider>
  )
const preloadedState = store.getState()

return {content, preloadedState}
}
