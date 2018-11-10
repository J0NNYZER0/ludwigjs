
const Constants = {
  HOST: (process.env.NODE_ENV === `production`) ? `http://www.ludwigjs.com/` : `http://0.0.0.0:3000/`,
  ACCOUNT_STATUS: {                       //  is_confirmed | is_in_session | is_disabled | cache
                                          //-----------------------------------------
    DISABLED: `DISABLED`,                 //    both     |    both       |    true       |    both
    LOGGED_IN: `LOGGED_IN`,               //    true     |    true       |    false      |    true
    LOGGED_OUT: `LOGGED_OUT`,             //    true     |    false      |    false      |    false
    LOGGING_IN: `LOGGING_IN`,             //    true     |    false      |    false      |    true
    NON_EXISTENT: `NON_EXISTENT`,         //    false    |    false      |    false      |    false
    SESSION_TIMEOUT: `SESSION_TIMEOUT`,   //    true     |    true       |    false      |    false
    UNCONFIRMED: `UNCONFIRMED`            //    false    |    false      |    false      |    true
  },
  ACCOUNT_STATUS_MESSAGES: {
    DISABLED: `Account is disabled.`,
    LOGGED_IN: `Account is logged in.`,
    LOGGED_OUT: `Account is logged out.`,
    LOGGING_IN: `Account login in progress.`,
    NON_EXISTENT: `Account does not exist.`,
    SESSION_TIMEOUT: `Your account session has timed out.`,
    UNCONFIRMED: `Account confirmation is pending.`
  }
}

module.exports = Constants

//LOGIC
/*

USER LOGIN

Behavior: User enters email and clicks login

  I. Login Handler Executes
    1. Execute accountStatus - Expecting account status to be true | false | NULL
    2. IF NON_EXISTENT
      A. Send response with:
        - { status: NON_EXISTENT, message: 'Account does not exist' } to UI
      B. UI renders message with link to register
    3. IF LOGGED_IN
      A. IF CACHE is NULL
        a. Send reponse with:
          - { status: LOGGED_OUT, message: 'Your session timed out. Please re-initiate login' }
      B. UI renders message prompting user to sign in again
    4. IF UNCONFIRMED
      A. Send response with:
        - { status: UNCONFIRMED, message: 'Account confirmation is pending. Please reconfirm.' } to UI
      B. UI renders message with link to reconfirm
    5. IF LOGGED_OUT
      A. Create CACHE
      B. Send email
      C. Send response with:
        - { status: LOGGING_IN, message: 'An email has been sent. Open it and click the link to log in.' } to UI
        - UI redirects to confirmation page and renders message

IF LOGGED_OUT THEN LOGGING_IN

IF LOGGING_IN THEN LOGGED_IN


*/
