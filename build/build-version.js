const Package = require('../package.json');
// var path = require('path');
// var rm = require('rimraf');
const chalk = require('chalk');
const fs = require('fs');
/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var filecopy = function(src, dst) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function(err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function(path) {
      var _src = src + '/' + path;

      var _dst = dst + '/' + path;

      var readable; var writable;
      fs.stat(_src, function(err, st) {
        if (err) {
          throw err;
        }
        // 判断是否为文件
        if (st.isFile()) {
          // 创建读取流
          readable = fs.createReadStream(_src);
          // 创建写入流
          writable = fs.createWriteStream(_dst);
          // 通过管道来传输流
          readable.pipe(writable);
        // 如果是目录则递归调用自身
        } else if (st.isDirectory()) {
          startCopy(_src, _dst);
        }
      });
    });
  });
};

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
const startCopy = function(src, dst) {
  fs.exists(src, function(srcExists) {
    if (srcExists) {
      fs.exists(dst, function(exists) {
        // 已存在
        if (exists) {
          chalk.red('  Build failed with errors.\n');
        // 不存在
        } else {
          fs.mkdir(dst, function() {
            filecopy(src, dst);
          });
        }
      });
    }
  });
};

startCopy('./lib', `tag/v${Package.version}`);
console.log(Package.version);
