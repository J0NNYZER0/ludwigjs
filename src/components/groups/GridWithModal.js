import React, { Component } from 'react'
import ContactForm from '../../forms/Contact'
import Modal from '../Modal'
import Grid from '../grids/Grid'

class HeroWithModal extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    let today = new Date(),
      year = today.getFullYear()

    const { actions, item } = this.props

    return [
      <Modal key='modal' {...this.props} content={
        <p>Product Content</p>
        } />,
      <Grid item={item}
        buttonText={`Join the waitlist`}
        click={() => this.props.actions.ui.modal(!this.props.ui.modal)} />
    ]
  }
}

export default HeroWithModal
