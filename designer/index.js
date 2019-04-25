import React from 'react'
import ReactDOM from 'react-dom'
import { EventEmitter } from 'events'
import App from './App.js'

import 'normalize.css'


/**
 * Search a React Component by dom element wrapped
 * @param {Element} dom the DOM Element used to search
 */
// window.FindReact = function(dom) {
//     for (var key in dom) {
//         if (key.startsWith("__reactInternalInstance$")) {
//             // var compInternals = dom[key]._currentElement;
//             // console.dir(compInternals);
//             // var compWrapper = compInternals._owner;
//             // var comp = compWrapper._instance;
//             console.log(key)
//             console.dir(dom[key])
//             return dom[key];
//         }
//     }
//     return null;
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
