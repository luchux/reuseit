Meteor.startup(function() {
 /*
  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }
  */
  if (Objects.find().count() === 0) {

      user_obj = Meteor.users.findOne()
      Objects.insert({
        "date_cyrcles ": "2013-06-16",
        "date_public": "2013-06-16",
        "descr": "TV Plasma 27\" Philips, works perfect, remote control" ,
        "image": "objects_images/1.jpg",
        "name": "TV Plasma",
        "user": user_obj._id,
        "likes":0,
        "dislikes":0,
        "spam":0,
        "voters":[],
        "requests":[],
        "forgets":[],
        "lat":-41.96683,
        "lng":-71.515509
      });

      Objects.insert({
        "date_cyrcles ": "2013-06-16",
        "date_public": "2013-06-16",
        "descr": "Bycicle. Frame from 80s, new wheels, works well",
        "image": "objects_images/2.jpg",
        "name": "80s Bike",
        "user": user_obj._id,
        "likes":0,
        "dislikes":0,
        "spam":0,
        "voters":[],
        "requests":[],
        "forgets":[],
        "lat":-37.812971,
        "lng":144.963729
      });

      Objects.insert({
        "date_cyrcles ": "2013-06-16",
        "date_public": "2013-06-16",
        "descr": "Good weights for training hard, 40ks set. ",
        "image": "objects_images/3.jpg",
        "name": "Weights!",
        "user": user_obj._id,
        "likes":0,
        "dislikes":0,
        "spam":0,
        "voters":[],
        "requests":[],
        "forgets":[],
        "lat":-37.812971,
        "lng":144.963729
      });

      Objects.insert({
        "date_cyrcles ": "2013-06-16",
        "date_public": "2013-06-16",
        "descr": "Table ideal for living, wood, excellent conditions.",
        "image": "objects_images/4.jpg",
        "name": "Small Table",
        "resource_uri": "/api/object/7/",
        "user": user_obj._id,
        "likes":0,
        "dislikes":0,
        "spam":0,
        "voters":[],
        "requests":[],
        "forgets":[],
        "lat":-37.812971,
        "lng":144.963729
      });

      Objects.insert({
        "date_cyrcles ": "2013-06-16",
        "date_public": "2013-06-16",
        "descr": "Backpack Montagne, 60 litters. Used for 4 months. Comfortable.",
        "image": "objects_images/5.jpg",
        "name": "Backpack 60L",
        "user": user_obj._id,
        "likes":0,
        "dislikes":0,
        "spam":0,
        "voters":[],
        "requests":[],
        "forgets":[],
        "lat":-37.812971,
        "lng":144.963729
      });

      Objects.insert({
        "date_cyrcles ": "2013-06-16",
        "date_public": "2013-06-16",
        "descr": "Climbing shoes La Sportiva, Cobra. size 40, good grip for edges.",
        "image": "objects_images/6.jpg",
        "name": "Climbing Shoes 40",
        "user": user_obj._id,
        "likes":0,
        "dislikes":0,
        "spam":0,
        "voters":[],
        "requests":[],
        "forgets":[],
        "lat":-37.812971,
        "lng":144.963729
      });
    }

});
