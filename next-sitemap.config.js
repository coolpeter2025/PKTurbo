/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.delightfulbeancart.com',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: ['/404', '/500', '/api/*'],
}
