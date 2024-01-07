import React from "react";
import { Layout } from "../components";
import {gql} from "../__generated__/";
import {useQuery} from "@apollo/client";

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
  const {loading, error, data} = useQuery(TRACKS); // get data from useQuery
  if (loading) return "Loading..."; // As long as loading is true (indicating the query is still in flight), the component will just render a Loading... message.
  if (error) return `Error! ${error.message}`; // if there was an error after loading (loading == false)

  return <Layout grid>{JSON.stringify(data)}</Layout>;
};

export default Tracks;
