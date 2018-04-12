import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api.json';
import { Card } from 'antd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        similar: {},
        results: [{
          Name: "efwefw",
          Type: "rijer"
        }],
      };
  }



  componentWillMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction&k=${api.key}`;
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(res => this.setState({results: res.Similar.Results}))


  }
  render() {
    const similars = this.state.results;
    debugger
    return (
      <div className="App">
        <header className="App-header">

        </header>

        <div className="body_app">
          {
            similars.map((result, i) => {
              return <Card title={result.Name} key={i}>
                <p>{result.Type}</p>
              </Card>
            })
          }
        </div>
      </div>
    );
  }
}
