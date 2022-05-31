import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact/dist/index';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react()]
});