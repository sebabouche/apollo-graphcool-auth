import React from "react"
import ReactDOM from "react-dom"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { ApolloProvider, ApolloClient, createNetworkInterface } from "react-apollo"
import { Router } from "react-router-dom"
import { reducer as formReducer } from "redux-form"

import "semantic-ui-css/semantic.min.css"
import history from "./utils/history"
import { AUTH_SIGNIN } from "./state/modules/auth/actions"
import authReducer from "./state/modules/auth/reducer"
import App from "./views/main/App"

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
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root"),
)
