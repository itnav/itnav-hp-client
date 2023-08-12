import { splitProps } from 'solid-js';
import type { JSX, ParentProps } from 'solid-js';
import type { HistoryAction } from 'swup/dist/types/modules/navigate';
import type { StaticRoute } from '@/routes';

export interface AnchorProps
  extends ParentProps<
    JSX.AnchorHTMLAttributes<HTMLAnchorElement> & Partial<StaticRoute>
  > {
  href: string;
  historyAction?: HistoryAction;
}
export default function Anchor(props: AnchorProps) {
  const [{ variant, label, ariaLabel, historyAction, children }, attributes] =
    splitProps(props, [
      'variant',
      'label',
      'ariaLabel',
      'historyAction',
      'children',
    ]);

  return (
    <a
      {...attributes}
      rel={variant === 'external' ? 'noopener noreferrer' : void 0}
      target={variant === 'external' ? '_blank' : void 0}
      data-swup-history={historyAction}
      aria-label={ariaLabel}
    >
      {children || label}
    </a>
  );
}
