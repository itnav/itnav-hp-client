import type { HistoryChangeEvent as HistoryChangeEventBase } from '../event';

declare global {
  interface History {
    listenerStorage:
      | Partial<Record<HistoryChangeType, HistoryChangeListener[]>>
      | undefined;

    oldState: any;

    listen(
      type: HistoryChangeType,
      listener: HistoryChangeListener,
    ): () => void;

    addEventListener(
      event: HistoryChangeType,
      listener: HistoryChangeListener,
    ): void;

    removeEventListener(
      event: HistoryChangeType,
      listener: HistoryChangeListener,
    ): void;

    dispatchEvent(type: HistoryChangeType, disc?: HistoryChangeEventDisc): void;

    dispatchEventOnChange(disc?: HistoryChangeEventDisc): void;
  }

  interface HistoryChangeEvent extends HistoryChangeEventBase {}

  type HistoryChangeEventConstructor = [
    HistoryChangeType,
    HistoryChangeEventDisc?,
  ];

  var HistoryChangeEvent: {
    new (
      type: HistoryChangeEventConstructor[0],
      disc: HistoryChangeEventConstructor[1],
    ): HistoryChangeEvent;
  };

  type HistoryChangeType =
    | 'locationChange'
    | 'hashChange'
    | 'searchChange'
    | 'popState'
    | 'pushState'
    | 'replaceState';

  type HistoryChangeEventDisc = Partial<HistoryChangeEvent>;

  type HistoryChangeListener = (event: HistoryChangeEvent) => void;
}

export {};
