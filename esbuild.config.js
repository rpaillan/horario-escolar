import dotenv from 'dotenv';
import esbuild from 'esbuild';

dotenv.config();
const args = process.argv;

const config = {
  logLevel: 'info',
  entryPoints: ['src/index.tsx'],
  outfile: 'public/build/bundle.js',
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
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}

if (args.includes('--start')) {
  esbuild
    .context({
      ...config,
      minify: false,
      sourcemap: true,
    })
    .then(async (ctx) => {
      await ctx.watch(); // this is needed only if live reloading will be used
      await ctx.serve({
        servedir: 'public',
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