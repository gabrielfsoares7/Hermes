export default function getEnv(key: string, fallback?:string): string {
    const val = process.env[key] || fallback;

    if (val === undefined){
        throw new Error(`Environment key ${key} isn't set. Have you forgot it?`);
    }

    return val;
}

export const HTTP_PORT = getEnv("HTTP_PORT", "4367")
export const NODE_ENV = getEnv("NODE_ENV", "development")
