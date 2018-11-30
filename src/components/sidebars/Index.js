import React, { Component } from 'react'

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

    return (
      <div className={toggle === false ? 'sidebar' : 'sidebar stuck'} ref={this.sidebarRef}>
        <div className='toggle' onClick={this.handleToggle}>Ludwig v1.0.0</div>
        <nav>
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
