import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withCookies, Cookies } from 'react-cookie'
import * as accountActions from '../../actions/account'
import * as contactActions from '../../actions/contact'
import * as productsActions from '../../actions/products'
import * as uiActions from '../../actions/ui'
import Favicon from 'react-favicon'
import Modal from '../Modal'
import Notifications from '../Notifications'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

class App extends Component {

  constructor(props) {

    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {

    const { actions, cookies } = this.props

    actions.account.logout()

    cookies.remove('sid')

  }

  render() {

    const { account, actions } = this.props

    return [
      <Favicon key='favicon' url='https://s3-us-west-1.amazonaws.com/vellocet/images/ludwig.ico' />,
      <Modal key='modal' {...this.props} />,
      <Header key='header' logout={this.logout} {...this.props} />,
      <Notifications key='notifcations' {...this.props} />,
      <Main key='main' {...this.props} />,
      <Footer key='footer' logout={this.logout} {...this.props} />
    ]
  }
}

const mapStateToProps = state => ({
  account: state.account,
  messages: state.messages,
  products: state.products,
  ui: state.ui,
  widgets: state.widgets
}),
mapDispatchToProps = dispatch => ({
  actions: {
    account: bindActionCreators(accountActions, dispatch),
    contact: bindActionCreators(contactActions, dispatch),
    products: bindActionCreators(productsActions, dispatch),
    ui: bindActionCreators(uiActions, dispatch)
  }
})

export default withRouter(withCookies(connect(mapStateToProps,mapDispatchToProps)(App)))
