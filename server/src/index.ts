import {addMocksToSchema} from "@graphql-tools/mock";
import {makeExecutableSchema} from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema"; // import without .ts extension! Because in the end our code will be compiling in JavaScript file

const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
    }),

    Track: () => ({
        id: () => "track_01",
        title: () => "Astro Kitty, Space Explorer",
        author: () => {
            return {
                name: "Grumpy Cat",
                photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg"
            };
        },
        thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        length: () => 1210,
        modulesCount: () => 6,
    }),
}; // mock object with mocked data

async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({typeDefs}),
            mocks,
        }),
    }); // init the server
    const {url} = await startStandaloneServer(server); // start the initialised server
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
    `);
}

startApolloServer();