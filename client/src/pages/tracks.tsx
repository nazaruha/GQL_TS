import React from "react";
import { Layout } from "../components";
import {gql} from "../__generated__/";

// GQL constants are ALL_CAPS
const TRACKS = gql(`
  # Query ges here
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
