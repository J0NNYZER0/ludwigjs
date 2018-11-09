import React, { Component } from 'react'

class Widgets extends Component {

  constructor(props) {

    super(props)
    this.state = {
      loading: props.widgets.length === 0
    }
  }

  render() {
    const { loading } = this.state
    const { widgets } = this.props

    if (loading === true) {
      return (
      <section>
        <h1>Register</h1>
        <p>Loading...</p>
      </section>)
    }

    return (
      <section>
        <h1>Widgets</h1>
        <ul style={{display: 'flex', flexWrap: 'wrap'}}>
          {widgets.map(({ name }) => (
            <li key={name} style={{margin: 30}}>
              <ul>
                <li>{name}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Widgets
