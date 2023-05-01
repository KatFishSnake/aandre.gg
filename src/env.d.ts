/// <reference types="astro/client" />

declare global {
  interface Window {
    dataLayer: (string | Date)[];
  }
}

export {};
