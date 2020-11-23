const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  // Yaml data support
  eleventyConfig.addDataExtension("yml", contents => yaml.safeLoad(contents));
  // Copy images folder
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "./",
      output: "./_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};