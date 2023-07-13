const historyProto = History.prototype;

historyProto.addEventListener = function (type, listener) {
  const storage = (this.listenerStorage ||= {});
  const listeners = (storage[type] ||= []);
  listeners.push(listener);
};

historyProto.removeEventListener = function (type, listener) {
  const storage = this.listenerStorage;
  if (!storage) return;

  const listeners = storage[type];
  if (!listeners) return;

  const index = listeners.indexOf(listener);
  if (index > -1) listeners.splice(index, 1);
};

historyProto.listen = function (type, listener) {
  this.addEventListener(type, listener);
  return () => this.removeEventListener(type, listener);
};

const dispatchEvent = (historyProto.dispatchEvent = function (type, disc) {
  const storage = this.listenerStorage;
  if (!storage) return;

  const listeners = storage[type];
  if (!listeners) return;

  const event = new HistoryChangeEvent(type, disc);
  listeners.forEach((listener) => listener(event));
});

const dispatchEventOnChange = (historyProto.dispatchEventOnChange = function (
  disc = {},
) {
  this.dispatchEvent('locationChange', disc);

  const oldLocation = disc.oldLocation || ({} as Partial<Location>);
  const newLocation = disc.newLocation || location;

  if (oldLocation.hash !== newLocation.hash) {
    this.dispatchEvent('hashChange', disc);
  }

  if (oldLocation.search !== newLocation.search) {
    this.dispatchEvent('searchChange', disc);
  }
});

const history = window.history;

let currentLocation: Location;

function updateDisc(state: any) {
  const oldLocation = currentLocation;
  const newLocation = (currentLocation = { ...location });
  return { oldLocation, newLocation, state };
}

const originalPushState = history.pushState.bind(history);
history.pushState = function (state, title, url) {
  originalPushState(state, title, url);
  const disc = updateDisc(state);
  dispatchEvent('pushState', disc);
  dispatchEventOnChange(disc);
};

const originalReplaceState = history.replaceState.bind(history);
history.replaceState = function (state, title, url) {
  originalReplaceState(state, title, url);
  const disc = updateDisc(state);
  dispatchEvent('replaceState', disc);
  dispatchEventOnChange(disc);
};

addEventListener('popstate', (event) => {
  const disc = updateDisc(event.state);
  dispatchEvent('popState', disc);
  dispatchEventOnChange(disc);
});

export {};
