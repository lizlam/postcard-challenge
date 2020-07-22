const tailwindcss = require("tailwindcss");

module.exports = {
  plugins:
    [tailwindcss("./tailwind.config.js"),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.svelte',
        './src/template.html'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
    ],
}
