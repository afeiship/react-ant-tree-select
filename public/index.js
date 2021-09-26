import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntTreeSelect from '../src/main';
import { TreeSelect } from 'antd';
import typedJson from './assets/test2.json';
import nx from '@jswork/next';

import './assets/style.scss';

class App extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = {
      items2: typedJson,
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

  template = ({ item }, cb) => {
    const { value, label } = item;
    return (
      <TreeSelect.TreeNode
        key={value}
        value={value}
        title={label}
        disabled={nx.get(item, 'contentCreatable') === false}
        children={cb()}
      />
    );
  };

  render() {
    return (
      <ReactDemokit
        className="p-5 app-container"
        url="https://github.com/afeiship/react-ant-tree-select">
        <ReactAntTreeSelect
          placeholder="Plealse select..."
          treeNodeFilterProp="title"
          allowClear
          style={{ width: 400 }}
          showSearch
          treeDefaultExpandAll
          items={this.state.items2}
          onChange={(e) => {
            console.log('value:', e.target.value);
          }}
          template={this.template}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
