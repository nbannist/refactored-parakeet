# refactored-parakeet

Just a test repo for trying out pulling in react components from a repo with git.

## Installation

From the root of the project, run the following: 

`$ yarn`
 
This will install all dependencies.

## Scripts

### yarn run test

This script runs the tests for the components. This way, you are writing tests for the components in one place.

### yarn run build

This is to build all the components into one file transpiled into ES5.
    
## Usage

To use the components in this repo, you do not need to download this project. 
You simply need to add the components in your project via [yarn](https://yarnpkg.com).

    NOTE: All of the commands below are executed in the root of your project where 'package.json' is located.

For including the current release use:
`$ yarn add yarn add https://github.com/nbannist/refactored-parakeet.git`

To use the components in the project, import as follows in the file where the component is needed:
```javascript
import React  from 'react';
import DummyComponent from 'refactored-parakeet';

class MyApp extends React.PureComponent {
    render() {
        return (
          <div className="App">
            <DummyComponent />
          </div>
        );
    }
}

export default MyApp;
```

## Project History

 * v0.0.1 - Initial functional commit
 * v0.0.2 - Just changing version to test getting older code with tags; renamed project in package.json to match github project name

## References

 * [Building a React component as an NPM module](https://medium.com/recraftstudio/building-a-react-component-as-a-npm-module-18308d4ccde9)
 * [Sharing React components between separate projects, self hosting with git, installing with yarn/npm](https://medium.com/@Powderham/sharing-react-components-between-separate-projects-self-hosting-with-git-installing-with-yarn-npm-d3275b64239c)
 * [Specifics of npm's package.json handling: GitHub URLs](https://docs.npmjs.com/files/package.json#github-urls)
 * [yarn add: Adding dependencies](https://yarnpkg.com/en/docs/cli/add#toc-adding-dependencies)
 
 