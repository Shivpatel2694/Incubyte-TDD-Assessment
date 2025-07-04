import{describe,it,expect} from 'vitest';
import { add } from '../src/stringCalculator'

describe('String Calculator - KATA',()=>{
    it('return 0 for empty string',()=>{
        expect(add("")).toBe(0)
    })
})