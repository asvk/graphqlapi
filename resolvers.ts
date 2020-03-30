
export const resolvers = {
    Mutation: {
        createUser: async (_, { user }, { dataSource}) => {
            console.log(user);
            return "OK"
        }
    },

    Query: {
        user: (_, { id }, { dataSources }) => dataSources.users.byId(id),
        users: (_, __, { dataSources }) => dataSources.users.list(__)
    },

    // CreateUserResponse: {
    //     success: true,
    //     message: "test",
    //     userResponse: ({ id }, {__} , {dataSources}) => dataSources.users.byId(id),
    // }
};
