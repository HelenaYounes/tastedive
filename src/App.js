import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api.json';
import { Card, Input } from 'antd';

const Search = Input.Search;

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

  getRequest = (value) => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url =`https://tastedive.com/api/similar?k=${api.key}&q=`;
    url += value;
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(res => this.setState({results: res.Similar.Results}))


  }

  render() {
    const similars = this.state.results;
    return (
      <div className="App">
        <header className="App-header">
          <Search
            placeholder="input search text"
            onSearch={value => this.getRequest(value)}
            enterButton
          />
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
