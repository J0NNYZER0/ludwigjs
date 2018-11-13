import React, { Component } from 'react'
import { Elements } from '@ludwigjs/ui'

class NotFound extends Component {

  render() {

    return (
      <section className='t-mrg bolt-btm bolt-top'>
        <Elements.PageTitle titleText={`Not Found`} />
      </section>
    )
  }
}

export default NotFound
