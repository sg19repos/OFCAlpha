import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import store from "./app/store";
import Store from "./common/Store/Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins"
  },
  fontSize: {
    font075: "0.75rem !important"
  },
  palette: {
    primary: {
      // main: "#165788",
      main: "#595a9b",
      contrastText: "#fff"
    }
  },
  multilineColor: {
    color: "red !important"
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/*<Provider store={store}>*/}
      <Provider store={Store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
