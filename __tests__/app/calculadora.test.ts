import { describe, test } from "@jest/globals";
import { suma } from "../../src/app/calculadora";
describe("Suite de test de calculadora", () => {

    test("probar suma de enteros", () => {

        let a: any = "10";

        expect(suma(1, 1)).toBe(2);
        expect(suma(10, 15)).toBe(25);
        expect(suma(10, 15)).not.toBe(30);
        expect(suma(a, 15)).toBeNaN();
    });

});