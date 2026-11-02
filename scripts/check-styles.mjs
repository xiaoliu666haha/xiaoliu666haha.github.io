import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";

// Use Tailwind's PostCSS instance without adding another project dependency.
const require = createRequire(import.meta.resolve("tailwindcss"));
const postcss = require("postcss");
const from = fileURLToPath(new URL("../src/styles/theme.css", import.meta.url));

// A fresh process catches cross-file @apply dependencies even with a warm Vite cache.
await postcss([
    postcssImport(),
    require("tailwindcss/nesting"),
    tailwindcss(),
]).process(await readFile(from, "utf8"), { from });
console.log("Theme stylesheet compilation passed.");
