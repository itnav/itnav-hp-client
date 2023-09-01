export type HistoryChangeType =
  | 'locationChange'
  | 'hashChange'
  | 'searchChange'
  | 'popState'
  | 'pushState'
  | 'replaceState';

export type HistoryChangeEventDisc = Partial<HistoryChangeEvent>;

export type HistoryChangeListener = (event: HistoryChangeEvent) => void;

export class HistoryChangeEvent {
  readonly oldLocation: Location | undefined;
  readonly newLocation: Location;
  readonly state: any;

  constructor(
    public readonly type: HistoryChangeType,
    dict: HistoryChangeEventDisc = {},
  ) {
    this.oldLocation = dict.oldLocation;
    this.newLocation = dict.newLocation || { ...location };
    this.state = dict.state;
  }
}
