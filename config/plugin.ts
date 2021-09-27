import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  apollo: {
    enable: true,
    package: '@gaoding/egg-apollo-client',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
};

export default plugin;
