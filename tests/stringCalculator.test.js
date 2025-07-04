import{describe,it,expect} from 'vitest';
import { add } from '../src/stringCalculator'

describe('String Calculator - KATA',()=>{

    it("should return 0 for empty string'",()=>{
        expect(add("")).toBe(0)
    })

    it("should return the number itself incase of single input",()=>{
        expect(add("1")).toBe(1)
    })

    it("should return the sum of 2 numbers present in string separated by commas",()=>{
        expect(add("2,3")).toBe(5)
    })

    it("should return the sum of n numbers present in string separated by commas",()=>{
        expect(add("2,3,4")).toBe(9)
    })

    it("should return the sum of number while handling the new lines between numbers",()=>{
        expect(add("1,2\n,3")).toBe(6)
    })

    it("should return the sum while handling the custom delimiters",()=>{
        expect(add("//;\n1;2")).toBe(3);
    })

})