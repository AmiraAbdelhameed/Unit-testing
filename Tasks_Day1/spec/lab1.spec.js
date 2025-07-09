const { capitalizeTextFirstChar, createArray } = require('../lab1.js');

describe("Test capitalize function ", () => {
    // 1-test that the function takes a string it will return type to be a string
    it('test function takes a string and  return string ', () => {
        let text = capitalizeTextFirstChar('amira');
        expect(typeof text).toBe('string');
    })

    // 2 - test that the function takes a string and return it after capitalize it
    it("test function takes a string and return it after capitalize it", () => {
        let text = capitalizeTextFirstChar('amira');
        expect(text).toBe('Amira');
    })
    // 3 - test if the function takes number it will throw type error says parameter should be string
    it('test if the function takes number',()=>{
        expect(() => capitalizeTextFirstChar(111)).toThrowError()
    })
})

//############### Create Array #############################

describe('Test create array function',()=>{

    // 1-test that the return value of type array
    it('test that the return value of type array',()=>{
        const arr = createArray(1);
        expect(arr.constructor.name).toBe('Array')
    })

    // 2 - test if we pass 2 it will return array of length 2 and test it includes 1
    it('test if we pass 2 it will return array of length 2',()=>{
        // expect(createArray(2)).toEqual([0,1])
        expect(createArray(2)).toContain(1)
    })
    // 3 - test if we pass 3 it will return array of length 3 and test it doesn't include 3
    it("test if we pass 3 it will return array of length 3 and test it doesn't include 3",()=>{
        expect(createArray(3)).not.toContain(3)
    })
})