import '../styles/globals.css';
import React from "react";
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
import {Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return( 
    <>
  
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  </>
  );
}
const makeStore = () =>store;

export default withRedux(makeStore)(MyApp)
