module.exports = {
  siteMetadata: {
    title: "AudioC0RE",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "JL30ysp4sIqQZSh2VPfl1KoRpDhlnTHIha6-jr5dh3s",
        spaceId: "JL30ysp4sIqQZSh2VPfl1KoRpDhlnTHIha6-jr5dh3s",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
