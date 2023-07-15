import ExternalLinkIconSvg from '@/assets/svg/ExternalLinkIconSvg.static';
import InternalLinkIconSvg from '@/assets/svg/InternalLinkIconSvg.static';
import Anchor from './Anchor.static';
import type { AnchorProps } from './Anchor.static';
import css from './OutlinedAnchor.css';

export default function OutlinedAnchor(props: AnchorProps) {
  return (
    <Anchor class={css.container} {...props}>
      {props.children || <div>{props.label}</div>}

      <div class={css.suffix}>
        {props.variant === 'external' ? (
          <ExternalLinkIconSvg class={css.suffixExternalIcon} />
        ) : (
          <InternalLinkIconSvg class={css.suffixInternalIcon} />
        )}
      </div>
    </Anchor>
  );
}
