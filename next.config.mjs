/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  api: {
    bodyParser: false,
    externalResolver: true,
  },
  env: {
    NEXT_PUBLIC_SERVER_API: "https://brief-backend.vercel.app",
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://brief-front.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE",
          }, // Adjust methods as needed
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          }, // Adjust headers as needed
        ],
      },
    ];
  },
};

export default nextConfig;
