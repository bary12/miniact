# [Prototype] Miniact
A 299 bytes minified+gzipped React-like microlibrary, inspired by lit-html

## Example

```html
<div id="app"></div>
```

```javascript
import Miniact from 'miniact';

const state = {
    items: [1, 2, 3],
    next: 4
};

const Title = app => `<h1>You have ${app.state.items.length} items</h1>`;

const MyComponent = app => `
    ${Title(app)}
    <ul>
        ${app.state.items.map(item => `<li>item ${item}</li>`)}
    </ul>
    <button
    ${app.on({
        click: app.setState(prevState => ({
            items: [...prevState.items, next],
            next: next + 1
        }))
    })}
    >
        Click here to add another item to the list!
    </button>
`;

Miniact(state, '#app', MyComponent);

```

## Known Limitations

There is only a central state.
