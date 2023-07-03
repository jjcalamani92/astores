import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
// https://astro.build/config
import rehypePrettyCode from "rehype-pretty-code";

// const prettyCodeOptions = {
//   theme: "solarized-dark",
//   onVisitLine(node) {
//     if (node.children.length === 0) {
//       node.children = [
//         {
//           type: "text",
//           value: " ",
//         },
//       ];
//     }
//   },
//   onVisitHighlightedLine(node) {
//     node.properties.className.push("highlighted");
//   },
//   onVisitHighlightedWord(node) {
//     node.properties.className = ["word"];
//   },
//   tokensMap: {},
// };

export default defineConfig({
  
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image(),
    mdx({
      extendMarkdownConfig: false,
    }),
  ],
  output: "server",
  adapter: vercel(),
});
