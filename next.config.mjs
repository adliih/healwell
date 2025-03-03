/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.tokopedia.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "develop.backendless.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
