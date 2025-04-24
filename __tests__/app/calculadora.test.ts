import { describe, test } from "@jest/globals";
import { restar, suma, multiplicar, dividir, potencia, factorial, operar } from "../../src/app/calculadora";

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

    test("probar multiplicar", () => {

        let a: any = "1";
        expect(multiplicar(1,1)).toBe(1);
        expect(multiplicar(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {multiplicar(a,1)}).toThrow("No se puede multiplicar indefinidos")

    })

    test("probar dividir", () => {

        let a: any = "1";
        expect(dividir(1,1)).toBe(1);
        expect(dividir(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {dividir(a,1)}).toThrow("No se puede dividir indefinidos")

        expect(()=> {dividir(10,0)}).toThrow("No se puede dividir por 0")

    })

    test("probar potencia", () => {

        let a: any = "1";
        expect(potencia(1,1)).toBe(1);
        expect(potencia(a,1)).toBeNaN();

        a = undefined;
        expect(()=> {potencia(a,1)}).toThrow("No se puede hacer potencia con indefinidos")

       

    })

    test("probar factorial", () => {

        let a: any = "1";
        expect(factorial(1)).toBe(1);
        expect(factorial(a)).toBeNaN();

        a = undefined;
        expect(()=> {factorial(a)}).toThrow("No se puede hacer factoriales con indefinidos")

       

    })

    test("probar operar", () => {

        let a: any = "1";
        expect(operar("suma",1,1)).toBe(2);
        expect(operar("resta",1,1)).toBe(0);
        expect(operar("multiplicar",1,1)).toBe(1);
        expect(operar("dividir",1,1)).toBe(1);
        expect(operar("potencia",1,1)).toBe(1); 
        expect(operar("factorial",5,1)).toBe(120);
        

    })
});