'use strict'

const Constants = require('../constants'),
  ACCOUNT_STATUS = Constants.ACCOUNT_STATUS,
  STATUS_MESSAGES = Constants.ACCOUNT_STATUS_MESSAGES

const QueryHandler = require('../apis/mysql/handlers').QueryHandler,
  getAccountByEmail = async (email) => {

    const account = await QueryHandler('../apis/mysql/queries/select/account_by_email.sql', [email])

    return account[0]

  }

const AccountMgr = async (email, cache) => {

  console.log('EXECUTE ACCOUNT MANAGER...')

  let status = '',
    message = '',
    isInCache = !cache ? false : true,
    account

  if (!cache) {

    console.log('...NO CACHE')

    account = await getAccountByEmail(email)

  } else {

    console.log('...CACHE')

    account = cache

  }

  console.log('...ACCOUNT', account)

  if (!account) {

    status = ACCOUNT_STATUS.NON_EXISTENT
    message = STATUS_MESSAGES.NON_EXISTENT

    return { status: status, message: message }
  }

  else {

    const isConfirmed = !!account.is_confirmed,
    isInSession = !!account.is_in_session

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

      console.log('SYNC IS_IN_SESSION WITH SESSION TIMEOUT')

      await QueryHandler('../apis/mysql/queries/update/account_logout.sql', [email])
      account = await getAccountByEmail(email)
    }

    else if (isConfirmed === false && isInSession === false && isInCache === true) {
      status = ACCOUNT_STATUS.UNCONFIRMED
      message = STATUS_MESSAGES.UNCONFIRMED

    }

    account.status = status

    return { account: account, status: status, message: message }

  }

}

module.exports = AccountMgr
