"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_json_1 = __importDefault(require("./metadata/metadata.json"));
const getConfig = () => {
    const version = process.env.VERSION || '0.0.0';
    const nodeEnv = process.env.NODE_ENV || 'development';
    const serverEnv = process.env.APP_ENV || 'local';
    const isProd = serverEnv === 'prod';
    /**
     * Set global config settings
     */
    const config = {
        node_env: nodeEnv,
        env: serverEnv,
        is_prod: isProd,
        version: `${version}-${metadata_json_1.default.build}`,
        logger_level: isProd ? 'http' : 'debug',
        base_url: {
            jynx: process.env.APP_URL || ''
        },
        app: {
            url: process.env.APP_URL || '',
            port: process.env.PORT || 10000,
            public_dir: isProd ? '../src/public' : 'public',
            entry_file: isProd ? '../src/public/index.html' : 'public/index.html'
        }
    };
    return config;
};
const config = getConfig();
exports.default = config;
