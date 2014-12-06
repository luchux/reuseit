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

  Chats.remove({})
  if (Objects.find().count() === 0) {

      user_obj = Meteor.users.findOne()
      Objects.insert({
        "date_cyrcles ": "2013-06-16",
        "date_public": "2013-06-16",
        "descr": "TV Plasma 27\" Philips, works perfect, remote control" ,
        "image": "http://lorempixel.com/400/200/sports/",
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
        "image": "http://lorempixel.com/400/200/sports/",
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
        "image": "http://lorempixel.com/400/200/sports/",
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
        "image": "http://lorempixel.com/400/200/sports/",
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
        "image": "http://lorempixel.com/400/200/sports/",
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
        "image": "http://lorempixel.com/400/200/sports/",
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

    if (Chats.find({}).count() === 0) {

        Chats.insert({
            object_id: Objects.findOne()._id,
            from_user_id: 'ZELyPEHpcu67ANmvu',
            messages: [
                {
                    user_id: 1,
                    message: 'Hey, Is the board still good and resists 30kg?',
                    date: Date.now()
                },

                {
                    user_id: 2,
                    message: 'Hey, yes it is. It resists till 50kg',
                    date: Date.now()
                },

                {
                    user_id: 1,
                    message: 'Excellente. Can pick it up at 4pm, is that good for you?',
                    date: Date.now()
                },

                {
                    user_id: 2,
                    message: 'Yes, cool. Will be here all afternoon. See ya later',
                    date: Date.now()
                },

                {
                    user_id: 1,
                    message: 'Great. See ya later then.',
                    date: Date.now()
                },

            ]

        })
    }

});

