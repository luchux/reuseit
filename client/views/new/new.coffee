Template.NewObject.events
  'click .img': (evt, template) ->
    evt.preventDefault()
    MeteorCamera.getPicture {width:350, height:200, quality:98}, (error, data) ->
      if error
        console.log 'error', error
      else
        Session.set 'cameraData', data

  'click .btn-reuseit': (evt, template) ->
    evt.preventDefault()
    img_data = Session.get('cameraData')
    name = template.$('#name').val()
    desc = template.$('#description').val()
    loca = template.$('#location').val()


    Meteor.call 'addObject', {name: name, descr: desc, location: loca, image: img_data }, (error, success)->
      if error
        console.log 'error', error
      else
        console.log 'object added correctly'

        #clean form and camera data
        template.$('form').find("input[type=text], textarea").val("");
        Session.set 'cameraData'


Template.NewObject.helpers
  cameraData: () ->
    Session.get 'cameraData'