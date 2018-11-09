import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Elements, Forms, Message } from 'viddy'
import { Constants as constants } from '../constants/index'

class Login extends Component {

  constructor(props) {

    super(props)

  }

  componentDidMount() {

    const { actions, match } = this.props

    if (match.params.sid) {

      actions.account.login(match.params.sid)

    }
  }

  render() {

    const { account, actions } = this.props

    if (account.status === constants.ACCOUNT_STATUS.LOGGED_IN) {

      return (<Redirect to='/account' />)

    }

    else if (account.status === constants.ACCOUNT_STATUS.LOGGING_IN) {

      return (
        <div>
          <section className='t-mrg bolt-btm bolt-top'>
            <Elements.MainTitle titleText={`Check Your Email`} />
          </section>
          <section>
          <Message
            title={`A One Time Login Was Sent`}
            message={`Click it to login`} />
          </section>
        </div>
      )

    }

    else if (account.status === constants.ACCOUNT_STATUS.NON_EXISTENT) {
      return (
        <div>
          <section className='t-mrg bolt-btm bolt-top'>
            <Elements.MainTitle titleText={`Whoops`} />
          </section>
          <section>
          <Message
            title={`Something went wrong`}
            message={`Please refresh this page and try again`} />
          </section>
        </div>
      )
    }

    else {

      return (
        <div>
          <section className='t-mrg bolt-btm bolt-top'>
            <Elements.MainTitle titleText={`Login`} />
          </section>
          <section>
            <Forms.Login {...this.props} />
          </section>
        </div>
      )
    }
  }
}

export default Login
