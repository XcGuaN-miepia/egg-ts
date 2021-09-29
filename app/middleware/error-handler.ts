import { Context } from 'egg';

export default () => {
  return async function errorHandler(ctx: Context<any>, next) {
    try {
      await next();
    } catch (err) {
      ctx.app.emit('error', err, ctx);

      const status = err.status || 500;

      ctx.body = { err };
      // if (status === 422) {
      //   ctx.body.detail = err.errors;
      // }
      ctx.status = status;
    }
  };
}
;
