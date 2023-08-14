import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

// https://astro.build/config
export default defineConfig({
	site: "https://cr3.mov/",
	markdown: {
		remarkPlugins: [
			remarkUnwrapImages,
			remarkMath
		],
		rehypePlugins: [
			rehypeMathjax
		],
		shikiConfig: {
			theme: "slack-dark",
			wrap: true,
		},
	},
	experimental: {
		assets: true,
	},
	image: {
		// https://docs.astro.build/en/guides/assets/#using-sharp
		service: sharpImageService(),
	},
	integrations: [
		mdx({}),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		prefetch(),
	],
	compressHTML: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
