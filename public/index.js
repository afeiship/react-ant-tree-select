import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntTreeSelect from '../src/main';
import { TreeSelect } from 'antd';

import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      items: [
        {
          label: '0-0',
          value: '0-0',
          children: [
            {
              label: '0-0-0',
              value: '0-0-0',
              children: [
                { label: '0-0-0-0', value: '0-0-0-0' },
                { label: '0-0-0-1', value: '0-0-0-1' },
                { label: '0-0-0-2', value: '0-0-0-2' }
              ]
            },
            {
              label: '0-0-1',
              value: '0-0-1',
              children: [
                { label: '0-0-1-0', value: '0-0-1-0' },
                { label: '0-0-1-1', value: '0-0-1-1' },
                { label: '0-0-1-2', value: '0-0-1-2' }
              ]
            },
            {
              label: '0-0-2',
              value: '0-0-2'
            }
          ]
        },
        {
          label: '0-1',
          value: '0-1',
          children: [
            { label: '0-1-0-0', value: '0-1-0-0' },
            { label: '0-1-0-1', value: '0-1-0-1' },
            { label: '0-1-0-2', value: '0-1-0-2' }
          ]
        },
        {
          label: '0-2',
          value: '0-2'
        }
      ]
    };
  }

  template = (inData) => {
    if (inData && inData.length) {
      return inData.map((item) => {
        const { label, value, ...itemProps } = item;
        if (item.children) {
          return (
            <TreeSelect.TreeNode
              title={label}
              key={value}
              value={value}
              {...itemProps}>
              {this.template(item.children)}
            </TreeSelect.TreeNode>
          );
        }
        return <TreeSelect.TreeNode title={label} key={value} value={value} />;
      });
    }
    return null;
  };

  render() {
    return (
      <ReactDemokit
        className="p-5 app-container"
        url="https://github.com/afeiship/react-ant-tree-select">
        <ReactAntTreeSelect
          placeholder="Plealse select..."
          style={{ width: 200 }}
          items={this.state.items}
          onChange={(e) => {
            console.log('value:', e.target.value);
          }}
          // template={this.template}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
