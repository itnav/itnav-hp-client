import { onMount } from 'solid-js';
import type { FlowProps } from 'solid-js';
import { layoutDrawerSignal } from '../layout-drawer-state';

type Props = FlowProps<{
  class: string;
  classWhenOpen: string;
}>;
export default function LayoutDrawer(props: Props) {
  const [getIsOpenLayoutDrawer, setIsOpenLayoutDrawer] = layoutDrawerSignal;

  function toggleDrawer(event?: HistoryChangeEvent) {
    const { hash } = event ? event.newLocation : location;
    setIsOpenLayoutDrawer(hash === '#drawer');
  }

  onMount(() => {
    toggleDrawer();
    history.listen('hashChange', toggleDrawer);
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
