import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Constants as constants } from '../constants/index'
import MainTitle from '../components/MainTitle'
import RegisterForm from '../forms/Register'
import StatusMessage from '../components/StatusMessage'

class Register extends Component {

  render() {

    const { account } = this.props

    if (account.status === constants.ACCOUNT_STATUS.LOGGED_IN) {

      return <Redirect to='/account' />

    }

    else if (account.status === constants.ACCOUNT_STATUS.LOGGED_OUT) {
      return (
        <div>
          <section className='t-mrg bolt-btm bolt-top'>
            <MainTitle titleText={`That's Wierd`} />
          </section>
          <section>
            <StatusMessage
            title={`This Account Already Exists`}
            message={`Try logging in instead`} />
        </section>
      </div>)
    }

    else if (Object.keys(account).length > 0 &&
      account.status === constants.ACCOUNT_STATUS.UNCONFIRMED) {

      return (
        <div>
          <section className='t-mrg bolt-btm bolt-top'>
            <MainTitle titleText={`Check Your Email`} />
          </section>
          <section>
            <StatusMessage
              title={`A One Time Login Was Sent`}
              message={`Click it to confirm your account and login`} />
          </section>
        </div>
        )

      } else {

      return (
        <div>
          <section className='t-mrg bolt-btm bolt-top'>
            <MainTitle titleText={`Register`} />
          </section>
          <section>
            <RegisterForm {...this.props} />
          </section>
        </div>
      )
    }
  }
}

export default Register
