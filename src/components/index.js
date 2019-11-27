import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { TreeSelect } from 'antd';

const CLASS_NAME = 'react-ant-tree-select';
const RETURN_TEMPLATE = ({ item }, cb) => {
  const { value, label } = item;
  if (cb) {
    return (
      <TreeSelect.TreeNode
        key={value}
        value={value}
        title={label}
        children={cb()}
      />
    );
  } else {
    return <TreeSelect.TreeNode key={value} value={value} title={label} />;
  }
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func.isRequired
  };

  static defaultProps = {
    items: [],
    template: RETURN_TEMPLATE
  };

  get childView() {
    const { items, template } = this.props;
    const walk = (inItems) => {
      return inItems.map((item, index) => {
        const { children } = item;
        const cb = () => walk(children);
        const hasChild = children && children.length;
        const target = { item, index };
        const args = hasChild ? [target, cb] : [target];
        return template.apply(this, args);
      });
    };
    return walk(items);
  }

  render() {
    const { className, children, items, template, ...props } = this.props;
    console.log('childView::->', this.childView);
    return (
      <TreeSelect
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.childView}
      </TreeSelect>
    );
  }
}
