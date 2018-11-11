import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Elements, Forms, Message } from '@ludwigjs/ui'
import { Constants as constants } from '../constants/index'

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
            <Elements.MainTitle titleText={`That's Wierd`} />
          </section>
          <section>
            <Message
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
            <Elements.MainTitle titleText={`Check Your Email`} />
          </section>
          <section>
            <Message
              title={`A One Time Login Was Sent`}
              message={`Click it to confirm your account and login`} />
          </section>
        </div>
        )

      } else {

      return (
        <div>
          <section className='t-mrg bolt-btm bolt-top'>
            <Elements.MainTitle titleText={`Register`} />
          </section>
          <section>
            <Forms.Register {...this.props} />
          </section>
        </div>
      )
    }
  }
}

export default Register
