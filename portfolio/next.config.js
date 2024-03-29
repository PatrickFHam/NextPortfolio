/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path');

const sassOptions = {
  includePaths: [path.join(__dirname, 'styles')],
};

module.exports = nextConfig, sassOptions;
