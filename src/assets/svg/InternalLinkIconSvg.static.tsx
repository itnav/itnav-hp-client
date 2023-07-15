import type { JSX } from 'solid-js/jsx-runtime';

export default function InternalLinkIconSvg(
  props: JSX.SvgSVGAttributes<SVGSVGElement>,
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
    </svg>
  );
}
