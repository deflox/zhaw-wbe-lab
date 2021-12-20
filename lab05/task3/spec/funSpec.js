const {findTag} = require('../index.js')

describe('test findTag', function() {
    it('should return "header" for "<header>Text</header"', function() {
        let input = '<header>Text</header'
        let expectedOutput = 'header'
        let output = findTag(input)
        expect(output).toEqual(expectedOutput)
    })
    it('it should return "undefined" for "test"', function() {
        let input = 'test'
        let output = findTag(input)
        expect(output).toBeUndefined()
    })
    it('should return "test" for "<<<<<<test>>>>>>"', function() {
        let input = '<<<<<<test>>>>>>'
        let expectedOutput = 'test'
        let output = findTag(input)
        expect(output).toEqual(expectedOutput)
    })
    it('should return "undefined" for "<p this is a test"', function() {
        let input = '<p this is a test'
        let output = findTag(input)
        expect(output).toBeUndefined()
    })
})

const {fibonacci} = require('../index.js')

describe('test fibonacci', function() {
    it('should return correct fibonacci numbers for n = 0..10', function() {
        let expectedResults = [0,1,1,2,3,5,8,13,21,34,55]
        for (let n = 0; n < expectedResults.length; n++) {
            let result = fibonacci(n)
            expect(result).toEqual(expectedResults[n])
        }
    })
    it('should return correct fibonacci number 6765 for n = 20', function() {
        expect(fibonacci(20)).toEqual(6765)
    })
    it('should return correct fibonacci number 832040 for n = 30', function() {
        expect(fibonacci(30)).toEqual(832040)
    })
})

const {equal} = require('../index.js')

describe('test equal', function() {
    it('should return true for "16" and "16"', function() {
        expect(equal(16,16)).toBeTrue()
    })
    it('should return true for "hi" and "hi"', function() {
        expect(equal('hi','hi')).toBeTrue()
    })
    it('should return true for "{}" and "{}"', function() {
        expect(equal({},{})).toBeTrue()
    })
    it('should return true for "{a:1, b:2}" and "{b:2, a:1}"', function() {
        expect(equal({a:1, b:2},{a:1, b:2})).toBeTrue()
    })
    it('should return false for "{a:1, b:2}" and "{c:3, b:2, a:1}"', function() {
        expect(equal({a:1, b:2},{c:3, b:2, a:1})).toBeFalse()
    })
    it('should return false for "{a:{}}" and "{a:{}}"', function() {
        expect(equal({a:{}},{a:{}})).toBeFalse()
    })
    it('should return true for "{a:emptyObj}" and "{a:emptyObj}"', function() {
        let emptyObj = {}
        expect(equal({a:emptyObj},{a:emptyObj})).toBeTrue()
    })
})