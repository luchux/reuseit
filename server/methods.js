//Meteor methods for logic of the model UnusedObjects:
//request, forget, like, dislike, spam.

Meteor.methods({

  //object_id of the object requested
  request: function (object_id) {

    check(object_id, String);

    if (! this.userId)
      throw new Meteor.Error(403, "You must be logged in to Request");

    if (Meteor.isServer) {
      var now = new Date();
      WantedObjects.insert(
        { 'user': Meteor.userId(),
          'object_id': object_id,
          'date': now
        }
      );
    }
  },

  forget: function (object_id) {

    check(object_id, String);

    if (! this.userId)
      throw new Meteor.Error(403, "You must be logged in to Request");

    var unusedobject = Objects.findOne(object_id);
    if (! unusedobject)
      throw new Meteor.Error(404, "No such object");

    if (Meteor.isServer) {
      Objects.update(
        { _id: object_id },
        { $push: { forgets: this.userId } }
      );
    } else {
      // minimongo doesn't yet support $ in modifier. Lets try if same code works
      Objects.update(
        { _id: object_id },
        { $push: { forgets: this.userId } }
      );
    }
  },

  likeit: function(object_id) {

    check(object_id, String);

    //TODO: may be not, can be a good idea like it anyone.
    if(! this.userId)
      throw new Meteor.Error(403, "You must be logged in to like it");

    // This query succeeds only if the voters array doesn't contain the user
    query = {'_id': object_id, 'voters': {'$ne': this.userId}}

    // Update to add the user to the array and increment the number of votes.
    update  = {'$push': {'voters': this.userId}, '$inc': {likes: 1}}

    var unusedobject = Objects.findOne(object_id);
    if (! unusedobject)
      throw new Meteor.Error(404, "No such object");

    if (Meteor.isServer) {
      Objects.update(query,update);
    }
  },

  dislikeit: function(object_id) {

    check(object_id, String);

    //TODO: may be not, can be a good idea like it anyone.
    if(! this.userId)
      throw new Meteor.Error(403, "You must be logged in to dislike it");

    // This query succeeds only if the voters array doesn't contain the user
    query = {'_id': object_id, 'voters': {'$ne': this.userId}};

    // Update to add the user to the array and increment the number of votes.
    update  = {'$push': {'voters': this.userId}, '$inc': {dislikes: 1}}

    var unusedobject = Objects.findOne(object_id);
    if (! unusedobject)
      throw new Meteor.Error(404, "No such object");

    if (Meteor.isServer) {
      Objects.update(query,update);
    }
  }


});
