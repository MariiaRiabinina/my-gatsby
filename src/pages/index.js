import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="morning-tea"
        src="https://i.ibb.co/7tx3rDZ/kelsey-curtis-1570052-unsplash.jpg"
      />
      <StaticImage alt="photo" src="../images/photo.jpg" />
    </Layout>
  );
};

export default IndexPage;
