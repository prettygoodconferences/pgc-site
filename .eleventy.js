module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  // eleventyConfig.addPassthroughCopy("img");

  // If you use a subdirectory, it’ll copy using the same directory structure.
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("ROUTER");
	// eleventyConfig.addPassthroughCopy(".well-known");

	eleventyConfig.addFilter("toSpeakerNamesList", (ids, speakers) => {
		return ids
			.map(id => speakers[id] || '')
			.map(speaker => speaker.name)
			.join(", ");
	});

  return {
    passthroughFileCopy: true
  };
};
