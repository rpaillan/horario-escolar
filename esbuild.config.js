import dotenv from 'dotenv';
import esbuild from 'esbuild';
import {sassPlugin} from 'esbuild-sass-plugin';

dotenv.config();
const args = process.argv;

const config = {
  logLevel: 'info',
  entryPoints: ['src/index.tsx'],
  outfile: 'docs/build/bundle.js',
  bundle: true,
  define: {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
  },
};

if (args.includes('--build')) {
  esbuild
    .build({
      ...config,
      minify: true,
      sourcemap: false,
      plugins: [sassPlugin()]
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}

if (args.includes('--dev')) {
  esbuild
    .context({
      ...config,
      minify: false,
      sourcemap: true,
      plugins: [sassPlugin()]
    })
    .then(async (ctx) => {
      await ctx.watch(); // this is needed only if live reloading will be used
      await ctx.serve({
        servedir: 'docs',
        onRequest: ({ remoteAddress, method, path, status, timeInMS }) => {
          console.info(remoteAddress, status, `"${method} ${path}" [${timeInMS}ms]`);
        },
      });
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}