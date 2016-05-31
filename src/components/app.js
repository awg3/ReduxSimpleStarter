import React from 'react';
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
