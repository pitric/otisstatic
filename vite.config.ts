import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:7071',
    }, headers: {}
  },
})
