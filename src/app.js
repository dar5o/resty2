import React from 'react';
import { useState, useEffect } from "react";
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null,
        requestParams: {},
      };
    }

    callApi = async (requestParams) => {
      const apiUrl = requestParams.url;
      const response = await axios.get(apiUrl);

      const data = {
        Headers: response.headers,
        count: response.data.count,
        Response: response.data.results
      };
      this.setState({data, requestParams});
    }

    render() {
      return (
        <React.Fragment>
          <Header />
          <Form handleApiCall={this.callApi}/>
          <div id='requestMethod'>Request Method: {this.state.requestParams.method}</div>
          <div id='url'>URL: {this.state.requestParams.url}</div>
          <Results data={this.state.data} />
          <Footer />
        </React.Fragment>
      );
    }
}

export default App;
