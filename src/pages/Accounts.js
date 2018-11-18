import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Elements } from '@ludwigjs/ui'
import { Constants as constants } from '../constants/index'

class Accounts extends Component {

  render() {
    const { account } = this.props

    if (account.status !== constants.ACCOUNT_STATUS.LOGGED_IN) return <Redirect to='/login' />

    if (account.scope.indexOf('admin') === -1) return <Redirect to='/login' />

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <Elements.PageTitle titleText={`Accounts`} />
        </section>
        <section>
          <div className='tblgrp'>
            <div className='tbl'>
              <ul className='tbl-hdr'>
                <li>
                  User
                </li>
                <li>
                  Email
                </li>
                <li>
                  Status
                </li>
              </ul>
              <ul className='tbl-bdy'>
                <li>
                  MrTest1
                </li>
                <li>
                  MrTest1@xxxxxx.com
                </li>
                <li>
                  Active <i>(logged in)</i>
                </li>
              </ul>
            </div>
            <div className='tbl'>
              <ul className='tbl-hdr'>
                <li>
                  User
                </li>
                <li>
                  Email
                </li>
                <li>
                  Status
                </li>
              </ul>
              <ul className='tbl-bdy'>
                <li>
                  MrTest1
                </li>
                <li>
                  MrTest1@xxxxxx.com
                </li>
                <li>
                  Active <i>(logged in)</i>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Accounts
