import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { dbPath } from './config.db';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1618820405018_1142';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.apollo = {
    config_server_url: 'http://139.198.186.30:8080/',
    app_id: 'QFfvaO97odmRj4Iz',
    init_on_start: true,
  };

  config.mongoose = {
    client: {
      url: `mongodb://${dbPath}`,
      options: {
        useNewUrlParser: true,
      },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
