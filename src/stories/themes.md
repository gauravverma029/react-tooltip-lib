# Themes

### :smile: Usage

```js
import Tooltip from 'react-tooltip-lib';
```

### Example 1.

```js
export default class App extends Component {
  render() {
    return (
      <div>
        <Tooltip initialVisibility="show" tipTitle="This is React Tooltip library" theme="default" />
      </div>
    );
  }
}
```

<!-- STORY -->

### Properties

- `theme` - By Default value is `default` .This value is string.

| propName | propType | defaultValue | otherValues                                                                     |
| -------- | -------- | ------------ | ------------------------------------------------------------------------------- |
| theme    | String   | default      | `primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`,`snow` |
