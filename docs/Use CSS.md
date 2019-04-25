# How to use Css 

1. Use external css files

1.1 Embed external css files' content into style tag
    Use css-loader and style-loader will process the `import "some.css"` file content and export
    its content to a `<style>{css file content}</style>` tag.

2.2 Use URL to include css file
    Use css-loader and style-loader/url to generate a separate css file and included in header `<link href="url-to.css">`


2. Use styled component

