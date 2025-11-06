const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "config.env" });

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function getCollectionNames() {
  try {
    await client.connect();
    const collections = await client.db("Trainingdb").collections();
    collections.forEach((collection) => {
      console.log(collection.collectionName);
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function getAllCustomers() {
  try {
    await client.connect();
    const customers = client.db("Trainingdb").collection("Customers");
    const results = await customers.find({}).toArray();

    console.log("Customer Records:");
    console.log(results);
  } catch (e) {
    console.error("Error fetching customers:", e);
  } finally {
    await client.close();
  }
}

getAllCustomers();
