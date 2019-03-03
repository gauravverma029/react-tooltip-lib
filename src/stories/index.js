import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Marked from 'storybook-readme/components/Marked';

import { Button, Welcome } from '@storybook/react/demo';
import App from '../../example/src/App.js';
import Default from './default.md';
import Themes from './themes.md';

import { withReadme } from 'storybook-readme';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Tooltip', module).add('Default with Props', () => (
  <div style={{ padding: '16px' }}>
    <div style={{ height: '50px' }}>
      <App placement="bottom" tipContent="This is React Tooltip library" />
    </div>
    <Marked md={Default} />
  </div>
));

storiesOf('Tooltip/Themes', module)
  .add('Default with Props', () => (
    <div style={{ padding: '16px' }}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" />
      </div>
      <Marked md={Themes} />
    </div>
  ))
  .add('primary', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="primary" />
      </div>
    </Button>
  ))
  .add('secondary', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="secondary" />
      </div>
    </Button>
  ))
  .add('success', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="success" />
      </div>
    </Button>
  ))
  .add('danger', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="danger" />
      </div>
    </Button>
  ))
  .add('warning', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="warning" />
      </div>
    </Button>
  ))
  .add('info', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="info" />
      </div>
    </Button>
  ))
  .add('light', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="light" />
      </div>
    </Button>
  ))
  .add('dark', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="dark" />
      </div>
    </Button>
  ))
  .add('snow', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" tipContent="This is React Tooltip library" theme="snow" />
      </div>
    </Button>
  ));

storiesOf('Tooltip/Trigger', module)
  .add('onClick', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" trigger="onClick" tipContent="This is React Tooltip library" />
      </div>
    </Button>
  ))
  .add('onHover', () => (
    <Button onClick={action('clicked')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" trigger="onHover" tipContent="This is React Tooltip library" />
      </div>
    </Button>
  ));

storiesOf('Tooltip/placement', module)
  .add('auto', () => (
    <Button onClick={action('auto')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" placement="auto" tipContent="This is React Tooltip library" />
      </div>
    </Button>
  ))
  .add('left', () => (
    <Button onClick={action('left')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" placement="left" tipContent="This is React Tooltip library" />
      </div>
    </Button>
  ))
  .add('right', () => (
    <Button onClick={action('right')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" placement="right" tipContent="This is React Tooltip library" />
      </div>
    </Button>
  ))
  .add('top', () => (
    <Button onClick={action('top')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" placement="top" tipContent="This is React Tooltip library" />
      </div>
    </Button>
  ))
  .add('bottom', () => (
    <Button onClick={action('bottom')}>
      <div style={{ height: '50px' }}>
        <App initialValue="show" placement="bottom" tipContent="This is React Tooltip library" />
      </div>
    </Button>
  ));
