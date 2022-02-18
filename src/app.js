import React from 'react';
import { useState, useReducer } from "react";
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from "../src/components/history/history";

const initialState = {
  data: null,
  requestParams: {},
  history: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA":
      return { ...state, data: { ...action.payload } };

    case "REQUESTPARAMS":
      return { ...state, requestParams: { ...action.payload } };

    case "HISTORY":
      return { ...state, history: { ...action.payload } };

    default:
      return state;
  }
};

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToHistory = (method, url, results) => {
    return {
      type: "ADDTOHISTORY",
      payload: {
        method,
        url,
        results,
        state,
      },
    };
  };

  const callApi = async (apiParams) => {
    const apiUrl = apiParams.url;
    const response = await axios.get(apiUrl);

    const action = {
      type: "APIDATA",
      payload: response,
    };
    dispatch(action);

    const data = {
      headers: response.headers,
      count: response.data.count,
      response: response.data.results,
    };
    setData(data);
    setRequestParams({ ...requestParams, ...apiParams });
  };

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <div id="requestMethod">Request Method: {requestParams.method}</div>
      <div id="url">URL: {requestParams.url}</div>
      <History handleHistory ={addToHistory}/>
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
};

export default App;