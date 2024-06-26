import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@common': path.resolve(__dirname, './src/common'),
			'@pages': path.resolve(__dirname, './src/pages'),
		},
	},
	plugins: [react()],
});
