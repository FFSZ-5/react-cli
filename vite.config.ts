import { URL, fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";

import postCssPxToRem from "postcss-pxtorem";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const config = {
    devServer: {
      client: {
        overlay: false, // 编译错误时，取消全屏覆盖（建议关掉）
      },
    },
    server: {
      host: "0.0.0.0",
      port: 8080,
      proxy: {
        // 在此处编写代理规则
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          bypass(req: any, res: any, options: any) {
            const proxyURL = options.target + options.rewrite(req.url);
            res.setHeader("x-req-proxyURL", proxyURL); // 将真实请求地址设置到响应头中
          },
          rewrite: (path: string) => {
            return path;
          },
          secure: false,
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 192,
            propList: ["*"],
          }),
        ],
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
  return config;
});
