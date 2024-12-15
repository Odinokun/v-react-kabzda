/// <reference types="vitest" />
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Поддержка глобальных тестовых функций (например, `describe`, `it`).
    environment: 'jsdom', // JS-DOM для тестов, связанных с React.
    setupFiles: './src/test/setup.ts', // Файл для глобальной настройки тестов.
  },
});
