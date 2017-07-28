const rollup = require('rollup').rollup
const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('uglify-js')
const CleanCSS = require('clean-css')
const fs = require('fs')
const stylus = require('stylus')

rollup({
  entry: 'lib/index.js',
  plugins: [
    vue({
      compileTemplate: true,
      css (styles, stylesNodes) {
        write('dist/bundle.styl', styles)
        stylus.render(styles, function (err, css) {
          if (err) throw err
          write('dist/bundle.css', css)
          write('dist/bundle.min.css', new CleanCSS().minify(css).styles)
        })
      }
    }),
    buble()
  ]
})
  .then(function (bundle) {
    var code = bundle.generate({
      format: 'umd',
      moduleName: 'timingButton',
      useStrict: false
    }).code
    return write('dist/bundle.js', code).then(function () {
      return code
    })
  })
  .then(function (code) {
    var minified = uglify.minify(code, {
      fromString: true,
      output: {
        ascii_only: true
      }
    }).code
    return write('dist/bundle.min.js', minified)
  })
  .catch(logError)

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
      resolve()
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
