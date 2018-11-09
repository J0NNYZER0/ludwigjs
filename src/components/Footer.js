import React, { Component } from 'react'
import NavBar from './NavBar'
import Copyright from './Copyright'
import CompanyName from './CompanyName'
import Logo from './Logo'

class Header extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <footer>
        <NavBar {...this.props} />
        <Copyright />
        <CompanyName />
        <Logo />
      </footer>
    )
  }
}

export default Header
