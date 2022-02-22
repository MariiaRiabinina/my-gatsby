import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../../components/layout';

const Category = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.name}>
      {data.allMdx.nodes
        .filter(node => data.mdx.slug.split('/')[0] === node.frontmatter.categoryName)
        .map(node => (
          <div key={node.id}>
            <h2>
              <Link key={node.id} to={`/products/${node.slug}`}>
                {node.frontmatter.name}
              </Link>
            </h2>
            <p> {node.frontmatter.description}</p>
          </div>
        ))}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        name
        date(formatString: "MMM D, YYYY")
      }
      body
      slug
    }
    allMdx(filter: { frontmatter: { type: { eq: "Product" } } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          name
          type
          categoryName
          description
        }
        id
        slug
      }
    }
  }
`;

export default Category;
