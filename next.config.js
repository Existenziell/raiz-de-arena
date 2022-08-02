const withPWA = require("next-pwa")

const settings = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  }
}

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
