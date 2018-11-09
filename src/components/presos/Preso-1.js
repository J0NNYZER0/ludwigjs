import React, { Component } from 'react'
import { Elements, Slideshows } from 'viddy'

class Preso1 extends Component {

  constructor(props) {

    super(props)

    this.click = this.click.bind(this)
  }

  click() {

    const { click = () => {} } = this.props

    click()

  }

  render() {
    const { buttonText = '', classNames = ''} = this.props

    return (
      <Slideshows.WithProgressBar>
        <div className='preso ludwig-bg-dk'>
          <div>
            <Elements.MainTitle classNames={`white txt-shdw`} titleText={`Getting Started`} />
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h2>{`Quick Overview`}</h2>
            <ul>
              <li>{`A UI, API and DB built on reactjs, nodejs and mysql`}</li>
              <li>{`+ a few other JS frameworks`}</li>
              <li>{`Includes instant end-to-end data flow`}</li>
            </ul>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h1>{`Before Setup`}</h1>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h2>{`Necessary Requirements:`}</h2>
            <ul>
              <li>{`Nodejs version 8.11.4`}</li>
              <li>{`1 Amazon SES account approved to send email`}</li>
              <li>{`1 registered domain`}</li>
              <li>{`1 running MySQL instance`}</li>
              <li>{`1 Heroku Account (required only for deployment)`}</li>
            </ul>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h1>{`Begin Setup`}</h1>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h2>{`First`}</h2>
            <ul>
              <li>{`Download Ludwig’s code to your desired directory`}</li>
              <li>{`Run npm install in Ludwig’s root directory`}</li>
            </ul>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h2>{`Next`}</h2>
            <ul>
              <li>{`Create a file to store Ludwig’s environment variables`}</li>
              <li>{`Verify it’s location matches the location indicated in the package.json`}</li>
              <li>{`Add the following key value pairs:`}</li>
            </ul>
            <p className='code'>
              {`export CLEARDB_DATABASE_URL=<YOUR_DATABASE_CONNECTION_STRING>`}<br/>
              {`export SECURITY_TOKEN_SECRET=<YOUR_SECRET>`}<br/>
              {`export AWS_REGION=<YOUR_AWS_REGION>`}<br/>
              {`export AWS_ACCESS_KEY_ID=<YOUR_AWS_ACCESS_KEY_ID>`}<br/>
              {`export AWS_SECRET_ACCESS_KEY=<YOUR_AWS_SECRET_ACCESS_KEY>`}<br/>
              {`export LOGIN_EMAIL=<YOUR_LOGIN_EMAIL>`}
            </p>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h1>{`Almost Done!`}</h1>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h2>{`Setup Your Database`}</h2>
            <ul>
              <li>{`Run the database script located in “server/schemas”`}</li>
            </ul>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h2>{`Run Ludwig`}</h2>
            <ul>
              <li>{`Open a terminal window`}</li>
              <li>{`Run npm run build-local`}</li>
              <li>{`Open another terminal window`}</li>
              <li>{`Run npm run local`}</li>
            </ul>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h2>{`Demo Ludwig`}</h2>
            <ul>
              <li>{`Open a browser and visit 0.0.0.0:3000`}</li>
              <li>{`For hot reloading visit 0.0.0.0:8080`}</li>
              <li>{`Example demo coming soon...`}</li>
            </ul>
          </div>
        </div>
        <div className='preso ludwig-bg-dk'>
          <div>
            <h1>{`That's it!`}</h1>
            <p>{`(Now you can customize Ludwig and have fun)`}</p>
          </div>
        </div>
      </Slideshows.WithProgressBar>
    )
  }
}

export default Preso1
