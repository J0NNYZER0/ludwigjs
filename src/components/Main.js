import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Account from '../pages/Account'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Plan from '../pages/Plan'
import Product from '../pages/Product'
import Register from '../pages/Register'

class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { account, actions } = this.props

    return (<main>
      <Switch>
       <Route key='/' path='/' exact
         render={props => (<Home  {...this.props} {...props} />)} />
       <Route key='/product' path='/product' exact
         render={props => (<Product  {...this.props} {...props} />)} />
       <Route key='/plan/:id?' path='/plan/:id?' exact
         render={props => (<Plan  {...this.props} {...props} />)} />
       <Route key='/contact' path='/contact'
         render={props => (<Contact {...this.props} {...props} />)} />
       <Route key='/register' path='/register'
         render={props => (<Register {...this.props} {...props} />)} />
       <Route key='/login/:sid?' path='/login/:sid?'
         render={props => (<Login {...this.props} {...props} />)} />
       <Route key='/account' path='/account'
         render={props => (<Account {...this.props} {...props} />)} />
       <Route key='/notfound' path='/notfound'
         render={props => (<NotFound {...this.props} {...props} />)} />
     </Switch>
   </main>)
  }
}

export default Main
