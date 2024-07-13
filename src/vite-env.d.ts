/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_APP_ENV: string
    readonly VITE_APP_BASE: string
    readonly VITE_SERVICE_ID: string
    readonly VITE_TEMPLATE_ID_FPL: string
    readonly VITE_TEMPLATE_ID_STUDENT: string
    readonly VITE_PUBLIC_KEY: string
    // readonly RESEND_API_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}