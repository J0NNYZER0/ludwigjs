import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'

class Sidebar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      show: false,
      toggle: false
    }

    this.sidebarRef = React.createRef()

    this.handleToggle = this.handleToggle.bind(this)

    //this.handleSectionClick = this.handleSectionClick.bind(this)

    this.handleScroll = this.handleScroll.bind(this)

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleSectionClick(i) {

    const { show } = this.state

    this.setState({ ...this.state, show: !show, section: i }, () => {
      console.log('test', this.state.section)
    })

  }

  handleToggle() {

    const { toggle } = this.state

    this.setState({ ...this.state, toggle: !toggle })

  }

  handleScroll() {

    const sidebar = this.sidebarRef.current,
      sidebarOffset = sidebar.offsetTop

    if (window.pageYOffset > sidebarOffset) {
      this.setState({ ...this.state, toggle: false })
      sidebar.classList.add('stuck')
      sidebar.classList.add('closed')
    } else {
      sidebar.classList.remove('stuck')
      sidebar.classList.remove('closed')
    }
  }

  render() {

    const { show, toggle, section } = this.state,
        { items } = this.props,
      scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        })
      },
      offSet = 70

    return (
      <div className={toggle === false ? 'sidebar' : 'sidebar stuck'} ref={this.sidebarRef}>
        <div className='toggle' onClick={this.handleToggle}><span>Ludwig v1.0.0</span></div>
        <nav>
          <ul>
            {items.map((sec,i) => {
              return <li key={i} className={section === i ? 'show' : ''}>
                <span onClick={this.handleSectionClick.bind(this,i)}>{sec.title}</span>
                <ul>
                  {sec.categories.map((cat,ii) => {

                    const anchor = sec.title + ` ` + cat.title

                    return <li key={ii}>
                      <HashLink to={`/docs#${anchor.replace(/\s/g, `_`).toLowerCase()}`} scroll={el => scrollWithOffset(el, offSet)}>{cat.title}</HashLink>
                    </li>
                  })}
                </ul>
              </li>
            })}
          </ul>
        </nav>
        <HashLink to='/docs#top' className='gototop' smooth><span>Go To Top</span></HashLink>
      </div>
    )
  }
}

export default Sidebar
