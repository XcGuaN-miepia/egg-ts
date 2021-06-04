export default (apollo, appConfig) => {
  // 不添加 namespace 前缀的时候，默认使用 application 的配置
  // 如果 application 不包含该配置，则提取 process.env 里面的配置
  // const env = apollo.get('NODE_ENV');
  // 提取类型配置
  apollo.getString('${namespace}.${string_config}');
  apollo.getNumber('${namespace}.${number_config}');
  apollo.getBoolean('${namespace}.${boolean_config}');
  apollo.getJSON('${namespace}.${json_config}');
  apollo.getDate('${namespace}.${date_config}');


  // 提取所有配置内容
  const all = apollo.getAll();
  // 可以从 all 中提取需要的 namespace 配置
  // const application = all.application
  // const config1 = application.get('config1');
  // const str = application.getString('config2');
  // const num = application.getNumber('config3');
  // const bool = application.getBoolean('config4');
  // const json = application.getJSON('config5');
  // const date = application.getDate('config6');

  return {
    logger: {
      ...appConfig.logger,
      level: apollo.get('LOGGER_LEVEL'),
    },
    all,
  };
};
