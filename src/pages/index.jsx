import React from "react";
import { graphql } from "gatsby";

export default function Home({data}) {
return <h1>{data.site.siteMetadata.title}</h1>;
}

export const query=graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
`