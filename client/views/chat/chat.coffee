Template.Chat.helpers
  chat: () ->
    console.log 'chat rendered, ', this
    console.log this.oid
    Chats.find({object_id: this.oid, from_user_id: Meteor.userId()})

