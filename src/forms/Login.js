import React, { Component } from 'react'
import TextInput from './inputs/Text'

class LoginForm extends Component {

  constructor(props) {

    super(props)

    this.state = {
      form: {
        email: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {

    this.state.form[e.target.name] = e.target.value

    this.setState({form: this.state.form})

  }

  handleSubmit(e) {
    const { actions } = this.props

    e.preventDefault()

    actions.account.loggingIn(this.state.form)
    .then(() => this.setState({
      form: {
        email: ''
      }
    }))

  }

  render() {

    return (
      <form>
        <TextInput
          name='email'
          onChange={this.handleOnChange}
          placeholder='Email'
          value={this.state.form.email} />
        <br/>
        <button className='btn' onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default LoginForm
