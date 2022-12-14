/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */

const admin = require('firebase-admin')
const functions = require('firebase-functions')
const next = require('next')
const config = require('./next.config')

admin.initializeApp()

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this
  // IE: the absolute path from the root of the Cloud Function
  conf: config,
})
const handle = app.getRequestHandler()

const server = functions.https.onRequest((request, response) => {
  return app.prepare().then(() => handle(request, response))
})

exports.nextjs = { server }
