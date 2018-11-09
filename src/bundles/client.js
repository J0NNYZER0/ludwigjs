import React from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './../store/configureStore'
import Prod from '../components/app/Prod'
import '../../assets/styles/all.scss'

// Create a fresh store
const store = configureStore()

render(
  <AppContainer>
    <Prod store={store} />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('../components/app/Dev', () => {

    const Dev = require('../components/app/Dev').default

    render(
      <AppContainer>
        <Dev store={store} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}

/*
TODO: AppContainer might be causing the following console warning:

Warning: Expected server HTML to contain a matching <div> in <div>



if (process.env.NODE_ENV === 'production') {

  export default withRouter(withCookies(connect(mapStateToProps,mapDispatchToProps)(App)))

}
 else {

   export default hot(module)(withRouter(withCookies(connect(mapStateToProps,mapDispatchToProps)(App))))

 }
*/
