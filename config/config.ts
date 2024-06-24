import {defineConfig} from 'umi';
import proxy from "./proxy";
import routes from './routes';

export default defineConfig({
    npmClient: 'pnpm',
    routes,
    proxy
})