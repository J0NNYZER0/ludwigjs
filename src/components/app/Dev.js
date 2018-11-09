import React, {Component} from 'react'
import { hot } from 'react-hot-loader'
import Root from './Root'


class Dev extends Component {

  render() {

    return (<Root {...this.props} />)
  }
}
 
export default hot(module)(Dev)
