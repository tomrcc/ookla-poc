const pluginBookshop = require("@bookshop/eleventy-bookshop");

module.exports = function (eleventyConfig) {
  // Hot reloading from scss changes
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

  // What gets passed through to the built site
  eleventyConfig.ignores.add("src/schemas");
  eleventyConfig.addPassthroughCopy("src/images");

  // Bookshop integration
  eleventyConfig.addPlugin(pluginBookshop({
    bookshopLocations: ["component-library"],  
    pathPrefix: '', 
  }));

  return {
    dir: {
      input: "src",
      pages: "pages",
    },
  };
};