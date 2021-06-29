import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import store from "./redux/store"
import Navbar from "./Components/header/Navbar"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Navbar />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
