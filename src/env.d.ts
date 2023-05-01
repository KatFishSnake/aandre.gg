/// <reference types="astro/client" />

declare global {
  interface Window {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    dataLayer: Record<string, any>[];
  }
}

export {};
