// import './bootstrap';

// require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { createInertiaApp } from '@inertiajs/react';
import '../css/app.css';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
// console.log("app.jsx", import.meta);

createInertiaApp({
    // title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        if (el.hasChildNodes()) {
          hydrateRoot(el, <App {...props} />);
          return;
        }

        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    // progress: {
    //     color: 'red',
    // },
});
