import worker from '../../src/worker/index';
import { Env } from '../../src/worker/types';

// Cloudflare Pages Functions adapter
export const onRequest = async (context: {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
  next: () => Promise<Response>;
}): Promise<Response> => {
  return worker.fetch(context.request, context.env, {
    waitUntil: context.waitUntil,
    passThroughOnException: () => {}
  } as ExecutionContext);
};
