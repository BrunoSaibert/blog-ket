module.exports = {
  siteMetadata: {
    title: `Kethlyn Saibert`,
    author: {
      name: `Kethlyn Saibert`,
      summary: `Apaixonada por comunicação, amo ler e escrever, sou apreciadora do cinema, música e cultura pop. Adoro fotografia, sou protetora dos animais (e também louca dos gatos rs), movida pelos sonhos e pela cafeína.`,
    },
    description: `Blog de Kethlyn Saibert, acadêmica de Jornalismo`,
    siteUrl: `https://blog-ket.netlify.app/`,
    social: {
      twitter: `kettavss`,
      instagram: `kettavs`,
      linkedin: `kethlyn-tavares-saibert`,
      whatsapp: `5541987714545`,
      email: `kethlyntavares96@gmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `152741486`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kethlyn Saibert`,
        short_name: `KethlynSaibert`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b60627`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
