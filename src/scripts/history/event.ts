export class HistoryChangeEvent {
  readonly oldLocation: Location | undefined;
  readonly newLocation: Location;
  readonly state: any;

  constructor(
    public readonly type: HistoryChangeEventConstructor[0],
    dict: HistoryChangeEventConstructor[1] = {},
  ) {
    this.oldLocation = dict.oldLocation;
    this.newLocation = dict.newLocation || { ...location };
    this.state = dict.state;
  }
}

window.HistoryChangeEvent = HistoryChangeEvent;

export {};
