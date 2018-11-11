import React, { Component } from 'react'
import { Elements } from '@ludwigjs/ui'

class NotFound extends Component {

  render() {

    return (
      <section className='t-mrg bolt-btm bolt-top'>
        <Elements.MainTitle titleText={`Not Found`} />
      </section>
    )
  }
}

export default NotFound
