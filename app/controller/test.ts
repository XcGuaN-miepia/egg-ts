import { Controller } from 'egg';
export default class TestController extends Controller {
  public async index() {
    const { ctx } = this;

    // 假装这是从数据库读取的数据
    const user = this.service.test.getData();

    console.log(ctx.model);
    ctx.body = {
      code: 0,
      message: 'success',
      data: user,
    };
  }
}
