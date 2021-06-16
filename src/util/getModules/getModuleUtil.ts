const req = require.context('./', false, /importComponentList\.ts$/);
export const getViewList = () => {
  const allComponentsList = {};
  req.keys().forEach(file => {
    console.log(req(file));
    const fileName = file
      .replace('./', '')
      .replace('/index.tsx', '')
      .replace('/index.ts', '');
    allComponentsList[fileName] = req(file);
  });
  console.log(allComponentsList);
  return allComponentsList;
};
getViewList();
