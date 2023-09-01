import { isClient } from '../status';
import type { HistoryChangeListener, HistoryChangeType } from './change-event';

export class HistoryEvent {
  #listenerStorage: Partial<
    Record<HistoryChangeType, HistoryChangeListener[]>
  > = {};

  #currentLocation: Readonly<Location> = { ...location };
  get currentLocation() {
    return this.#currentLocation;
  }

  constructor() {
    this.#overrideOriginalHistoryActions();
  }

  #createDiscWithUpdateLocation(state: any) {
    const oldLocation = this.#currentLocation;
    const newLocation = (this.#currentLocation = { ...location });
    return { oldLocation, newLocation, state };
  }

  #overrideOriginalHistoryActions() {
    const self = this;
    const history = window.history;

    const originalPushState = history.pushState.bind(history);
    history.pushState = function (state, title, url) {
      originalPushState(state, title, url);
      const disc = self.#createDiscWithUpdateLocation(state);
      self.dispatch('pushState', disc);
      self.dispatchLocationChanges(disc);
    };

    const originalReplaceState = history.replaceState.bind(history);
    history.replaceState = function (state, title, url) {
      originalReplaceState(state, title, url);
      const disc = self.#createDiscWithUpdateLocation(state);
      self.dispatch('replaceState', disc);
      self.dispatchLocationChanges(disc);
    };

    addEventListener('popstate', (event) => {
      const disc = self.#createDiscWithUpdateLocation(event.state);
      self.dispatch('popState', disc);
      self.dispatchLocationChanges(disc);
    });
  }

  addListener(type: HistoryChangeType, listener: HistoryChangeListener) {
    const storage = this.#listenerStorage;
    const listeners = (storage[type] ||= []);
    listeners.push(listener);
  }

  removeListener(type: HistoryChangeType, listener: HistoryChangeListener) {
    const listeners = this.#listenerStorage[type];
    if (!listeners) return;

    const index = listeners.indexOf(listener);
    if (index > -1) listeners.splice(index, 1);
  }

  listen(type: HistoryChangeType, listener: HistoryChangeListener) {
    this.addListener(type, listener);
    return () => this.removeListener(type, listener);
  }

  dispatch(type: HistoryChangeType, disc: any) {
    const listeners = this.#listenerStorage[type];
    if (!listeners) return;

    const event = { type, ...disc };
    listeners.forEach((listener) => listener(event));
  }

  dispatchLocationChanges(disc: any) {
    this.dispatch('locationChange', disc);

    const oldLocation = disc.oldLocation || ({} as Partial<Location>);
    const newLocation = disc.newLocation || location;

    if (oldLocation.hash !== newLocation.hash) {
      this.dispatch('hashChange', disc);
    }

    if (oldLocation.search !== newLocation.search) {
      this.dispatch('searchChange', disc);
    }
  }
}

export const historyEvent = isClient ? new HistoryEvent() : undefined!;
