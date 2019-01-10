import React, { Component } from 'react'
import { Elements, Hero, Sticky } from '@ludwigjs/ui'

class Docs extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { content } = this.props,
        { docs } = content

    return (
      <div className='docs-page'>
        <div className='panels col-2'>
          <div className='panel'>
            <Sticky.Sidebar items={docs} path={'/docs'} />
          </div>
          <div className='panel'>
            <section className='t-mrg bolt-btm bolt-top'>
              <Elements.PageTitle titleText={`Docs`} />
            </section>
            <section className='t-mrg'>
              <Hero key={1} {...this.props}
                classNames='cogs'
                text={`So Easy, a Frikkin' Monkey Can Do It`}>
                <div className='banner code-monkey' />
              </Hero>
            </section>
            {docs.map((el,i) => <Sticky.Content key={i} item={el}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Docs

