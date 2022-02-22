import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const ProductsPage = ({ data }) => {
  return (
    <Layout pageTitle="Our products">
      {data.allMdx.nodes.map(node => (
        <h2 key={node.id}>
          <Link to={`/products/${node.slug}`}>{node.frontmatter.name}</Link>
        </h2>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "Category" } } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          name
          type
        }
        id
        slug
      }
    }
  }
`;

export default ProductsPage;
