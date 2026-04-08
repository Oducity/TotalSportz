//// vite.config.js
//import { defineConfig } from "vite";
//
//export default defineConfig({
//  // Your configuration options here, e.g.:
//    // server: { port: 3000 }
//    server: {
//        proxy: {
//          '/api': {
//            target: 'http://api.football-data.org/v4',
//            changeOrigin: true,
//            rewrite: (path) => path.replace(/^\/api/, '')
//          }
//        }
//    }
//});


// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://api.football-data.org/v4',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
