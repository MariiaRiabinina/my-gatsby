import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur dicta, et
        expedita facere iusto labore quaerat sapiente sed sunt. Aliquam asperiores hic laboriosam
        necessitatibus perspiciatis quaerat soluta vero voluptates.
      </p>
      <h2>{frontmatter.date}</h2>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
