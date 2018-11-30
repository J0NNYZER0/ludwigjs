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

    this.handleSectionClick = this.handleSectionClick.bind(this)

    this.handleScroll = this.handleScroll.bind(this)

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleSectionClick() {

    const { show } = this.state

    this.setState({ ...this.state, show: !show }, () => {
      console.log('headerRef')
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

    const { show, toggle } = this.state
    const scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset;
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
      })
    }

    return (
      <div className={toggle === false ? 'sidebar' : 'sidebar stuck'} ref={this.sidebarRef}>
        <div className='toggle' onClick={this.handleToggle}><span>Ludwig v1.0.0</span></div>
        <nav>
          <ul>
            <li className={show !== false ? 'show' : ''}>
              <span onClick={this.handleSectionClick}>Getting Started</span>
              <ul>
                <li>
                  <HashLink to='/docs#about' scroll={el => scrollWithOffset(el, 120)}>About</HashLink>
                </li>
                <li>
                  <HashLink to='/docs#requirements' scroll={el => scrollWithOffset(el, 120)}>Requirements</HashLink>
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
              <span>Updates</span>
            </li>
            <li>
              <span>Support</span>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar