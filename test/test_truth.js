'use strict';

const { assert, expect } = require('chai')

describe('The Truth', function() {
  it('should be thruthly thrue, definitelly', function() {
    expect(true).to.false
  })

  it('should not be falseay, definitelly', function() {
    expect(true).to.not.true
  })
})