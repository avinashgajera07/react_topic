const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.4";

(async () => {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("customer"); // Replace 'customer' with your database name

     // Data to insert
     const manyData = [
      { name: "Alice", age: 25, city: "Ahmedabad" },
      { name: "Bob", age: 30, city: "Surat" },
      { name: "Charlie", age: 35, city: "Gandhinagar" },
      { name: "Diana", age: 28, city: "Baroda" },
    ];

    //Join data 
    const joinData = [
      { "_id": 101, "name": "New York" },
      { "_id": 102, "name": "San Francisco" },
      { "_id": 103, "name": "Los Angeles" }
    ]

  //   // Perform operations

    //Insert data from database
    const collectionName = db.collection("data");
    const secoundCollectionName = db.collection("testcollection");
  //   const result = await collectionName.insertOne({ name: "John Doe", age: 30 });
  //   console.log("Inserted document:", result);

  //   //Multiple data insert
  //  const MultipleData =  await collectionName.insertMany(manyData);
  //  console.log("manyData", MultipleData);

  //   //Find data from database
  //   const docs = await db.collection("data").find({ age: { $gt: 20 } }).toArray();
  //   console.log(docs);

  //   //Update data from database
  //   await db.collection("data").updateOne({name: "John Doe"},{$set : {age: 50}});

  //   //Delete data from database
  //   await db.collection("data").deleteOne({name:"Alice"});

  //   //Filter criteria to delete data
  //   const filterData = {age :{$gt: 30}}; //  Delete document where age is greater than 30. 

  //   //Delete Multiple data
  //   const deleteMultiple = await collectionName.deleteMany(filterData);
  //   console.log("deleteMultiple", deleteMultiple);

  //   //Sort database data
  //   const cursor = collectionName.find({ age: { $gte: 25 }}).sort({ age: -1 }); // Sort by age in descending order
    
  //   const sortData = await cursor.toArray(); // convert to array
  //   console.log("sortData", sortData);

    //Drop Collection method 
    // Check if the collection exists
    // const collections = await db.listCollections({ name: secoundCollectionName }).toArray();
    // if (collections.length > 0) {
    //   // Drop the collection
    //   const result = await db.collection(secoundCollectionName).drop();
    //   console.log(`Collection "${secoundCollectionName}" dropped:`, result);
    // } else {
    //   console.log(`Collection "${secoundCollectionName}" does not exist.`);
    // }


    // //Limit method 
    // const cursor = collectionName.find({ age: { $gte: 25 }}).sort({ age: 1 }).limit(3); // Sort by age in descending order
    
    // const limitDocument = await cursor.toArray(); // convert to array
    // console.log("limitDocument", limitDocument);



     // Perform a $lookup to join Users and Cities collections
     const results = await db.collection("data").aggregate([
      {
        $lookup: {
          from: "Cities", // Name of the target collection
          localField: "city_id", // Field from the Users collection
          foreignField: "_id", // Field from the Cities collection
          as: "cityDetails" // Name of the resulting joined field
        }
      }
    ]).toArray();
    console.log("Joined Results:", results);

  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
  } finally {
    // Ensure connection is closed
    await client.close();
  }
})();
