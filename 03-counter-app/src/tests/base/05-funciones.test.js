import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'dfrafelipe30'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    })
    
    //getUsuarioActivo

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Daniel';

        const usuarioActivoTest = (nombre) =>
        ({
            uid: 'ABC567',
            username: nombre
        });

        const usuarioActivo = getUsuarioActivo(nombre);

        expect( usuarioActivo).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })


})