/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
      MONGO_URI:  "mongodb+srv://stdb:st123@cluster0.nnibg.mongodb.net/nextSample_db?retryWrites=true&w=majority"
  }
}