
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compilerForDesigner = webpack(require('./designer/webpack.config.js')());
const compilerForEditor = webpack(require('./editor/webpack.config.js')());
const express = require('express');
const app = express();


app.use('/assets', express.static("assets"));

app.use('/designer',
  middleware(compilerForDesigner, {
    // webpack-dev-middleware options
  })
);

app.use('/editor',
  middleware(compilerForEditor, {
    // webpack-dev-middleware options
  })
);

app.use("/", (req, res, next) => {
    res.send(`
        <html>
            <body>
                <h1><a href='/designer'>Designer Portal</a></h1>
                <h1><a href='/editor'>WYSIWYG Live Editor</a></h1>
            </body>
        </html>
    `)
    res.end()
})



app.listen(3000, () => console.log('Example app listening on port 3000!'));