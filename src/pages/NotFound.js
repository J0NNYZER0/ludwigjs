import React, { Component } from 'react'
import MainTitle from '../components/MainTitle'

class NotFound extends Component {

  render() {

    return (
      <section className='t-mrg bolt-btm bolt-top'>
        <MainTitle titleText={`Not Found`} />
      </section>
    )
  }
}

export default NotFound
