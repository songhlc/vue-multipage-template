var glob = require('glob');
// 每个页面的入口文件
var entry = getEntries('src/pages/**/index.js');

// 获取指定路径下的入口文件
function getEntries(globPath) {
  var files = glob.sync(globPath),
    entries = {};

  files.forEach(function(filepath) {
    // 取倒数第二层(view下面的文件夹)做包名
    var split = filepath.split('/');
    var name = split[split.length - 2];

    entries[name] = './' + filepath;
  });

  return entries;
}
// tofix  需要提取的公共文件
entry.vendor = ['vue', 'src/pages/common.js']
module.exports = {
  entry: entry
}
