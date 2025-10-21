import { IsEven ,Divide} from "./calculator";

describe('calculator', () => {
    test('ThereAreEvenNumber_NumberIsEven_True', () => {
        expect(IsEven(4)).toBe(true);
    });

    

    test.each([])('ThereAreOddNumber_NumberIsEven_False', () => {
        expect(IsEven(3)).toBe(false);
    });
    
    test('ThereAreTwoNumbers_TryDivideByZero_ShouldThrowError', () => {
        expect(() => Divide(10, 0)).toThrow("На ноль делить нельзя");
    });
 });

 export {};

 // Given _ When _ Then