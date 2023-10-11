const pluginBookshop = require("@bookshop/eleventy-bookshop");

module.exports = function (eleventyConfig) {
  // Hot reloading from scss changes
  eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});

  // What gets passed through to the built site
  eleventyConfig.ignores.add("site/schemas");
  eleventyConfig.addPassthroughCopy("site/css");
  eleventyConfig.addPassthroughCopy("site/images");

  // Bookshop integration
  eleventyConfig.addPlugin(pluginBookshop({
    bookshopLocations: ["_component-library"],  
    pathPrefix: '', 
  }));

  return {
    dir: {
      input: "src",
      pages: "pages",
    },
  };
};