import { Config } from '../types';

let env = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 3000;

export let settings: Config = {
    name: 'personal-website',
    port: port,
    env: env
};

if (env === 'production') {
    // production specific settings
}

if (env === 'development') {
    // Develppment specific settings
}
