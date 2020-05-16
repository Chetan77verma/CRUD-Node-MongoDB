var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var url = "mongodb://localhost:27017/fruits";

mongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to " + url);
    // console.log(client);
    var db = client.db("fruits");
    var collection = db.collection("apples");
    var doc1 = { name: "red apples", color: "red" };
    var doc2 = { name: "green apples", color: "green" };

    /* insert */

    // collection.insert([doc1, doc2], (err, res) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("docs inserted :"+res.insertedCount);
    //     client.close();
    //   }
    // });

    /* retrieve */

    // collection.find().toArray((err, res) => {
    //   if (err) {
    //     console.log(err);
    //   } else if (res.length) {
    //     console.log(res);
    //     client.close();
    //   } else {
    //     console.log("No matches found!");
    //     client.close();
    //   }
    // });

    /* updated */

    // collection.update(
    //   { name: "red apples" },
    //   { $set: { color: "blue" } },
    //   (err, res) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log("Update Successful !!");
    //       client.close();
    //     }
    //   }
    // );

    /* remove */
    collection.deleteOne({ name: "red apples" }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res.result);
        client.close();
      }
    });
  }
});
