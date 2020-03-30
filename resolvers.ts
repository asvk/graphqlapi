
export const resolvers = {
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
