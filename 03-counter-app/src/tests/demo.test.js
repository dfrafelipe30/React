describe( 'Pruebas en el archivo demo.test.js', () => {
    
    
    test( 'Deben der iguales los strings', () => {

        // Inicialización
        const mensaje = 'Hola Mundo';
    
        // Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // Observar el comportamiento
        expect( mensaje ).toBe(mensaje2);
    
    
    })
    
})
