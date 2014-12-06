Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

/*
Meteor.publish("objects", function() {
  return Objects.find({});
})
*/

/* objects are the objects, with the chat between the user logged in and the owner of the product */
Meteor.publishComposite("objects", function(loggedin_id) {
  return {
    find: function() {
      return Objects.find({});
    },

    children: [
      {
        find: function(object) {
          return Chats.find({ object_id: object._id, from_user_id: loggedin_id });
        }
      },

      {
        find: function(object) {
          ids = [loggedin_id, object.user_id]
          return Meteor.users.find({_id: { $in: ids}  })
        }
      }
    ]
  }
});

/*
Meteor.publish("chats", function() {
  return Chats.find({});
})
*/