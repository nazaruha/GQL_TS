import gql from 'graphql-tag';

export const typeDefs = gql`
    """
        Schema definitions go here
    """
    
    # Here we tell the GraphQL server what we want to retrieve when we query it#
    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }
    
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        """
            Fields go here
        """
        
        id: ID!
        title: String!
        author: Author!
        "A URL of the image for the track's card"
        thumbnail: String
        length: Int
        modulesCount: Int
    }
    
    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;