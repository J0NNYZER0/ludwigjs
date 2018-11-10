import React, { Component } from 'react'
import { Elements, Forms, GridLayouts, Hero, Slideshow } from 'viddy'
import Preso1 from '../components/presos/Preso-1'

class Plan extends Component {

  render() {

    return (
      <div>
        <section className='t-mrg bolt-btm bolt-top'>
          <Elements.MainTitle titleText={`Ludwig JS`} />
        </section>
        <section className='t-mrg bolt-btm'>
          <Slideshow>
            <Hero key={1} {...this.props}
              classNames='lt-bg-lnr'
              text={`I Wasn't Made by Tiny Elves`}>
              <div className='banner wooden-ludwig' />
            </Hero>
            <Hero key={2} {...this.props}
              classNames='lt-bg-lnr'
              text={`I'm Not a Magical Black Box`}>
              <div className='banner magical-blk-box-ludwig' />
            </Hero>
          </Slideshow>
        </section>
        <section className='bolt-btm'>
          <p>
            <b>{`I'm no elf, `}</b>
            {`I don't hail from Germany, I don't yodel or cobble shoes after midnight.
            I'm your tiniest, most useful tool in your toolbelt, created by some geek
            that worked at a super mega tech giant in Silicon Valley.`}
          </p>
        </section>
        <section className='t-mrg bolt-btm'>
          <Preso1 />
        </section>
        <section className='gry-brdr'>
          <h2>{`You Get Everything + the Kitchen Sink`}</h2>
          <p>
            {`Perhaps, I can explain this in terms that your feeble brain can grasp.`}
          </p>
        </section>
        <section>
          <h3>{`Reactjs Components`}</h3>
          <p className='b-m-25'>
            {`A library of reactjs pages, forms and components.`}
          </p>
          <h3>{`8 Pages`}</h3>
          <ul>
            <li>
              <b>{`Global`}</b>
              <ul>
                <li>{`Header`}</li>
                <li>{`Footer`}</li>
                <li>{`Modal Popup`}</li>
                <li>{`Notifications`}</li>
              </ul>
            </li>
            <li>
              <b>{`Home`}</b>
              <ul>
                <li>{`Hero Banner`}</li>
                <li>{`Section Title x 6`}</li>
                <li>{`Section Content x 6`}</li>
                <li>{`Grid Layout`}</li>
                <li>{`Section Title`}</li>
                <li>{`Contact Form`}</li>
              </ul>
            </li>
            <li>
              <b>{`Product`}</b>
              <ul>
                <li>{`Hero Banner`}</li>
                <li>{`Section Content`}</li>
                <li>{`Grid Layout`}</li>
                <li>{`Contact Form`}</li>
              </ul>
            </li>
            <li>
              <b>{`Plans`}</b>
              <ul>
                <li>{`Slideshow containing Hero Banners`}</li>
                <li>{`Section Content`}</li>
                <li>{`Grid Layout`}</li>
                <li>{`Contact Form`}</li>
              </ul>
            </li>
            <li>
              <b>{`Contact`}</b>
              <ul>
                <li>{`Contact Form`}</li>
              </ul>
            </li>
            <li>
              <b>{`Account`}</b>
              <ul>
                <li>{`Account Info`}</li>
              </ul>
            </li>
            <li>
              <b>{`Register`}</b>
              <ul>
                <li>{`Register Form`}</li>
              </ul>
            </li>
            <li>
              <b>{`Login`}</b>
              <ul>
                <li>{`Login Form`}</li>
              </ul>
            </li>
            <li>
              <b>{`Not Found`}</b>
              <ul>
                <li>{`Status`}</li>
              </ul>
            </li>
          </ul>
          <h3>{`4 Forms`}</h3>
          <ul>
            <li><b>{`Contact - `}</b>{`Accepts email and subject`}</li>
            <li><b>{`Login - `}</b>{`Accepts email`}</li>
            <li><b>{`Reconfirm - `}</b>{`Accept email`}</li>
            <li><b>{`Register - `}</b>{`Accepts email, username and first name`}</li>
          </ul>
          <h3>{`30+ Components`}</h3>
          <ul>
            <li><b>{`Root - `}</b>
              {`This abstracts the App component to be used in Prod / Dev components`}</li>
            <li><b>{`Prod - `}</b>
              {`Use this when you compile for production`}</li>
            <li><b>{`Dev - `}</b>
              {`Supports Hot Module Reloading`}</li>
            <li>
              <b>{`App - `}</b>
                {`Contains Modal, Notifications, Header, Main and Footer`}
              <ul className='m-15'>
                <li><b>{`Modal - `}</b>
                  {`This takes any html or react components as
                    children and renders with the help of the button component.`}</li>
                <li><b>{`Notifications - `}</b>
                  {`This is used to render notifications
                    during any kind of http activity. You can wire this to
                    support other uses within the base, but that is on you.
                    Specifically when a user sends information through a form request.`}</li>
                <li><b>{`Header - `}</b>
                  {`A key layout component which contains the Logo,
                    Nav Bar and DropDown components. This is built for repsonsive desktop
                    with the help of sass.`}</li>
                <li><b>{`Main - `}</b>
                  {`The main react routes are defined within this,
                    along with the pages which each respectively render.`}</li>
                <li><b>{`Footer - `}</b>
                  {`This contains a scaled down version of the Nav
                    component, plus the Copyright, Company Name and Logo component`}</li>
              </ul>
            </li>
            <li><b>{`Button - `}</b>
              {`This executes an action and display a title`}</li>
            <li><b>{`Company Name - `}</b>
              {`This displays your company name`}</li>
            <li><b>{`Message - `}</b>
              {`This renders alternative section content, use this to swap
                content based on a user event`}</li>
            <li><b>{`Copyright - `}</b>
              {`This displays the copyright symbol and the current year`}</li>
            <li><b>{`Drop Down Menu - `}</b>
              {`This contains a parent button which toggle a list of children, and a caret icon
                which toggles up or down`}</li>
            <li><b>{`Load More - `}</b>
              {`This contains a text button which accepts a minimum list of items and hides the rest.
                This is used to balance content within grids.`}</li>
            <li><b>{`Logo - `}</b>
              {`This is the site logo`}</li>
            <li><b>{`Menu Icon - `}</b>
              {`An animation rendered with pure css, it transitions between a "menu" icon and an "x" icon.`}</li>
            <li><b>{`Nav Bar - `}</b>
              {`A horizontal list of menu items which collapse into a vertical hidden list of menu items.
                Some unique features include an animated menu icon. The expanded menu
                disappears on location change. Also contains the Dropdown component`}</li>
            <li><b>{`Slideshow - `}</b>
              {`Left and right arrow controls allow you to flip through an array of
                components or balanced html`}</li>
            <li><b>{`Status Message - `}</b>
              {`Renders when a status is received within the response of an HTTP request`}</li>
            <li><b>{`Hero Banner - `}</b>
              {`Contains a background image and gradient along with a main image, title, call to action and button`}</li>
            <li><b>{`Lists - `}</b>
              {`Lists can be fully loaded or partially loaded with a Load More component`}</li>
            <li><b>{`Grid - `}</b>
              {`Divided into 3 sections - Top, Body, Footer`}</li>
            <li><b>{`Grids - `}</b>
              {`A responsive list of 2 x 2 grid components`}</li>
            <li><b>{`Grid Layouts - `}</b>
              {`More tailored list containing 1 top grid above a list of 2 x 2 grids`}</li>
            <li><b>{`Groups - `}</b>{`These contain a blend of Grid with Modal and Hero with Modal`}</li>
          </ul>
        </section>
        <section className='bolt-btm'>
          <h2>{`Responsive Design`}</h2>
          <p>
            {`9 Sass documents which generate and compile to readable css in all.css`}
          </p>
          <ul>
            <li>{`_base.scss`}</li>
            <li>{`_components.scss`}</li>
            <li>{`_elements.scss`}</li>
            <li>{`_fonts.scss`}</li>
            <li>{`_grid.scss`}</li>
            <li>{`_icons.scss`}</li>
            <li>{`_reset.scss`}</li>
            <li>{`_variables.scss`}</li>
            <li>{`all.scss`}</li>
          </ul>
        </section>
        <section className='bolt-btm'>
          <h2>{`Server Rendered Pages`}</h2>
          <p>
            {`Essential for SEO Compliance, and rendering pages which respond to server errors`}
          </p>
        </section>
        <section className='bolt-btm'>
          <h2>{`Account Management`}</h2>
          <p>
            {`This is a highly opinioned implementation known as passwordless login.`}
          </p>
          <h3>{`Registration`}</h3>
          <ul>
            <li>
              <b>{`UI - `}</b>
              {`User fills out register form and clicks submit`}
            </li>
            <li>
              <b>{`API - `}</b>
              {`Logging in service is executed`}
            </li>
            <li>
              <b>{`DB - `}</b>
              {`Register service stores account info`}
            </li>
            <li>
              <b>{`CACHE - `}</b>
              {`Time sensitive token is stored in state for subsequent retrieval
                from client`}
            </li>
            <li>
              <b>{`COOKIE - `}</b>
              {`A cookie is sent down to client in response and client attaches
                it to all subsequent http request`}
            </li>
            <li>
              <b>{`AWS - `}</b>
              {`Simple Email Service delivers user an email with a token to
                confirm and log user in for the first time`}
            </li>
            <li>
              <b>{`UI - `}</b>
              {`After clicking email, user is redirected back to login page`}
            </li>
            <li>
              <b>{`API - `}</b>
              {`Login service executes and response is sent`}
            </li>
            <li>
              <b>{`UI - `}</b>
              {`Client receives response and redirects to account page`}
            </li>
          </ul>
          <ul>
            <h3>{`Login`}</h3>
            <li>
              <b>{`UI - `}</b>
              {`User enters email in login form and clicks submit`}
            </li>
            <li>
              <b>{`API - `}</b>
              {`Logging in service is executed`}
            </li>
            <li>
              <b>{`CACHE - `}</b>
              {`Time sensitive token is stored in state for subsequent retrieval from client`}
            </li>
            <li>
              <b>{`COOKIE - `}</b>
              {`A cookie is sent down to client in response and client attaches it
                to all subsequent http request`}
            </li>
            <li>
              <b>{`AWS - `}</b>
              {`Simple Email Service delivers user an email with a token to log user in`}
            </li>
            <li>
              <b>{`UI - `}</b>
              {`After clicking email, user is redirected back to login page`}
            </li>
            <li>
              <b>{`API - `}</b>
              {`Login service executes and response is sent`}
            </li>
            <li>
              <b>{`UI - `}</b>
              {`Client receives response and redirects to account page`}
            </li>
          </ul>
        </section>
        <section className='bolt-btm'>
          <h2>{`Nodejs Backend`}</h2>
          <p>
            {`This is a robust API running on HapiJs. (Express and pure Nodejs implementations coming soon)`}
          </p>
          <h3>{`Static Content`}</h3>
          <ul>
            <li>
              <b>{`Page Content - `}</b>
              {`Serve home, account, contact, login, plan, product, register`}
            </li>
            <li>
              <b>{`Static Assets - `}</b>
              {`Serve css, javascript and static json`}
            </li>
          </ul>
          <h3>{`API`}</h3>
          <ul>
            <li>
              <b>{`Contact - `}</b>
              {`Multiple contact form requests`}
            </li>
            <li>
              <b>{`Account - `}</b>
              {`Register, login, loggin in and logout`}
            </li>
          </ul>
        </section>
        <section className='bolt-btm'>
          <h2>{`Database Storage`}</h2>
          <p>
            {`Provide a database connection string and create your custom MYSQL queries`}
          </p>
          <ul>
            <h3>{`Handler`}</h3>
            <li>
              <b>{`Params and Payload - `}</b>
              {`Safely pass your values wrapped within an array at all times (even single values)`}
            </li>
          </ul>
          <h3>{`Queries`}</h3>
          <ul>
            <li>
              <b>{`Contact - `}</b>
              {`Create custom queries for node-mysql`}
            </li>
          </ul>
        </section>
        <section className='bolt-btm'>
          <h2>{`Platform Security`}</h2>
          <p>
            {`Multiple Layers of Security keep your application and it's data safe and secure.`}
          </p>
          <h3>{`Validation`}</h3>
          <ul>
            <li>
              <b>{`Client - `}</b>
              {`Forms prevent empty values from being sent in request`}
            </li>
            <li>
              <b>{`Server - `}</b>
              {`Route validation tests all payload and parameter values are checked on the server's request lifecycle`}
            </li>
          </ul>
        </section>
        <section className='bolt-btm'>
          <h2>{`Multiple Levels of Monitoring`}</h2>
          <p>
            {`Some description...`}
          </p>
        </section>
        <section className='bolt-btm'>
          <h2>{`Development Experience`}</h2>
          <p>
            {`Some description...`}
          </p>
        </section>
        <section className='bolt-btm'>
          <h2>{`Configured for Webpack, Babel and Hot Reloading`}</h2>
          <p>
            {`Some description...`}
          </p>
        </section>
        <section className='bolt-btm'>
          <h2>{`Easily Deployable to Heroku`}</h2>
          <p>
            {`Already configured and tested to guarantee simple deployment`}
          </p>
        </section>
        <section className='bolt-btm'>
          <h2>{`Send Email Via AWS`}</h2>
          <p>
            {`The internal account flow is dependent upon AWS`}
          </p>
          <ul>
            <li>
              <b>{`Login to Heroku - `}</b>
              {`Add a domain in your project settings`}
            </li>
          </ul>
          <ul>
            <li>
              <b>{`Login to SES Console - `}</b>
              {`Add a new domain for each region`}
            </li>
          </ul>
          <ul>
            <li>
              <b>{`Login to Host Provider - `}</b>
              {`Add TXT, MX records as per AWS and CNAME record as per Heroku`}
            </li>
          </ul>
        </section>
        <section className='gry-brdr b-rad-6 rad-grad3'>
          <h2>
            {`Out of the Box`}
          </h2>
          <p>
            {`No muss or fuss, Ludwig gives developers a rockin' end to end
            boilerplate. If your app needs more fuel check out our packages.`}
          </p>
          <GridLayouts.GridLayoutA {...this.props} />
        </section>
        <section className='gry-brdr bolt-top'>
          <h3>{`I Eat My Own Dogfood`}</h3>
          <p>
            {` This sounds yucky, but I assure you this is good for you!
              This means I use my own product to build all the pages and
              components that you see here. And all the API's and configurations
              necessary to run this site are available for you instantly out of the box.`}
          </p>
        </section>
        <section className='bolt-btm'>
          <Forms.Contact {...this.props} formTitle={`Request a Demo`} subject='Demo Request' contactType={1} />
        </section>
      </div>
    )
  }
}

export default Plan

/*My bones are made of reactjs
and nodejs and my brains squish with redis and mysql. My heart pumps javascript and my
soul is open source.
*/
