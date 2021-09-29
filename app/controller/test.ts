import { Controller } from 'egg';
export default class TestController extends Controller {
  public async index() {
    const { ctx } = this;

    ctx.validate({
      id: 'id',
    }, ctx.request.query);

    // 假装这是从数据库读取的数据
    const user = await this.service.test.getData();

    ctx.body = {
      code: 0,
      message: 'success',
      data: user,
    };
  }

  public async add() {
    const { ctx } = this;
    // JSON.parse('asdsadasdas:Dasdsadsa');

    // try {
    ctx.validate({
      id: 'id',
    });

    ctx.body = {
      code: 0,
      message: 'success',
    };
    // } catch (error) {
    //   console.log(error);
    //   ctx.body = {
    //     code: 0,
    //     message: 'success',
    //   };
    // }

  }
}
