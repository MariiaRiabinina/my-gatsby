module.exports = {
  siteMetadata: {
    title: `My Gatsby`,
    siteUrl: `https://mygatsbymain51870.gatsbyjs.io/`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
  ],
};
