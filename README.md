# react-ant-tree-select
> Antd tree select wrapper for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-tree-select
```

## properties
| Name      | Type   | Required | Default    | Description                           |
| --------- | ------ | -------- | ---------- | ------------------------------------- |
| className | string | false    | -          | The extended className for component. |
| items     | array  | false    | []         | Data source items(tree).              |
| template  | func   | false    | -          | The items template.                   |
| itemsKey  | union  | false    | 'children' | Items key(default: children).         |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-tree-select/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-tree-select/dist/style.scss";

  // customize your styles:
  $react-ant-tree-select-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntTreeSelect from '@jswork/react-ant-tree-select';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-tree-select/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-tree-select/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-tree-select
[version-url]: https://npmjs.org/package/@jswork/react-ant-tree-select

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-tree-select
[license-url]: https://github.com/afeiship/react-ant-tree-select/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-tree-select
[size-url]: https://github.com/afeiship/react-ant-tree-select/blob/master/dist/react-ant-tree-select.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-tree-select
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-tree-select
