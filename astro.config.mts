import image from '@astrojs/image';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import critters from 'astro-critters';
import purgecss from 'astro-purgecss';

/** @see https://astro.build/config */
export default (() => {
  return defineConfig({
    integrations: [
      /**
       * @npm https://www.npmjs.com/package/@astrojs/solid-js
       * @docs https://docs.astro.build/ja/guides/integrations-guide/solid-js
       */
      solidJs(),

      /**
       * @npm https://www.npmjs.com/package/@astrojs/image
       * @docs https://docs.astro.build/ja/guides/integrations-guide/image
       */
      image({ serviceEntryPoint: '@astrojs/image/sharp' }),

      /**
       * @npm https://www.npmjs.com/package/astro-purgecss
       * @docs https://github.com/codiume/orbit/tree/main/packages/astro-purgecss#readme
       */
      purgecss(),

      /**
       * @npm https://www.npmjs.com/package/astro-critters
       * @docs https://github.com/astro-community/astro-critters#readme
       * @deps https://github.com/astro-community/astro-critters/blob/main/package.json
       */
      critters({
        critters: {
          pruneSource: true,
          inlineFonts: false,
        },
        logger: 2,
      }),

      /**
       * @npm https://www.npmjs.com/package/astro-compress
       * @docs https://github.com/astro-community/astro-compress#readme
       * @deps https://github.com/astro-community/astro-compress/blob/main/package.json
       */
      compress({
        html: {
          removeAttributeQuotes: false,
        },
        css: true,
        js: {
          compress: {
            passes: 2,
          },
        },
        img: false,
        svg: {
          multipass: true,
        },
        logger: 1,
      }),
    ],

    output: 'static',

    compressHTML: true,
  });
})();
