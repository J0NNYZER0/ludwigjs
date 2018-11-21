import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Elements, Table } from '@ludwigjs/ui'
import { Constants as constants } from '../constants/index'

class Accounts extends Component {

  constructor(props) {

    super(props)

    this.state = {
      accounts: []
    }
  }

  componentDidMount() {

    const { actions, accounts } = this.props

    actions.accounts.get()

  }

  componentDidUpdate(prevProps) {

    const { accounts } = this.props

    if (accounts !== prevProps.accounts) {
      this.setState({ accounts: accounts })
    }

  }

  render() {
    const { account, accounts } = this.props

    if (account.status !== constants.ACCOUNT_STATUS.LOGGED_IN) return <Redirect to='/login' />

    if (account.scope.indexOf('admin') === -1) return <Redirect to='/login' />

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <Elements.PageTitle titleText={`Accounts`} />
        </section>
        <section>
          <Table accounts={accounts} />
        </section>
      </div>
    )
  }
}

export default Accounts
