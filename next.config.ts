import type { NextConfig } from "next";

// IMPORTANT: If your GitHub repo is named something other than "nufferton-demo",
// change basePath below to match — e.g. "/my-repo-name".
// If you deploy to a custom domain or username.github.io root, set basePath to "".
const repoName = "nufferton-demo";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // generates static HTML in /out folder for GitHub Pages
  basePath: isProd ? `/${repoName}` : "",
  images: {
    unoptimized: true, // GitHub Pages can't run Next.js image optimizer
  },
  trailingSlash: true, // friendlier with GitHub Pages routing
};

export default nextConfig;
