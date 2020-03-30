import {Db} from "mongodb";
import {UsersApi} from "./UsersApi";

export const Repositories = (mongo: Db) => {
    return {
        users: UsersApi(mongo.collection("users"))
    }
}
