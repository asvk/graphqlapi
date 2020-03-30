import DataLoader = require("dataloader");
import {DataSource} from "apollo-datasource";
import {Collection} from "mongodb";

export const UsersApi = (collection:Collection): any => {
    const dataLoaders = {
        byId: new DataLoader(async (ids: string[]) => {
            const docs = await collection.find({id: {$in: ids}}).toArray();
            return docs;
        })
    }

    return {
        byId: async (id: string) => await dataLoaders.byId.load(id)
    }

}

// export class UsersApi {
//     private dataloaders: any;
//
//     constructor(collection: Collection) {
//         this.dataloaders = {
//             byId: new DataLoader(async (ids: string[]) => {
//                 const docs = await collection.find({id: {$in: ids}}).toArray();
//                 return docs;
//             }),
//         };
//     }
//
//     public async byId(id: string) {
//         return await this.dataloaders.byId.load(id);
//     }
// }
