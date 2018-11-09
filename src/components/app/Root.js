import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import App from './Index'


class Root extends Component {

  render() {

    const { store } = this.props

    return (
      <Provider store={store}>
        <BrowserRouter>
          <CookiesProvider>
            <App />
          </CookiesProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}
 
export default Root
