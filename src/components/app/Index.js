import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withCookies, Cookies } from 'react-cookie'
import { Layout, Notification } from '@ludwigjs/ui'
import * as accountActions from '../../actions/account'
import * as accountsActions from '../../actions/accounts'
import * as contactActions from '../../actions/contact'
import * as contentActions from '../../actions/content'
import * as uiActions from '../../actions/ui'
import Main from '../Main'

class App extends Component {

  constructor(props) {

    super(props)

    this.logout = this.logout.bind(this)
  }


  componentDidMount() {

    const { actions } = this.props

    actions.content.getDocs(`docs.json`)
    actions.content.getProducts(`products.json`)

  }

  logout() {

    const { actions, cookies } = this.props

    actions.account.logout()

    cookies.remove('sid')

  }

  render() {

    const { account, actions } = this.props

    return [

      <Layout.Header key='header' logout={this.logout} {...this.props} />,
      <Notification key='notifcations' {...this.props} />,
      <Main key='main' {...this.props} />,
      <Layout.Footer key='footer' logout={this.logout} {...this.props} />
    ]
  }
}

const mapStateToProps = state => ({
  account: state.account,
  accounts: state.accounts,
  messages: state.messages,
  content: state.content,
  ui: state.ui
}),
mapDispatchToProps = dispatch => ({
  actions: {
    account: bindActionCreators(accountActions, dispatch),
    accounts: bindActionCreators(accountsActions, dispatch),
    contact: bindActionCreators(contactActions, dispatch),
    content: bindActionCreators(contentActions, dispatch),
    ui: bindActionCreators(uiActions, dispatch)
  }
})

export default withRouter(withCookies(connect(mapStateToProps,mapDispatchToProps)(App)))
