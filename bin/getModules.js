const fs = require('fs');
const axios = require('axios');
// const download = require('download-git-repo');

// (async () => {
//   await download(
//     'https://github.com:1225zhangqian/nodeAndTsDemo',
//     'dist',
//     function (err) {
//       console.log(err ? 'Error' : 'Success');
//       console.log(err);
//     }
//   );

// fs.writeFileSync(
//   'dist/dd.ts',
//   await download(
//     'https://github.com/1225zhangqian/nodeAndTsDemo/blob/master/src/component/ChildFour/index.tsx'
//   )
// );

// download(
//   'https://github.com/1225zhangqian/nodeAndTsDemo/blob/master/src/component/ChildFour/setting.json'
// ).pipe(fs.createWriteStream('dist/ff.json'));

// await Promise.all(['dd.ts', 'ff.json'].map(url => download(url, 'dist')));
// })();
axios
  .get('http://localhost:8008/getPackage.json')
  .then(response => {
    const Json = response.data;
    console.log(Json);
    let text = '';
    Object.keys(Json).forEach(i => {
      text += `import ${i} from '${Json[i]['module']}'; \n`;
    });
    fs.writeFileSync('src/util/getModules/importComponentList.ts', text);
  })
  .catch(error => {
    console.log(error);
  });
