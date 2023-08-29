import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     '/api':"https://nodejs-portfolioapp.onrender.com"
  //     // '/api':"http://localhost:4000"
  //   }
  // },
  plugins: [react()],
  
})
