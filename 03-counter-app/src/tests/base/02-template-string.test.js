import'@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test( 'prueba en el método getSaludo', () => {
        const nombre = 'Daniel';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe( 'Hola ' + nombre);
    })

    // getSaludo debe retornar Carlos si no hay argumento de nombre

    test(' Prueba en el método getSaludo sin nombre', () => {

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    })
    
})
