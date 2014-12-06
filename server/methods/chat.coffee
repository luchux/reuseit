Meteor.methods
  'sendChatMessage': (object_id, message) ->
    user_id = Meteor.userId()
    if not user_id
        throw Meteor.Error "not logged in", "calling sendChatMessage requires user logged in"

    Chats.upsert { object_id: object_id, from_user_id: user_id},
        {$push:
            messages:
              message: message
              date: Date.now()
              user_id: user_id
        }


