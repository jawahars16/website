module.exports = {
  siteMetadata: {
    title: `Jawahar - Full Stack Developer`,
    author: `Jawahar`,
    description: `Jawahar is a Software Programmer who is passionate about learning new languages and frameworks. He has years of experience in building enterprise grade applications using various technologies. He is specifically interested in practicing functional programming with modern language features. He usually shares his learning through blog and talks.`,
    siteUrl: `https://www.jawahar.tech`,
    social: {
      twitter: `jawahars_16`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    // {
    //   resolve: `gatsby-plugin-cookiehub-banner`,
    //   options: {
    //     cookieHubId: "4bc895cd",
    //     categories: [
    //       {
    //         categoryName: 'required',
    //       },
    //       {
    //         categoryName: 'analytics',
    //       },
    //       {
    //         categoryName: 'marketing',
    //       }
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: 6
      },
    },
    `gatsby-plugin-material-ui`,
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
        path: `${__dirname}/content/legacy/`,
        name: `legacy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/talks/`,
        name: `talks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `jawahar-tech`,
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
              maxWidth: 590,
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
          `gatsby-remark-reading-time`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jawahar - Full Stack Developer`,
        short_name: `Jawahar`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007ACB`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
