# react-ant-tree-select
> Antd tree select wrapper for react.

## installation
```shell
npm install -S @feizheng/react-ant-tree-select
```
## properties
| property  | type            | default    | description            |
| --------- | --------------- | ---------- | ---------------------- |
| className | String          | -          | The extended className |
| items     | Array           | []         | The list data          |
| template  | Function        | -          | The list template      |
| itemsKey  | String/Function | 'children' | The list children key  |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-tree-select/dist/style.scss";

  // customize your styles:
  $react-ant-tree-select-options: ()
  ```
2. import js
  ```jsx
  import ReactAntTreeSelect from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
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
        <div className="app-container">
          <ReactAntTreeSelect
            style={{ width: 200 }}
            items={this.state.items}
            template={this.template}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-tree-select/
