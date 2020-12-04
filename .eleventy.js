const yaml = require("js-yaml");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-toc-done-right");


module.exports = function(eleventyConfig) {
  // Yaml data support
  eleventyConfig.addDataExtension("yml", contents => yaml.safeLoad(contents));
  // Copy images folder
  eleventyConfig.addPassthroughCopy("images");

  // Markdown-It Config
  let markdownLib = markdownIt({
    html: true
  }).use(markdownItAnchor)
    .use(markdownItToc);

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "./",
      output: "./_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};