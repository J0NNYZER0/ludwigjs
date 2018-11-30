import React, { Component } from 'react'

class StickyHeader extends Component {

  constructor(props) {

    super(props)

    this.headerRef = React.createRef()

    this.handleScroll = this.handleScroll.bind(this)

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {

    const header = this.headerRef.current,
      stickyHeader = header.parentNode,
      stickeyHeaderOffset = stickyHeader.offsetTop

    if (window.pageYOffset > stickeyHeaderOffset) {
      stickyHeader.classList.add('stuck')
    } else {
      stickyHeader.classList.remove('stuck')
    }
  }

  render() {

    const { title = '' } = this.props

    return (<div className='sticky-header'><h1 ref={this.headerRef}>{`${title}`}</h1></div>)
  }
}

export default StickyHeader
