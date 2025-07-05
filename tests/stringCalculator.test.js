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

    //delimiters of format '//[delimiter]\n'
    it("should return the sum while handling the custom  ; delimiter ",()=>{
        expect(add("//;\n1;2")).toBe(3);
    })

    it("should return the sum while handling the custom  | delimiter",()=>{
        expect(add("//|\n1|2")).toBe(3);
    })

    it("should throw esception when negative numbers are encountered",()=>{
        expect(() => add("//|\n1|-2|5|6|-4")).toThrow("Negative numbers are not allowed: -2,-4");
    })

    it("should ignore numbers whose values are more than 1000",()=>{
        expect(add("2,1001")).toBe(2);
    })

    it("should return sum while handling delimiter of any length",()=>{
        expect(add("//[***]\n1***2")).toBe(3);
    })

    it("should return the sum while handling multiple delimiters",()=>{
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    })

    it("should return the sum while handling multiple delimiters with variable length",()=>{
        expect(add("//[**][%%]\n1**2%%5")).toBe(8)
    })
})