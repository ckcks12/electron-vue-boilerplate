# electron-vue-boilerplate
Simple. All we need is just like this "simple" boilerplate.

# How to use
It's simple too.
```bash
git clone https://github.com/ckcks12/electron-vue-boilerplate.git
cd electron-vue-boilerplate
npm i
webpack
electron .
```
I hope you use `yarn` instead of the shit `npm`

# Notice
`import` is `require().default`

`import` **is not** `require()`

`import` is for `export default`

`require` is for `module.exports`

Above is the fucking ES6 import system that saving memory from loading entire module. Instead, load a part of module.
