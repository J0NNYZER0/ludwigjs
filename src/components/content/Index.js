import React, { Component } from 'react'
import StickyHeader from '../elements/StickyHeader'

class SidebarContent extends Component {

  constructor(props) {

    super(props)

  }

  render() {

    const { item } = this.props

    return (<div key={item.title}>
      <StickyHeader title={item.title} />
      <section>
        {item.categories.map((cat,i) => {

          const anchor = item.title + ` ` + cat.title

          return [
            <h2 key={`${i}_title`} id={`${anchor.replace(/\s/g, `_`).toLowerCase()}`}>{cat.title}</h2>,
            <p key={`${i}_content`}>{cat.content}</p>
          ]
        })}
      </section>
      </div>)
  }
}

export default SidebarContent
