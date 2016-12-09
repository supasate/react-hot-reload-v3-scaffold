## React hot reload v3 with react-router v3 with redux

Does hot reload work? **YES**
Does time travel work? **NO** (no router state)
Can child component access router state with connect? **NO** (no router state)

Note: There is no router state in Redux store. Breaks time travel debugging when the route has been changed.
