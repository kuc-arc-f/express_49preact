import path from "path"
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import buildCommon from './src/lib/buildCommon';
const directoryPath = './src/client';

// https://vitejs.dev/config/
export default defineConfig(async({ mode }) => {
  if (mode === 'client') {
    const entryFiles = await buildCommon.getEntryItems(directoryPath);
    //console.log(entryFiles);
    return {
      plugins: [preact()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      }, 
      define: {
        "process.env.NODE_ENV": '"production"',
      },
      build: {
        lib: {
//          entry: "./src/main.tsx",
          entry: entryFiles,
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [preact()], 
    }
  }
})
