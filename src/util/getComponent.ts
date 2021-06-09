const req = require.context('../component', true, /index\.tsx$/);
export const getAllComponentsList = () => {
  const allComponentsList = {};
  req.keys().forEach(file => {
    console.log(file);
    const fileName = file
      .replace('./', '')
      .replace('/index.tsx', '')
      .replace('/index.ts', '');
    allComponentsList[fileName] = req(file)[fileName];
  });
  return allComponentsList;
};