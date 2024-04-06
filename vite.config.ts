/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    include: ['src/tests/*.test.ts'],
    coverage: {
      include: ['src/components/**/src/*.vue'],
    },
    environment: 'jsdom',
    onConsoleLog(log: string, type: 'stdout' | 'stderr'): boolean | void {
      return type !== 'stdout' || log === 'message from third party library';
    },
  },
});
