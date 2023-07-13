/** @npm https://www.npmjs.com/package/@swup/preload-plugin */
declare module '@swup/preload-plugin' {
  import type { Plugin } from 'swup';

  /** @see https://swup.js.org/plugins/preload-plugin#options */
  interface PreloadPluginOptions {
    /**
     * ポインターデバイスでリンクをホバリングするときの同時要求の同時実行制限。
     *
     * @default 5
     * @see https://swup.js.org/plugins/preload-plugin#throttle
     */
    throttle?: number;
  }

  /**
   * `[data-swup-preload]` 属性を持つリンクを自動的にプリロードする。
   *
   * ポインタデバイスでリンクをホバーすると、そのリンクのURLがプリロードされ、ロード時間が約 `100ms` 短縮される。\
   * サーバーリソースを節約するために、同時に実行できるプリロードリクエストの数はデフォルトで `5` に制限されている。
   *
   * タッチデバイスでは、代わりにタッチイベントの開始時にリンクをプリロードし、約 `80ms` の高速化が得られる。\
   * 既にプリロードが実行中の場合、プラグインは別のプリロードを開始しない。これにより、サーバー上のリソースが節約される。
   *
   * @see https://swup.js.org/plugins/preload-plugin
   */
  const PreloadPlugin: new (options?: PreloadPluginOptions) => Plugin;

  export default PreloadPlugin;
}
