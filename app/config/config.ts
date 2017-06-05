import { Config } from '../types';

let env = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 3000;

export let settings: Config = {
    name: 'personal-website',
    version: '1.0.0',
    port: port,
    env: env
};

if (env === 'production') {
    settings.env = 'prod';
    // other production settings
}
