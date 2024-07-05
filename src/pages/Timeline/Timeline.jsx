import React, { Component } from 'react';
import Graph from './components/Graph/Graph';
import Select from './components/Select/Select';

export class Timeline extends Component {
  render() {
    return (
      <div>
        <Select />
        <Graph />
      </div>
    );
  }
}

export default Timeline;
