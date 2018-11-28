import React, { Component } from 'react'
import { Elements, Forms, Hero, Slideshow } from '@ludwigjs/ui'

class Docs extends Component {

  constructor(props) {

    super(props)

    this.state = {
      show: false
    }

    this.handleSectionClick = this.handleSectionClick.bind(this)

  }

  handleSectionClick() {

    const { show } = this.state

    this.setState({ show: !show })

  }


  render() {
    const { show } = this.state

    return (
      <div className='docs-page'>
        <div className='panels col-2'>
          <div className='panel'>
            <div className='sidebar'>
              <nav>
                <ul>
                  <li>
                    <span>Ludwig v1.0.0</span>
                  </li>
                </ul>
                <ul>
                  <li className={show !== false ? 'show' : ''}>
                    <span onClick={this.handleSectionClick}>Getting Started</span>
                    <ul>
                      <li>
                        About
                      </li>
                      <li>
                        Requirements
                      </li>
                      <li>
                        Installation
                      </li>
                      <li>
                        Usage
                      </li>
                      <li>
                        Options
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Workflow</span>
                  </li>
                  <li>
                    <span>Pages</span>
                  </li>
                  <li>
                    <span>Components</span>
                  </li>
                  <li>
                    <span>Layouts</span>
                  </li>
                  <li>
                    <span>Resources</span>
                  </li>
                  <li>
                    <span>Themes</span>
                  </li>
                  <li>
                    <span>Plugins</span>
                  </li>
                  <li>
                    <span>Webpack</span>
                  </li>
                  <li>
                    <span>Deployment</span>
                  </li>
                  <li>
                    <span>License</span>
                  </li>
                  <li>
                    <span>Changes</span>
                  </li>
                  <li>
                    <span>Support</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='panel'>
            <section className='t-mrg bolt-btm bolt-top'>
              <Elements.PageTitle titleText={`Docs`} />
            </section>
            <section>
              <h1>{`Getting Started`}</h1>
            </section>
            <section>
              <h2>{`About`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <section>
              <h2>{`Requirements`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <section className='t-mrg bolt-btm'>
              <Hero key={1} {...this.props}
                classNames='cogs'
                text={`So Easy, a Frikkin' Monkey Can Do It`}>
                <div className='banner code-monkey' />
              </Hero>
            </section>
            <section>
              <h3>Say Hello</h3>
              <Forms.Contact {...this.props} formTitle={``} subject='General Request' contactType={0} />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Docs
