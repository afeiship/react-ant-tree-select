import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { TreeSelect } from 'antd';

const CLASS_NAME = 'react-ant-tree-select';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func.isRequired
  };

  static defaultProps = {
    items: [],
    template: noop
  };

  render() {
    const {
      className,
      children,
      items,
      template,
      directory,
      ...props
    } = this.props;

    return (
      <TreeSelect
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {template(items)}
      </TreeSelect>
    );
  }
}
