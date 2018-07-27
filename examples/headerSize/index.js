import Miniact from 'miniact';

const state = {
  headerSize: 4
};

const Main = app => {
  const h = app.state.headerSize;

  const increment = () => app.setState(prevState => ({
    headerSize: Math.max(1, prevState.headerSize - 1)
  }));
  const decrement = () => app.setState(prevState => ({
    headerSize: Math.min(6, prevState.headerSize + 1)
  }));

  return `
  <div>
    <h${h}>
      I'm an h${h}!
    </h${h}>
    <button ${app.on({click: increment})}>+</button>
    <button ${app.on({click: decrement})}>-</button>
  </div>
`
}

Miniact(state, '#app', Main);
