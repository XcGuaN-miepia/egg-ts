import { Controller } from 'egg';

export default class TestController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log(ctx);

    ctx.body = await ctx.service.test.sayHi('egg-test');
  }
}
