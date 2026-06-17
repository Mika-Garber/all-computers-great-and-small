/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_GOOGLE_DRIVE_PRESENTATIONS_URL?: string;
  readonly VITE_GOOGLE_DRIVE_HOW_TOS_URL?: string;
  readonly VITE_GOOGLE_DRIVE_COMPUTER_101_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
