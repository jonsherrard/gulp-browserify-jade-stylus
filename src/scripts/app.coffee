$ = require 'jQuery'

APP =
  v: {}
  c: {}
  m: {}

APP.v.MainView = require './main-view'

window.APP = APP

$(document).ready ->
  new APP.v.MainView
