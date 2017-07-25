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

### `import` and `require()` is not the fucking same
`import` is `require().default`

`import` **is not** `require()`

`import` is for `export default`

`require` is for `module.exports`

Above is the fucking ES6 import system that saving memory from loading entire module. Instead, load a part of module.

### `require('electron')` is *FUCKING WRONG*
If you just use above code in the renderer process, you just gonna encounter really weird error like `Can't resolve *fucking* fs module *so go to hell dude*` and so on. To fix that, you should load electron module like below.
```javascript
const electron = window.require('electron')
```
I said webpack is really fucking shit. It's terrible and horrible. Its bugs are more than the people on the planet. I really hate this shit idiot library. YOU GONNA GO TO HELL FUCKER!

reference : https://github.com/electron/electron/issues/7300
