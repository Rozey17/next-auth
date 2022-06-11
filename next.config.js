/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    COGNITO_ISSUER: process.env.COGNITO_ISSUER,
    SECRET: process.env.SECRET,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "images4.alphacoders.com",
      "images7.alphacoders.com",
    ],
  },
};
