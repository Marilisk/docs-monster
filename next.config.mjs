/** @type {import('next').NextConfig} */
const nextConfig = {
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
