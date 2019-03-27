# React Tooltip Lib

A simple UI library for light-weight, highly customizable React Tooltip.
Very Easy to use and integrate.

## Installation

To start with `react-tooltip-lib` install:

```
yarn add react-tooltip-lib
// or
npm install --save react-tooltip-lib
```

### Usage

```js
import Tooltip from "react-tooltip-lib";
```

### Example 1.

```js
export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip
          placement="bottom"
          initialVisibility="show"
          tipContent="This is React Tooltip library"
        />
      </div>
    );
  }
}
```

### Example 2.

```js
// Your designed Component you can export from anywhere
const DesignedContentComponent = function() {
  return <div>Hello ToolTip</div>;
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip
          placement="bottom"
          initialVisibility="show"
          tipContent={DesignedContentComponent}
        />
      </div>
    );
  }
}
```

### Example 3.

```js
// Your Custom Icon. onClick or onHover you want to open Tooltip Content.By default icon is hint icons
import { ReactComponent as InformationIcon } from "../../icons/information.svg";

// Your designed Component you can export from anywhere
const DesignedContentComponent = function() {
  return <div>Hello ToolTip</div>;
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip
          placement="bottom"
          initialVisibility="show"
          tipContent={DesignedContentComponent}
        >
          <InformationIcon />
        </Tooltip>
      </div>
    );
  }
}
```

### Properties

- `initialVisibility` - ToolTip Content By Default Hide..
- `tipContent` - Tiptool Content Pass as String or Pass and Designed Component

| propName          | propType                            | defaultValue | isRequired |
| ----------------- | ----------------------------------- | ------------ | ---------- |
| initialVisibility | String                              | hide         | -          |
| tipContent        | String or Pass Functional Component | -            | yes        |

# Themes

### Example 4.

```js
export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip
          initialVisibility="show"
          tipTitle="This is React Tooltip library"
          theme="default"
        />
      </div>
    );
  }
}
```

### Properties

- `theme` - By Default value is `default` .This value is string.

| propName | propType | defaultValue | otherValues                                                                     |
| -------- | -------- | ------------ | ------------------------------------------------------------------------------- |
| theme    | String   | default      | `primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`,`snow` |

# Trigger

### Example 5.

```js
export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip
          initialVisibility="show"
          tipTitle="This is React Tooltip library"
          trigger="onHover"
        />
      </div>
    );
  }
}
```

### Example 6.

```js
export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip
          initialVisibility="show"
          tipTitle="This is React Tooltip library"
          trigger="onHover"
        />
      </div>
    );
  }
}
```

### Properties

- `trigger` - By Default value is `onHover` .This value is string.

| propName | propType | defaultValue | otherValues         |
| -------- | -------- | ------------ | ------------------- |
| onHover  | String   | onHover      | `onHover`,`onHover` |

# Placement

### Example 7.

```js
export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip placement="top" tipTitle="This is React Tooltip library" />
      </div>
    );
  }
}
```

### Properties

- `placement` - By Default value is `auto` .This value is string.

| propName  | propType | defaultValue | otherValues                          |
| --------- | -------- | ------------ | ------------------------------------ |
| placement | String   | auto         | `auto`,`left`,`right`,`top`,`bottom` |

# ToopTip Content Layout Desiging Props

### Example 8.

```js
export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip
          tipContentWidth="50px"
          tipTitle="This is React Tooltip library"
        />
      </div>
    );
  }
}
```

### Properties

- `tipContentWidth` - Tip Content Width.
- `borderRadius` - Border radius.
- `fontWeight` - css properties.
- `tipTextTransform` - Css properties text trasform.
- `tipContentPadding` - Tip content Padding.
- `arrowSize` - arrow size between content and icon..
- `iconSize` - Default Icon Size.
- `color` - Content Color.
- `bg` - Background color.

| propName          | propType | defaultValue | otherValues     |
| ----------------- | -------- | ------------ | --------------- |
| tipContentWidth   | String   | auto         | css Properties  |
| borderRadius      | String   | 2px          | css Properties  |
| fontSize          | String   | 12px         | css Properties  |
| fontWeight        | String   | 400          | css Properties  |
| tipTextTransform  | String   | none         | css Properties  |
| tipContentPadding | String   | auto         | css Properties  |
| arrowSize         | String   | 4            | 1,2,3,4,5,6,... |
| iconSize          | String   | 16px         | css Properties  |
| color             | String   | Hex color    | css Properties  |
| bg                | String   | Hex color    | css Properties  |

## License

MIT © [gauravverma029](https://github.com/gauravverma029)
