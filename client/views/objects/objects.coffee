Template.ObjectList.helpers
  objects: () ->
    Objects.find().fetch()

Template.Object.helpers
  chats: () ->
    Chats.findOne({from_user_id: Meteor.userId(), object_id: this._id})

Template.Object.rendered = ->
  latlon = new google.maps.LatLng(@data.lat, @data.lng)
  mapOptions =
    center: latlon
    zoom: 15
    disableDefaultUI: true
    zoomControl: true
    mapTypeId: google.maps.MapTypeId.ROADMAP

  @el = @find(".map")
  map = new google.maps.Map(@el, mapOptions)
  map.setCenter latlon
  marker = new google.maps.Marker(
    position: latlon
    title: @data.address
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
  )
  marker.setMap map

  #Setting the profile//
  console.log this
  return


#Catching Request/Forget events on the template
#This makes use of the Meteor.call methods defined in server.js
Template.Object.events

  #request button
  "click .btn-request": ->
    console.log "User want to request: "  if typeof console isnt "undefined"
    console.log this

    #var user = Meteor.userId()
    Meteor.call "request", @_id
    false


  #forget button
  "click .btn-forget": ->
    console.log Meteor.userId() + " wants to forget: "  if typeof console isnt "undefined"
    console.log @_id
    Meteor.call "forget", @_id
    false


  #get profile button
  "click .btn-profile": (evt, template)->
    console.log "User want profile: "  if typeof console isnt "undefined"
    template.$(".thumbnail .flip-container").toggleClass("flip")


  #get directions button
  "click .btn-direction": (evt, template) ->
    $(template.el).toggle()
    console.log "User want directions: "  if typeof console isnt "undefined"
    console.log @_id
    console.log @el


  #share button
  "click .btn-share": ->
    console.log "User want to share: "  if typeof console isnt "undefined"
    console.log @_id


  #like it button
  "click .btn-likeit": ->
    Meteor.call "likeit", @_id  if typeof console isnt "undefined"


  #dislike it button
  "click .btn-dislikeit": ->
    Meteor.call "dislikeit", @_id  if typeof console isnt "undefined"


  #report spam button
  "click .btn-report": ->
    console.log "User report spam: "  if typeof console isnt "undefined"
    console.log @_id

  "click .flip-back": (evt, template) ->
    template.$(".thumbnail .flip-container").toggleClass("flip")

