const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const Observation = require('./models/Observation');
const { Work } = require('./models').default;

const typeDefs = gql`
    type Work {
        id: Int!,
        repoName: String,
        link: String,
        contributors: [String],
        builtWith: [String],
        installation: String,
        usage: String,
        acknowledgements: [String]
    }

    type Query {
        getWorks: [Work]
    }

    type Mutation {
        addWork(id: Int!,
            repoName: String,
            link: String,
            contributors: [String],
            builtWith: [String],
            installation: String,
            usage: String,
            acknowledgements: [String]): Work
    }
`;

const resolvers = {
    Query: {
        getWorks: () => await Work.find({}).exec(),
    },
    Mutation: {
        addWork: async(_, args) => {
            try {
                let response = await Work.create(args);
                return response;
            } catch(e) {
                return e.message;
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();
server.applyMiddleware({ app });

url = process.env.DB_URL || 8080;

app.listen({ port: url }, () => {
    console.log(`Server ready at https://localhost:${url}${server.graphqlPath}`);
});