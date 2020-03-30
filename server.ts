import {ApolloServer} from "apollo-server-express";
import * as express from "express";
import {MongoClient} from "mongodb";
import "graphql-import-node";
import * as typeDefs from "./schema.graphql";
import {resolvers} from "./resolvers";
import {UsersApi} from "./repositories/UsersApi";
import {Repositories} from "./repositories";

async function main(): Promise<express.Express> {
    let mongoclient = await MongoClient.connect("mongodb://localhost:27017/graphqlapi", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 150,
    });
    let mongo = mongoclient.db();

    // repositories
    // users: new UsersApi(mongo.collection("users"))
    // users: UsersApi(mongo.collection("users"))

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => ({
            ...Repositories(mongo)
            // users: new UsersApi(mongo.collection("users"))
        })
    });
    const app = express();
    server.applyMiddleware({app})
    return app;
}

main().then(app => {
    return app.listen({port: 4000}, () => {
        console.log(`🚀  Server ready at http://localhost:4000/graphql`);
    });
})

