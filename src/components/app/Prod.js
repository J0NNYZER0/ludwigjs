import React, {Component} from 'react'
import Root from './Root'


class Prod extends Component {

  render() {

    return (<Root {...this.props} />)
  }
}
 
export default Prod
