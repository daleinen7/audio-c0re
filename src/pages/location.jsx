import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"


const Location = () => {
  const queryData = useStaticQuery(
    graphql`
    query MyQuery {
    allContentfulLocation {
      edges {
        node {
          city
          citySlug
          }   
        }
      }
    }`
  )

  return (
      <Layout>
        <div class="content">
          <h1>Locations</h1>
          <ul>
            {queryData.allContentfulLocation.edges.map((location) => {
              return (
                <li>
                    <Link to={`/location/${location.node.citySlug}/`}>   
                        {location.node.city}
                    </Link>
                </li>
              );
            })}
          </ul>
        </div>
    </Layout>
  );
};


export default Location