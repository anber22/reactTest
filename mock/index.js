import { setupWorker } from 'msw';
import login from '@/login';

const worker = setupWorker(...login);
export default worker;
