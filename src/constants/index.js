
const Constants = {
  HOST: process.env.NODE_ENV === 'production' ? '' : 'http://0.0.0.0:3000',
  ACCOUNT_STATUS: {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
    LOGGING_IN: 'LOGGING_IN',
    NON_EXISTENT: 'NON_EXISTENT',
    UNCONFIRMED: 'UNCONFIRMED'
  },
  ACCOUNT_ROLE: {
    MODIFIED: 'ACCOUNT_ROLE_MODIFIED'
  },
  ACTIONS: {
    ACCOUNTS: {
      LOAD: 'ACCOUNTS_LOAD'
    },
    MESSAGES: {
      SUCCESS: 'MESSAGE_SUCCESS'
    },
    LOGIN: {
      SUCCESS: 'LOGIN_SUCCESS'
    },
    CONTENT: {
      DOCS: {
        LOAD: 'DOCS_LOAD'
      },
      PRODUCTS: {
        LOAD: 'PRODUCTS_LOAD'
      }
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
      ACCOUNTS: `/api/v1/accounts`,
      CONTACT: `/api/v1/contact`,
      CONFIRM: `/api/v1/confirm/`,
      LOGIN: `/api/v1/login/`,
      LOGGING_IN: `/api/v1/logging-in`,
      LOGOUT: `/api/v1/logout`,
      RECONFIRM: `/api/v1/reconfirm`,
      REGISTER: `/api/v1/register`,
      ROLE: `/api/v1/role`,
      WIDGETS: `/api/v1/widgets`
    },
    CONTENT: {
      DOCS: `/content/docs.json`,
      PRODUCTS: `/content/products.json`
    }
  }
}

export { Constants }
