import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
    includePaths: [path.join(__dirname, "/src/styles")],
    prependData: '@use "./base.scss";',
  },
};

export default nextConfig;
