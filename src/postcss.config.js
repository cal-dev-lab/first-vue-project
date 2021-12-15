const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.ts",
    "./src/**/*.jsx",
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...module(process.env.NODE.ENV === "production" ? [purgecss] : []),
  ],
};
