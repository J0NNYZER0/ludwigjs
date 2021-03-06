import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Elements } from '@ludwigjs/ui'
import { Constants as constants } from '../constants/index'

class Account extends Component {

  render() {
    const { account } = this.props

    if (account.status !== constants.ACCOUNT_STATUS.LOGGED_IN) return <Redirect to='/login' />

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <Elements.PageTitle titleText={`Account`} />
        </section>
        <section>
          <p>
            <span className='icon xl avatar' /><br/>
            Hello {account.first_name}!<br /><br />
            Username: {account.user_name}<br />
            Email: {account.email}<br />
          </p>
        </section>
      </div>
    )
  }
}

export default Account
