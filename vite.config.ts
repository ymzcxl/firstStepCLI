import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: "@import \"./src/style/common.scss\";"
      }
    }
  },
  publicDir: "public",
  define: {
    "process.env": {}
  },
  base: "./", // 设置打包路径
  server: {
    host: "localhost",
    port: 3000,
    open: true,
    strictPort: false,
    https: false,
    fs: {
      strict: true,
      allow: [".."]
      // Allow serving files from one level up to the project root
    }
    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
  build: {
    outDir: "dist" // Specify the output directory (relative to project root).
  }
});
