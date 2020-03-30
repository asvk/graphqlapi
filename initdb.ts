import * as express from "express";
import {MongoClient, ObjectId} from "mongodb";
import uuid = require("uuid");

async function main() {
    let mongoclient = await MongoClient.connect("mongodb://localhost:27017/graphqlapi", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 150,
    });
    let mongo = mongoclient.db();

    let u1id =  new ObjectId().toHexString();
    let u1 = {"email": "first@test.com", "name": "first", id: u1id, _id: u1id}

    let u2id =  new ObjectId().toHexString();
    let u2 = {"email": "second@test.com", "name": "second", id: u2id, _id: u2id}

    await mongo.collection("users").insertOne(u1);
    await mongo.collection("users").insertOne(u2);
}

main().then(() => process.exit(0)).catch(e => {
    console.error(e);
    process.exit(1);
});
