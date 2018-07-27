Array.prototype.toString = function () {
  return this.join('');
};

export default (state, selector, component) => {
  const setState = setter => {
    const execAfterRender = [];
    const handlers = {};
    const on = obj => {
      let rand = Math.floor(Math.random() * 100000);
      const identifier = `__miniact_events="${rand}"`;
      for (let [event, handler] of Object.entries(obj)) {
        execAfterRender.push(() => {
          document.querySelector(`[${identifier}]`).addEventListener(event, handler);
        });
      }
      return identifier;
    }
    state = Object.assign({}, state, setter(state));
    document.querySelector(selector).innerHTML = component({state, setState, on});
    execAfterRender.forEach(func => func());
  }
  setState(() => {});
  return setState;
};
