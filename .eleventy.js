const format = require('date-fns/format')

module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy  static to _site/static
    eleventyConfig.addPassthroughCopy("static");

    // add `date` filter
    eleventyConfig.addFilter('date', function (date, dateFormat) {
      return format(date, dateFormat)
    })

  };