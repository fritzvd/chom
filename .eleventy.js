module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy  static to _site/static
    eleventyConfig.addPassthroughCopy("static");

  };