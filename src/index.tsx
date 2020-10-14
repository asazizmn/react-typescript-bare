/**
 * index.tsx
 * - a TypeScript XML file
 * - sets up rendering of our React app using `<App />`
 */


 // The important thing to call out here is that this does not use a module system or module loader
 // This concatenates the output of the files into one, so there is no support for import or export syntax
 // Instead, you must use triple-slash directives to reference other TypeScript files
 // ... and global dependencies must be included in the HTML page.
 //
 // Please have a look at `"compilerOptions": { "module": "None",` in tsconfig.json for settings

/// <reference path="App.tsx" />


ReactDOM.render(<App />, document.getElementById("root"));