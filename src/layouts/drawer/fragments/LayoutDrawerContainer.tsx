import { onMount } from 'solid-js';
import type { FlowProps } from 'solid-js';
import { historyEvent } from '@/utils/history';
import type { HistoryChangeEvent } from '@/utils/history';
import {
  getIsOpenLayoutDrawer,
  setIsOpenLayoutDrawer,
} from '../layout-drawer-state';

type Props = FlowProps<{
  class: string;
  classWhenOpen: string;
}>;
export default function LayoutDrawer(props: Props) {
  onMount(() => {
    function toggleDrawer(event?: HistoryChangeEvent) {
      const { hash } = event ? event.newLocation : location;
      setIsOpenLayoutDrawer(hash === '#drawer');
    }

    toggleDrawer();

    historyEvent.addListener('hashChange', toggleDrawer);
  });

  return (
    <div
      classList={{
        [props.class]: true,
        [props.classWhenOpen]: getIsOpenLayoutDrawer(),
      }}
    >
      {/*@once*/ props.children}
    </div>
  );
}
