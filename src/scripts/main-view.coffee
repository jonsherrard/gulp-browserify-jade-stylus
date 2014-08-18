$ = require 'jQUery'
Backbone = require 'Backbone'
Backbone.$ = $

class MainView extends Backbone.View
  initialize: ->
    @testLog()
  testLog: ->
    console.log 'MainView'

module.exports = MainView
