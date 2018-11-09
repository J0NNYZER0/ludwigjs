import React, { Component } from 'react'
import MainTitle from '../components/MainTitle'
import DangerousHtml from '../components/DangerousHtml'
import Slideshow from '../components/Slideshow'
import Hero from '../components/hero/Index'
import GridLayout from '../components/grid-layouts/Layout1'
import ContactForm from '../forms/Contact'

class Plan extends Component {

  constructor(props) {
    super(props)

    this.state = {
      plan: {}
    }
  }

  componentDidMount() {

    const { match, products } = this.props,
      productId = match.params.id

    products.find(plan => {

      if (plan.id === parseInt(productId)) {

        this.setState({ plan: plan })

      }

    })

  }

  componentDidUpdate(prevProps, prevState) {

    const { match, products } = this.props,
      productId = match.params.id

    if (prevProps.match.params.id !== productId) {

      products.find(plan => {

        if (plan.id === parseInt(productId)) {

          this.setState({ plan: plan })

        }

      })

    }

  }

  render() {
    const { plan } = this.state,
      { hero } = plan

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <MainTitle titleText={`${plan.name} Plan`} />
        </section>
        <section className='t-mrg bolt-btm'>
          {hero && <Hero key={1} {...this.props}
            classNames='lt-bg-lnr'
            text={`${hero.text}`}>
            <div className={`banner lg ${hero.imageClass}`} />
          </Hero>}
        </section>
        <section className='gry-brdr'>
          <DangerousHtml>
            {`${plan.description}`}
          </DangerousHtml>
        </section>
        <section className='gry-brdr'>
          <h1>{`The Meanest Little JS Boilerplate`}</h1>
          <p>
            {`Ludwig blends a select suite of modern javascript technologies
            to get your apps up and running as quickly as possible.`}
          </p>
        </section>
        <section>
          <h2>{`Built For Hardcore JS Enthusiasts`}</h2>
          <p>
            {`Built on the edge of open source javascript, Ludwig uses frameworks
            which are created by smart engineers, backed by large communities
            and endorsed by companies both small and large.`}
          </p>
        </section>
        <section className='gry-brdr b-rad-6 rad-grad3'>
          <h2>
            {`Out of the Box`}
          </h2>
          <p>
            {`No muss or fuss, Ludwig gives developers a rockin' end to end
            boilerplate. If your app needs more fuel check out our packages.`}
          </p>
          <GridLayout {...this.props} />
        </section>
        <section>
          <ContactForm {...this.props} formTitle={`Request a Demo`} subject='Demo Request' contactType={1} />
        </section>
      </div>
    )
  }
}

export default Plan
