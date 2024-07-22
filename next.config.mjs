/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // rewrites: async () => 

    /* webpack: {

    } */

    experimental: {
        optimizePackageImports: [
            '@material-ui/core'
        ]
    }
};

export default nextConfig;
