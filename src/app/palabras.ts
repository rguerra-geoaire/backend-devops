export const esPalindromo = (frase: string) => {
    if (!frase) {
        return false;
    }
    const fraseSinEspacios = frase.replace(/\s/g, "").toLowerCase();
    const fraseInvertida = fraseSinEspacios.split("").reverse().join("");
    return fraseSinEspacios === fraseInvertida;
}