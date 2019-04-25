const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      },
    ],
    [
        "@babel/preset-react",
        {
            "pragma": "dom", // default pragma is React.createElement
            "pragmaFrag": "DomFrag", // default is React.Fragment
            "throwIfNamespace": false // defaults to true
        }
    ]
  ]
  
  const plugins = [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from"
  ]
  
  module.exports = { presets, plugins }