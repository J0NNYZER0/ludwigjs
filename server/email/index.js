'use strict'

const Bounce = require('bounce'),
  Fs = require('fs'),
	Path = require('path'),
  Aws = require('aws-sdk')

const ParseEmail = (firstName, uri, shortId, buttonText) => new Promise ((resolve) => {

  let parsed = Fs.readFileSync(Path.join(__dirname, './templates/index.html'), 'utf8')
  parsed = parsed.replace(/%%FIRST_NAME%%/, firstName)
  parsed = parsed.replace(/%%URL%%/, uri)
	parsed = parsed.replace(/%%TOKEN%%/, shortId)
  parsed = parsed.replace(/%%BUTTON_TEXT%%/, buttonText)

	resolve(parsed)
})

const SesMailOptions = (subject, firstName, uri, email, shortId, parsedEmail) => new Promise(resolve => resolve({
  Destination: {
   ToAddresses: [
      email
   ]
  },
  Message: {
   Body: {
    Html: {
     Charset: 'UTF-8',
     Data: parsedEmail
    },
    Text: {
     Charset: 'UTF-8',
     Data: `Hi ${firstName} Click or copy/paste this link to log in once - ${uri} ${shortId}. It can only be used once. It expires in 10 minutes.`
    }
   },
   Subject: {
    Charset: 'UTF-8',
    Data: subject
   }
  },
  Source: process.env.LOGIN_EMAIL,
 }))

const SendEmail = (mailOptions) => new Promise((resolve, reject) => {
  const Ses = new Aws.SES()
  Ses.sendEmail(mailOptions, (err, data) => {
    if (err) reject(err, err.stack) // an error occurred
    else resolve(data) // successful response
  })
})

const Email = async (subject, firstName, uri, email, shortId, buttonText) => {
  try {
    const parsedEmail = await ParseEmail(firstName, uri, shortId, buttonText),
      mailOptions = await SesMailOptions(subject, firstName, uri, email, shortId, parsedEmail),
      sentEmail = await SendEmail(mailOptions)

    return sentEmail

  } catch(err) {

    Bounce.rethrow(err, 'system')
  }
}

module.exports = {
	Email: Email
}
