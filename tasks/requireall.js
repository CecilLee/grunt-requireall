/*
 * grunt-requireall
 * https://github.com/takumi4ichi/grunt-requireall
 *
 * Copyright (c) 2014 takumi4ichi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path'),
      regex = /<%=\s*requireall\s*\(\s*(['"])(.+?)\1\s*\)\s*%>/g,
      findup = require('findup-sync'),
      minify = require('html-minifier').minify,
      minifyOption = {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      },
      _s = require('underscore.string');


  grunt.registerMultiTask('requireall', 'no, require all!', function() {

    var options = this.options({
      assetRootPath: './assets/',
      //去除被处理文件原后缀，使用该后缀为处理后文件
      //example: list.js -> list.required.js
      ext: '.required.js',

      htmlDir: 'html',
      jsDir: 'js',
      cssDir: 'css',
      lessDir: 'less',

      tmplDir: 'tmpl',
      tmplEngine: 'dot',
      tmplEngineCompileMethod: 'template',
      tmplRequireAfter: function(content){
        return content.replace(/^function anonymous/, 'function ');
      },

      extensions: {
        tmpl: function(content){

          var engine = require(options.tmplEngine),
          compileCode;

          if(engine && engine[options.tmplEngineCompileMethod]){
            compileCode = engine[options.tmplEngineCompileMethod](content).toString();
            if(options.tmplRequireAfter){
              compileCode = options.tmplRequireAfter(compileCode);
            }
            return compileCode;
            
          }else{
            grunt.fail.warn('require("'+options.tmplEngine+'") is null or require("'+options.tmplEngine+'").'+options.tmplEngineCompileMethod+' is not function');
          }
        },
        css: function(content){
          return minify('<style>'+content+'</style>', minifyOption).replace(/^<style>|<\/style>$/g,'');
        },
        html: function(content){
          return minify(content, minifyOption);
        },
        js: function(content){
          return minify('<script>'+content+'</script>', minifyOption).replace(/^<script>|<\/script>$/g,'');
        }
      }
    });

    /**
     * @function expandDeepRequire
     * @param filepath <string> 待处理文件
     * @desc 先展开对文件的多层引入,最后进行compiler(tmpl,less)或者minify(html,js,css)
     */
    function expandDeepRequire(filepath, isBeginFile){

        var content = grunt.file.read(filepath);

        return content.replace(regex, function(requireTag, _, filename){

          var extname, dirname, filepath, preprocessor, requireContent;

          extname = path.extname(filename);
          extname = extname.length ? extname.substr(1) : '';
          dirname = extname||'';

          if(options[extname+'Dir']){
            dirname = options[extname+'Dir'];
          }
          grunt.log.debug(dirname);

          filepath = findup(filename, {cwd: path.resolve(options.assetRootPath, dirname)});
          preprocessor = options.extensions[extname];

          if(!filepath){
            return requireTag;
          }else{
            requireContent = expandDeepRequire(filepath);
            if(isBeginFile){
              if(typeof preprocessor === 'function'){
                requireContent = preprocessor.call(options, requireContent);
              }
            }
            return requireContent;
          }

        });
    }


    this.files.forEach(function(f) {
      f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {

        var extname, basename, dirname, destpath, content, matches, preprocessor;

        extname = path.extname(filepath);
        dirname = extname.length ? extname.substr(1) : '';
        basename = path.basename(filepath, extname);
        destpath = path.resolve(f.dest, basename + options.ext);
        content = expandDeepRequire(filepath, true);


        grunt.file.write(destpath, content);

        grunt.log.writeln('File "' + destpath + '" created.');
      });

    });
  });

};
