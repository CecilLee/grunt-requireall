# grunt-requireall

> no, require all!

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-requireall --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-requireall');
```

## The "requireall" task

### Overview
In your project's Gruntfile, add a section named `requireall` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  requireall: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.assetRootPath
Type: `String`
Default value: `'./assets/'`

资源根目录，要require的资源文件都在该资源目录中查找

#### options.ext
Type: `String`
Default value: `'.required.js'`

处理后的文件的后缀，比如list.js -> list.required.js , list.debug.js -> list.debug.required.js

#### options.htmlDir
Type: `String`
Default value: `'html'`

require的html文件的目录名，该目录名会位于opitons.assetRootPath指定的资源根目录下

#### options.jsDir
Type: `String`
Default value: `'js'`

require的js文件的目录名，该目录名会位于opitons.assetRootPath指定的资源根目录下

#### options.cssDir
Type: `String`
Default value: `'css'`

require的css文件的目录名，该目录名会位于opitons.assetRootPath指定的资源根目录下

#### options.lessDir
Type: `String`
Default value: `'less'`

require的less文件的目录名，该目录名会位于opitons.assetRootPath指定的资源根目录下

#### options.tmplDir
Type: `String`
Default value: `'tmpl'`

require的tmpl文件的目录名，该目录名会位于opitons.assetRootPath指定的资源根目录下

#### options.tmplEngine
Type: `String`
Default value: `'dot'`

require的tmpl后缀的文件内容，将会作为模板，使用模板引擎编译为function，tmplEngine则是模板引擎的包名，默认使用dot

#### options.tmplEngineCompileMethod
Type: `String`
Default value: `'template'`

模板引擎编译模板的方法名称,默认为template，代码示例：require(options.tmplEngine)[options.tmplEngineCompileMethod]


#### options.tmplRequireAfter
Type: `Functiton`
Default value: `Function`

模板引擎编译后的function代码，需要经过该function的处理


### Usage Examples

#### Default Target

```js
grunt.initConfig({
  requireall: {
    options: {},
    files: {
      'build/': ['src/*.debug.js'],
    },
  },
});
```

#### Test Target

```js
grunt.initConfig({
  requireall: {
    test_target: {
      options: {
        assetRootPath: './test/fixtures/assets',
      },
      src: './test/fixtures/src/*.js',
      dest: './test/fixtures/build/',
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
