# react-themable-hoc-aphrodite-interface

Allows Aphrodite to be used with [react-themable-hoc](https://github.com/jtberglund/react-themable-hoc)

```
npm i react-themable-hoc-aphrodite-interface
```

## Usage

```js
import AphroditeInterface from 'react-themable-hoc-aphrodite-interface';
import { ThemeManager } from 'react-themable-hoc';

const aphroditeInterface = new AphroditeInterface();
ThemeManager.setStyleInterface(jssInterface);
ThemeManager.addTheme('theme1', {
    // theme styles
});
```

Usage with aphrodite extensions

```js
import { Stylesheet } from 'aphrodite';
import AphroditeInterface from 'react-themable-hoc-aphrodite-interface';

const customAphrodite = Stylesheet.extend([
    /*...extensions*/
]);

const aphroditeInterface = new AphroditeInterface(customAphrodite);
```

## License

[MIT](https://github.com/jtberglund/react-themable-hoc-aphrodite-interface/blob/master/LICENSE)
