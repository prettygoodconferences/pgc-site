module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  // eleventyConfig.addPassthroughCopy("img");

  // If you use a subdirectory, it’ll copy using the same directory structure.
	eleventyConfig.addPassthroughCopy("assets");
	// eleventyConfig.addPassthroughCopy(".well-known");

  return {
    passthroughFileCopy: true
  };
};
