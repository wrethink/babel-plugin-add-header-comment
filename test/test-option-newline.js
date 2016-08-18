const assert = require('assert');
const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
const plugin = require('../src');

it('should work using comment line', () => {
  const expect = fs.readFileSync(path.join(__dirname, 'expect-option-newline'), 'utf8');

  const result = babel.transform('console.log("HEY GREAT COMMENT")', {
    plugins: [
      [plugin, {
        newLineChar: '&',
        header: [
          'A',
          'B',
          'C'
        ]
      }]
    ]
  });

  assert.equal(result.code, expect, 'output matched expected');
});