module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-extend-native': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  'globals': {
    'fetch': false,
    'localStorage': false,
    'console': false,
    '$': false,
    'alert': false,
    'reject': false,
    'resolve': false,
    'Image': false,
    'FileReader': false,
    'FormData': false,
    'XMLHttpRequest': false,
    'URL': false
  }
}
