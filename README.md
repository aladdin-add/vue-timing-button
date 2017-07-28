# vue-timing-button (WIP)

A Vue.js component

<p align="center">
  <a href="https://circleci.com/gh/https://github.com/Aladdin-ADD/vue-timing-button">
    <img src="https://circleci.com/gh/https://github.com/Aladdin-ADD/vue-timing-button.svg?style=svg" alt="Build Status" />
  </a>
  <a href="https://coveralls.io/github/https://github.com/Aladdin-ADD/vue-timing-button?branch=master">
    <img src="https://coveralls.io/repos/github/https://github.com/Aladdin-ADD/vue-timing-button/badge.svg?branch=master&style=flat-square" alt="Coverage Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License" />
  </a>
  <a href="https://npmjs.org/package/vue-timing-button">
    <img src="https://img.shields.io/npm/v/vue-timing-button.svg?style=flat-square" alt="Packagist" />
  </a>
  <a href="https://github.com/https://github.com/Aladdin-ADD/vue-timing-button/releases">
    <img src="https://img.shields.io/github/release/https://github.com/Aladdin-ADD/vue-timing-button.svg?style=flat-square" alt="Latest Version" />
  </a>

  <a href="https://github.com/https://github.com/Aladdin-ADD/vue-timing-button/issues">
    <img src="https://img.shields.io/github/issues/https://github.com/Aladdin-ADD/vue-timing-button.svg?style=flat-square" alt="Issues" />
  </a>
</p>
<img src="http://chuantu.biz/t5/153/1501277235x3683603338.gif"/>

### Installation
```
npm install --save vue-timing-button
```

or

```
yarn add vue-timing-button
```
### Usage

```js
import vueTimingButton from 'vue-timing-button'; // esm.
const vueTimingButton = requre('vue-timing-button'); // cjs.
```
```html
<timing-button :inital-seconds="5"></timing-button>
```
### Props
Name | required | default | Description
----- | ----- | ----- | -----
initalSeconds | ❌ | 60 | 间隔x秒可再次点击
initalMessage | ❌ | "点击发送验证码" | 默认展示文字
initalSeconds | ❌ | "{{seconds}}s后可再次发送" | 点击后展示文字,可以使用{{seconds}}代替第x秒
cb | ❌ | () => console.log("you clicked the button") | 点击后需执行的回调函数
## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email hh_2013@foxmail.com instead of using the issue tracker.

## Credits

- [薛定谔的猫](https://github.com/Aladdin-ADD/)
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/https://github.com/Aladdin-ADD
[link-contributors]: ../../contributors
