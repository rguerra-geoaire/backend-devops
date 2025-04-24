import { describe, test } from "@jest/globals";
import { restar, suma } from "../../src/app/calculadora";

describe("Suite de test de calculadora", () => {

    test("probar suma de enteros", () => {

        expect(suma(1, 1)).toBe(2);
        expect(suma(10, 15)).toBe(25);
        expect(suma(10, 15)).not.toBe(30);

        let a: any = "10";
        let b: any = "15";
        expect(suma(a, 15)).toBeNaN();
        expect(suma(a, b)).toBeNaN();

        a = 1.5
        expect(suma(a, 15)).toBe(16.5)

        a = null
        expect(suma(a, 15)).toBeNaN();

        a = Math.PI
        expect(suma(a, 15)).toBeCloseTo(18.14, 2);

        a = -10
        expect(suma(a, 15)).toBe(5);

        a = undefined
        expect(() => { suma(a, 15) }).toThrow("No se puede sumar indefinidos");
    });

    test("probar resta de enteros", () => {

        expect(restar(10, 1)).toBe(9);

        let a: any = "10";
        expect(restar(a, 1)).toBeNaN();

        a = undefined
        expect(() => { restar(a, 1) }).toThrow("No se puede restar indefinidos");
    })
});