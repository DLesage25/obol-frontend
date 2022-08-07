/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['img.pokemondb.net'],
    },
};

module.exports = nextConfig;
