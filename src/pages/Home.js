import React, { Component } from 'react'
import { Forms, GridLayouts, Heros } from 'viddy'

class Home extends Component {

  render() {

    const { actions } = this.props

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <Heros.WithModal {...this.props}
            buttonText={`Join the waitlist`}
            classNames='ludwig-bg-dk'
            click={() => actions.ui.modal(!this.props.ui.modal)}
            title={`Ludwig JS`}
            text={`A badass fullstack JS boilerplate for rockstar engineers.`}>
            <Forms.Contact {...this.props}
              callback={() => actions.ui.modal(false)}
              contactType={2}
              formTitle={`Join The Waitlist`}
              subject='Join Waitlist' />
          </Heros.WithModal>
        </section>
        <section className='gry-brdr'>
          <h1>{`A Powerful Full-Stack Javascript Boilerplate`}</h1>
          <p>
            {`Ludwig is Reactjs on top of Nodejs with a select blend of
              modern javascript technologies. Get your apps setup and
              running with Ludwig. It might only take 5 minutes.`}
          </p>
        </section>
        <section className='gry-brdr'>
          <h2>{`Stupid Simple to Setup, Customize and Deploy`}</h2>
          <p>
            {`Start your app, without the pain of installing and
              configuring all the standard plumbing which most full
              stack applications require.`}
          </p>
        </section>
        <section className='bolt-btm'>
          <h2>{`Built Only For Hardcore Javascript Engineers`}</h2>
          <p>
            {`If you like getting your hands dirty in the blood,
              guts and bones of boilerplate code, then Ludwig just might
              be your next best friend.`}
          </p>
        </section>
        <section className='b-rad-6 rad-grad3'>
          <h2>
            {`Pick Your Poison`}
          </h2>
          <p>
            {`Ludwig is a killer full stack boilerplate, filled with tinctures,
              snake oils and a tiny drop of javascript...and most importantly,
              it requires minimum setup. Since you, yo' momma and yo' momma's
              momma all have different levels when it comes to using Ludwig,
              we wanna help out.`}
          </p>
          <GridLayouts.GridLayoutA {...this.props} />
        </section>
        <section className='gry-brdr bolt-top'>
          <h3>{`Caution: Noobs Beware*`}</h3>
          <p className='gry-brdr'>
            <b>{`Kudos for getting this far down the page! `}</b>
            {`However, if you tend to overengineer things and build things which have
              snaggleteeth, please kindly refrain from bastardizing Ludwig.
              He'll appreciate not being your science experiment gone bad.`}
          </p>
          <p className='gry-brdr'>
            {`Likewise, if code drives you batty and causes you great
              pain and suffering then Ludwig won't be offended if you decide
              to take a stroll down wordpress lane...nothing against wordpress`}
          </p>
          <p>
            {`But most of all, if you're known as the dude who generally
              blows shit up, put your grenades back in your laptop bag and
              proceed at your own risk. Ludwig likes all his appendages and
              might get pissed if you accidentally maim him.`}
          </p>
        </section>
        <section className='bolt-btm'>
          <Forms.Contact {...this.props} formTitle={`Request a Demo`}
            subject='Demo Request' contactType={1} />
        </section>
      </div>
    )
  }
}

export default Home
