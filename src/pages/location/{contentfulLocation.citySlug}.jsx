import React from 'react';
import Layout from '../../components/Layout';

import { graphql } from 'gatsby';

const LocationList = ({ data }) => {
  return (
    <Layout>
      <div class="content">
        <h1>{data.contentfulLocation.city}</h1>
        <p>This is a page.</p>
        </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulLocation(id: { eq: $id }) {
      citySlug
      city
    }
  }
`;

export default LocationList;
