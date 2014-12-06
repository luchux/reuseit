Meteor.methods
    'addObject': (data) ->
      console.log 'here entering method'
      console.log data

      default_data =
        likes: 0
        dislikes: 0
        spam: 0
        voters: []
        requests: []
        forgets: []
        user: Meteor.userId()

      to_insert = _.extend(data, default_data)

      Objects.insert to_insert


