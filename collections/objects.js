Objects = new Mongo.Collection('objects');

Objects.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
  doc.userId = userId;
});
