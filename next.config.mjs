/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dogsapi.origamid.dev",
        pathname: "/wp-content/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
