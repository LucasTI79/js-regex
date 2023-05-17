const { describe, it } = require('mocha')
const { expect } =require('chai')
const { InvalidRegexError, evaluateRegex } = require('../src/util/InvalidRegexError')

describe('Util', () => { 
  it('#evaluateRegex should throw an error using an unsafe regex', () => {
    const unsafeRegex = /([a-zA-Z0-9]+\s?)+$/
    expect(() => evaluateRegex(unsafeRegex)) 
      .to.throw(InvalidRegexError, `This ${unsafeRegex} is unsafe dude!`)
  })

  it('#evaluateRegex should not throw an error using an safe regex', () => {
    const sageRegex = /^([a-z])$/
    expect(() => evaluateRegex(sageRegex))
      .to.not.throw
    expect(evaluateRegex(sageRegex)).to.be.ok
  })
})