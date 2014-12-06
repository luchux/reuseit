Template.Chat.helpers
  chat: () ->
    console.log 'chat rendered, ', this
    console.log this.oid
    Chats.findOne({object_id: this.oid, from_user_id: Meteor.userId()})

  userName: () ->
    Meteor.users.findOne({_id: @user_id})?.profile?.name || "anonymouse"

  userPicture: () ->
    Meteor.users.findOne({_id: @user_id})?.profile?.picture || "http://placehold.it/50/55C1E7/fff&text=U"


Template.Chat.events
  'click #btn-chat': (evt, template) ->
    evt.preventDefault()
    message = template.$('#btn-input').val()

    Meteor.call 'sendChatMessage', @oid, message, (error, success) ->
      if error
        console.log 'error: ', error
      else
        console.log 'success sending message'


