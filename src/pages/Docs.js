import React, { Component } from 'react'
import { Elements, Forms, Hero, Slideshow } from '@ludwigjs/ui'

class Docs extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <Elements.PageTitle titleText={`Docs`} />
        </section>
        <section className='t-mrg bolt-btm'>
          <Slideshow>
            <Hero key={1} {...this.props}
              classNames='cogs'
              text={`I Was a Mindless Cog in the Machine`}>
              <div className='banner cog' />
            </Hero>
            <Hero key={2} {...this.props}
              classNames='bolts'
              text={`Now I Am a Magical Full-stack Beast`}>
              <div className='banner beastie' />
            </Hero>
          </Slideshow>
        </section>
        <section>
          <h3>Say Hello</h3>
          <Forms.Contact {...this.props} formTitle={``} subject='General Request' contactType={0} />
        </section>
      </div>
    )
  }
}

export default Docs
