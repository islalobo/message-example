module.exports = Object.freeze({

  /**
   * ASSETS
   */
  LOGO: '../logo.png', // FIXME, deal with paths better

  /**
   * URLs
   */
  WEBSITE_URL: '/givemefacts',
  /**
   * *******************
   *    Endpoints
   * *******************
   */
  RANDOM_SERVICE: (process.env.NODE_ENV === 'production')
    ? 'https://uselessfacts.jsph.pl/random.json'
    : 'https://uselessfacts.jsph.pl/random.json',
});
