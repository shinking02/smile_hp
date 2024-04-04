/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HYPER_FORM_URL: string;
    readonly VITE_PROJECT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
