import express from 'express';
import { validateUser, validateUserForJwtToken } from '../auth.js';
import { configuration } from '../config.js';
import { esPalindromo } from '../app/palabras.js';
import { esPrimo } from '../app/numeros.js';
import { operar } from '../app/calculadora.js';

let mainRouter = express.Router();

mainRouter.get("/", (_req, res) => {
    res.send(`Hola mundo al usuario ${configuration.username}`);
});

mainRouter.get("/api-key", (_req, res) => {
    res.send(`la apikey de mi aplicacion es: ${configuration.apikey}`);
});

mainRouter.get("/operar", (req, res) => {
    const operacion = req.query.operacion as string;
    const num1 = parseInt(req.query.numuno as string);
    const num2 = parseInt(req.query.numdos as string);
    let resultado = operar(operacion, num1, num2);
    res.send(`El resultado de la operacion es: ${resultado}`);
});

mainRouter.get("/palindromo/:frase", (req, res) => {
    const { frase } = req.params
    res.send(`Hola, La frase ingresada ${esPalindromo(frase) ? "es" : "no es"} palindromo`);
});

mainRouter.get("/primo/:numero", (req, res) => {
    const { numero } = req.params
    res.send(`Hola, el numero ingresado ${esPrimo(+numero) ? "es" : "no es"} un numero primo`);
});

export default mainRouter;