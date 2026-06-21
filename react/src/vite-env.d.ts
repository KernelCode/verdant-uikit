/// <reference types="vite/client" />

declare module "*.png" {
  const src: string;
  export default src;
}

// Injected by vite.config.ts from uikit.json `type`.
declare const __UIKIT_TYPE__: string | undefined;
