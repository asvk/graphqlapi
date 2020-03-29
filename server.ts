import {ApolloServer} from "apollo-server-express";
import * as express from "express";
import {MongoClient} from "mongodb";

async function main(): Promise<express.Express> {
    let mongoclient = await MongoClient.connect("mongodb://localhost:27017/doublicat_stat", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        poolSize: 150,
    });
    let mongo = mongoclient.db();

    const server = new ApolloServer({});
    const app = express();
    server.applyMiddleware({app})
    return app;
}

main().then(app => {
    return app.listen({port: 4000}, () => {
        console.log(`🚀  Server ready at http://localhost:4000/graphql`);
    });
})

