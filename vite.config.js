import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), svgr()],
    server: {
      port: 3000,
      open: false,
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
        },
        '/admin/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
        },
      },
    },
    define: {
      'process.env.REACT_APP_BASE_URL': JSON.stringify(env.REACT_APP_BASE_URL || ''),
      'process.env.REACT_APP_AUTH_TOKEN': JSON.stringify(env.REACT_APP_AUTH_TOKEN || ''),
    },
    build: {
      outDir: 'build',
    },
  };
});
