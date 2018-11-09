'use strict'

const Constants = require('../constants'),
  ACCOUNT_STATUS = Constants.ACCOUNT_STATUS,
  STATUS_MESSAGES = Constants.ACCOUNT_STATUS_MESSAGES

const QueryHandler = require('../apis/mysql/handlers').QueryHandler

const AccountMgr = async (email, cache) => {

  console.log('EXECUTE ACCOUNT MANAGER...')

  let status = '',
    message = '',
    isInCache = !cache ? false : true,
    account,
    _account

  if (!cache) {

    console.log('...NO CACHE')

    account = await QueryHandler('../apis/mysql/queries/select/account_by_email.sql', [email])

    _account = account[0]

  } else {

    console.log('...CACHE')

    _account = cache

  }

  console.log('...ACCOUNT', _account)

  if (!_account) {

    status = ACCOUNT_STATUS.NON_EXISTENT
    message = STATUS_MESSAGES.NON_EXISTENT

    return { status: status, message: message }
  }

  else {

    const isConfirmed = !!_account.is_confirmed,
    isInSession = !!_account.is_in_session

    if (isConfirmed === true && isInSession === true && isInCache === true) {

      status = ACCOUNT_STATUS.LOGGED_IN
      message = STATUS_MESSAGES.LOGGED_IN

    }

    else if (isConfirmed === true && isInSession === false && isInCache === false) {

      status = ACCOUNT_STATUS.LOGGED_OUT
      message = STATUS_MESSAGES.LOGGED_OUT

    }

    else if (isConfirmed === true && isInSession === false && isInCache === true) {

      status = ACCOUNT_STATUS.LOGGING_IN
      message = STATUS_MESSAGES.LOGGING_IN

    }

    else if (isConfirmed === true && isInSession === true && isInCache === false) {

      status = ACCOUNT_STATUS.SESSION_TIMEOUT
      message = STATUS_MESSAGES.SESSION_TIMEOUT

    }

    else if (isConfirmed === false && isInSession === false && isInCache === true) {

      status = ACCOUNT_STATUS.UNCONFIRMED
      message = STATUS_MESSAGES.UNCONFIRMED

    }

    _account.status = status

    return { account: _account, status: status, message: message }

  }

}

module.exports = AccountMgr
