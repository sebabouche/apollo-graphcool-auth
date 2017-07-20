import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { ApolloProvider, ApolloClient, createNetworkInterface } from "react-apollo"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { reducer as formReducer } from "redux-form"

import "semantic-ui-css/semantic.min.css"

import { AUTH_SIGNIN } from "./state/modules/auth/actions"
import authReducer from "./state/modules/auth/reducer"
import RequireAuth from "./views/enhancers/RequireAuth"
import App from "./views/main/App"
import NoMatch from "./views/pages/NoMatch"
import HomePage from "./views/pages/HomePage"
import UserSignup from "./views/pages/UserSignup"
import UserLogin from "./views/pages/UserLogin"
import Dashboard from "./views/pages/Dashboard"

const token = localStorage.getItem("token")
const networkInterface = createNetworkInterface({ uri: "https://api.graph.cool/simple/v1/cj5cao53e41as0127khv191ib" })

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}  // Create the header object if needed.
    }

    // Get the authentication token from local storage if it exists
    if (localStorage.getItem("token")) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem("token")}`
    }
    next()
  },
}])

const client = new ApolloClient({
  networkInterface,
})

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
    form: formReducer,
    auth: authReducer,
  }),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

if (token) {
  // We need to update application state if the token exists
  store.dispatch({ type: AUTH_SIGNIN })
}

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="signup" component={UserSignup} />
        <Route path="signin" component={UserLogin} />
        <Route path="dashboard" component={RequireAuth(Dashboard)} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById("root"),
)
