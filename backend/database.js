const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.DATABASE_URI
console.log(url);
const client = new MongoClient(url);

// Database Name
const dbName = 'logistic';

async function startdb()  {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('deliveryman');
  const deliverymen = await collection.find().toArray()
  console.log(deliverymen)
  for (const singleDeliveryman of deliverymen) {
    if(!singleDeliveryman.note){
      await collection.updateOne({_id: singleDeliveryman._id}, {$set: {
        note: "Luiza luiza luiza puff ela aparece"
      }})
      console.log(` Nota adicionada à:${singleDeliveryman.name}`)
    }
    if(singleDeliveryman.name.includes("luiza")){
      // await collection.updateOne({_id: singleDeliveryman._id}, {$unset: {
      //   note: true
      // }})
      await collection.deleteOne({_id: singleDeliveryman._id})
    }
  }
  // await collection.insertOne({name:'luiza'})

  // the following code examples can be pasted here...

  return 'done.';
}


module.exports = {
  startdb: startdb,
  client
}