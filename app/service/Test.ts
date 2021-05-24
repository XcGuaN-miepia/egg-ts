import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  public async getData() {
    const users = await this.ctx.model.User.find({});

    return Object.assign({}, {
      pageNum: 1,
      pageSize: 10,
      list: users,
    });
  }
}
