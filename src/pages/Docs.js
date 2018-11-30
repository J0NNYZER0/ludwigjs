import React, { Component } from 'react'
import { Elements, Hero } from '@ludwigjs/ui'
import Sidebar from '../components/sidebars/Index'
import StickyHeader from '../components/elements/StickyHeader'

class Docs extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    return (
      <div className='docs-page'>
        <div className='panels col-2'>
          <div className='panel'>
            <Sidebar />
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
            <StickyHeader title={`Getting Started`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Workflow`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Pages`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Components`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Layouts`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Resources`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Themes`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Plugins`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Deployment`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`License`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Updates`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
            <StickyHeader title={`Support`} />
            <section>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
              <h2>{`Some Helpful Subcategory`}</h2>
              <p>
                {`Some helpful text.`}
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Docs
