
const Constants = {
  HOST: process.env.NODE_ENV === 'production' ? '' : 'http://0.0.0.0:3000',
  ACCOUNT_STATUS: {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
    LOGGING_IN: 'LOGGING_IN',
    NON_EXISTENT: 'NON_EXISTENT',
    UNCONFIRMED: 'UNCONFIRMED'
  },
  ACTIONS: {
    MESSAGES: {
      SUCCESS: 'MESSAGE_SUCCESS'
    },
    LOGIN: {
      SUCCESS: 'LOGIN_SUCCESS'
    },
    PRODUCTS: {
      LOAD: 'PRODUCTS_LOAD'
    },
    WIDGETS: {
      LOAD: 'WIDGETS_LOAD'
    }
  },
  FETCH: {
    SUCCESS: 'FETCH_SUCCESS',
    ERROR: 'FETCH_ERROR'
  },
  UI: {
    MODAL: 'MODAL'
  },
  URI: {
    API: {
      CONTACT: `/api/v1/contact`,
      CONFIRM: `/api/v1/confirm/`,
      LOGIN: `/api/v1/login/`,
      LOGGING_IN: `/api/v1/logging-in`,
      LOGOUT: `/api/v1/logout`,
      RECONFIRM: `/api/v1/reconfirm`,
      REGISTER: `/api/v1/register`,
      WIDGETS: `/api/v1/widgets`
    },
    ASSETS: {
      PRODUCTS: `/assets/products.json`
    }
  }
}

export { Constants }
