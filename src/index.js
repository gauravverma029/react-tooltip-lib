import React, { Component } from 'react';

import Basic from './component/Basic';

class Tooltip extends Component {
  render() {
    const { ...props } = this.props;
    return <Basic {...props} />;
  }
}

export default Tooltip;
