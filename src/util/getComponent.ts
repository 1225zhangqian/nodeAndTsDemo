const req = require.context('../../local_modules', true, /index\.tsx$/);
export const getAllComponentsList = () => {
  const allComponentsList = {};
  req.keys().forEach(file => {
    console.log(req(file));
    const fileName = file
      .replace('./', '')
      .replace('/index.tsx', '')
      .replace('/index.ts', '');
    allComponentsList[fileName] = req(file).default;
  });
  return allComponentsList;
};

export const getNotification = () => {
  return import('is-notification').then(module => {
    // Do something with the module.
    console.log(module);
    return module;
  });
};
export const getDynamicComponent = name => {
  // can't use a dynamic variable
  return import('is-notification').then(module => {
    // Do something with the module.
    console.log(module);
    return module;
  });
};
