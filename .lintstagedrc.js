module.exports = {
  '{apps,libs}/**/*.{ts,js,html,json,scss,css,md}': [
    'nx affected:lint --uncommitted --fix true',
  ],
  '*.{ts,js,html,json,scss,css,md,yaml,yml}': [
    'nx format:write --base=main --head=HEAD',
  ],
};
