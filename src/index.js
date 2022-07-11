import Message from './message';

export { Message };

const install = function (app) {
  console.log(app);
  app.prototype.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Message,
  version: '1.0.0'
};
