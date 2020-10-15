module.exports = (config) => {
    config.addPassthroughCopy('src/css')
    config.addPassthroughCopy('src/img')
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'dist',
        },
    }
}
