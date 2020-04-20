import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { TreeSelect } from 'antd';
import nxTreeWalk from '@feizheng/next-tree-walk';

const CLASS_NAME = 'react-ant-tree-select';
const RETURN_TEMPLATE = ({ item }, cb) => {
  const { value, label } = item;
  return (
    <TreeSelect.TreeNode
      key={value}
      value={value}
      title={label}
      children={cb()}
    />
  );
};

export default class ReactAntTreeSelect extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Data source items(tree).
     */
    items: PropTypes.array,
    /**
     * The items template.
     */
    template: PropTypes.func.isRequired,
    /**
     * Items key(default: children).
     */
    itemsKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ])
  };

  static defaultProps = {
    items: [],
    template: RETURN_TEMPLATE,
    itemsKey: 'children'
  };

  get childView() {
    const { items, template, itemsKey } = this.props;
    return nxTreeWalk(items, { template, itemsKey });
  }

  render() {
    const {
      className,
      children,
      items,
      itemsKey,
      template,
      ...props
    } = this.props;
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
