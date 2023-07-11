import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

/** @see https://ja.vitejs.dev/config */
export default defineConfig(({ mode }) => {
  return {
    define: {
      $env: loadEnv(mode, fileURLToPath(new URL('.', import.meta.url)), ''),
    },
  };
});
