Template.registerHelper('siteTitle', function(string) {
  return SEO.settings.title;
});

Template.registerHelper('summarize', function(string) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(140);
});


Template.registerHelper('momentFrom', function (date) {
    return moment(date).from(Date.now())
})