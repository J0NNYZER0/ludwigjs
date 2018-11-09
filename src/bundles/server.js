import React from 'react'
import {hydrate} from 'react-dom'
import configureStore from './../store/configureStore'
import Root from './../components/app/Prod'
import '../../assets/styles/all.scss'

// Read the state sent with markup
const state = window.__STATE__

// delete the state from global window object
delete window.__STATE__

// reproduce the store used to render the page on server
const store = configureStore(state)

hydrate(
  <Root store={store} />,
  document.getElementById('app')
)
