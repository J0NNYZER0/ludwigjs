import React, { Component } from 'react'
import { Elements, Forms, Hero, Slideshow } from 'viddy'

class Widgets extends Component {

  constructor(props) {

    super(props)
    this.state = {
      loading: props.widgets.length === 0
    }
  }

  render() {

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <Elements.MainTitle titleText={`Contact`} />
        </section>
        <section className='t-mrg bolt-btm'>
          <Slideshow>
            <Hero key={1} {...this.props}
              classNames='cogs'
              text={`I am a Mindless Cog in the Machine`}>
              <div className='banner cog' />
            </Hero>
            <Hero key={2} {...this.props}
              classNames='bolts'
              text={`I Want to Be a Magical Full-stack Beast.`}>
              <div className='banner beastie' />
            </Hero>
          </Slideshow>
        </section>
        <section>
          <Forms.Contact {...this.props} formTitle={``} subject='General Request' contactType={0} />
        </section>
      </div>
    )
  }
}

export default Widgets
