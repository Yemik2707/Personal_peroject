import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { HashRouter, BrowserRouter } from "react-router-dom"
import store from "./redux/store"
import Navbar from "./Components/header/Navbar"

const Router = 
process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
