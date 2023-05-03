module.exports = {
  extends: 'airbnb-base',

  env: {
    browser: 'true',
    es2021: 'true',
    node: 'true',
  },

  parserOptions: {
    sourceType: 'script',
  },

  rules: {
    'import/extensions': 0,
  },
};
