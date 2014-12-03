Meteor.startup(function() {
  if(Meteor.isClient) {
    SEO.config({
      title: 'ReUseIt',
      meta: {
        'description': 'The community platform to recycle and share goods'
      },
      og: {
        'image': Meteor.absoluteUrl('share-image.png')
      },
      ignore: {
        meta: ['fragment', 'viewport', 'msapplication-TileColor', 'msapplication-TileImage', 'msapplication-config'],
        link: ['stylesheet', 'apple-touch-icon', 'rel', 'shortcut icon', 'icon']
      }
    });
  }
});
