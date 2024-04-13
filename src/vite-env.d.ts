/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HYPER_FORM_URL: string;
    readonly VITE_HOST: string;
    readonly VITE_API_HOST: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
