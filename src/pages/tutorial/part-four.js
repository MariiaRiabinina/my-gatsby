import React from 'react';
import Layout from '../../components/layout';

export default ({ location }) => {
  console.log('location', location);
  return (
    <Layout pageTitle="Tutorial: part-four">
      <p>Welcome to tutorial/part-four</p>
    </Layout>
  );
};
