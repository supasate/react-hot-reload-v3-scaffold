## React hot reload v3 with react-router v4 and react-router-redux v5 ##

Does hot reload work? **YES**
Does time travel work? **YES**
Can child component access router state with connect? **YES**

Note:
`react-router-redux` is still not available on npm. So, we have to use directly from [timdorr's branch](https://github.com/timdorr/react-router-redux/tree/5.0.x) and build it in our `node_modules` folder.

**How to run**
1. `yarn`
2. `npm run prepare` This will install and build `react-router-redux` in `node_modules`
3. `npm run dev`
