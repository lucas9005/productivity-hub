import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** @description Directory containing the server-side rendered files */
const serverDistFolder = dirname(fileURLToPath(import.meta.url));

/** @description Directory containing the browser-side files */
const browserDistFolder = resolve(serverDistFolder, '../browser');

/** @description Path to the server-side index.html template */
const indexHtml = join(serverDistFolder, 'index.server.html');

// Import the Angular SSR bootstrap function
import bootstrap from './main.server.js';

/** @description Express application instance for serving the Angular app */
const app = express();

/** @description Common engine instance for server-side rendering */
const commonEngine = new CommonEngine();

// Optional: define REST API endpoints
// app.get('/api/**', (req, res) => { ... });

/**
 * @description Serve static files from /browser directory
 * Configures Express to serve static files with caching enabled
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  })
);

/**
 * @description Handle all other requests by rendering the Angular application
 * This route catches any requests not handled by static file serving
 * and renders the application using server-side rendering
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * @description Start the server if this module is the main entry point
 * This allows the file to be both imported as a module and run directly
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`✅ Express SSR server running at http://localhost:${port}`);
  });
}

/** @description Export the Express app for use in other modules */
export default app;
