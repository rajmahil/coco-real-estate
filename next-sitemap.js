const siteUrl = "https://www.cococreativeweb.com/";

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-0.xml`,
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};
