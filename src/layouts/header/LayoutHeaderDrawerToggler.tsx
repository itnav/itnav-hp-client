import type { FlowProps } from 'solid-js';
import { toggleUrlFragment } from '@/utils/navigation';
import { getIsOpenLayoutDrawer } from '../drawer/layout-drawer-state';

type Props = FlowProps<{
  class: string;
  classWhenOpen: string;
}>;
export default function LayoutHeaderDrawerToggler(props: Props) {
  const toggleDrawer = () => {
    toggleUrlFragment('drawer');
  };

  return (
    <button
      type="button"
      aria-label="メニューを開閉する"
      classList={{
        [props.class]: true,
        [props.classWhenOpen]: getIsOpenLayoutDrawer(),
      }}
      onClick={toggleDrawer}
    >
      {props.children}
    </button>
  );
}
