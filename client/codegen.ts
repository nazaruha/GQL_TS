import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:4000", // GraphQL server's endpoint
    documents: ["src/**/*.tsx"], // what files to scan searching for the queries
    generates: { // where to output the code that it generates
        "./src/__generated__/": { // new folder will be created automatically
            preset: "client", // the preset indicator to the object.
            presetConfig: {
                gqlTagName: "gql" // to use gql instead 'graphgql' to write gql code
            }
        },
    },
    //ignoreNoDocuments: true // tells GraphQL Code Generator not to worry if it doesn't find any GQL operations in our frontend code. (to avoid error at the beginning)
};

export default config;