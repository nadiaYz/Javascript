//3) Genere 2 prompt: uno que guarde el nombre del usuario y otro que permita al usuario ingresar una nota de menos de 30 caracteres.

// TODOS LOS PUNTOS TIENEN QUE HACERSE CON FUNCIONES. CADA PUNTO PUEDE EXPRESARSE COMO UNA FUNCIÓN. LAS RESPONSABILIDADES DEBEN ESTAR SEPARADAS.
//UTILICE FUNCIONES QUE RECIBAN PARÁMETROS Y PASE ARGUMENTOS EN LA LLAMADA.

// a) Verifique que la entrada del usuario sea menor a 30 caracteres. En el caso de que no lo sea, envíe una alerta con la siguiente frase: "Esta entrada excede la cantidad de caracteres disponibles."
// b) En el caso de que el ingreso sea correcto, envíe una alerta que muestre el nombre del usuario y la nota que acaba de ingresar.
// c) Realice un bucle que envíe tres cuadros de diálogo confirm que sean las solicitudes de amistad de nuevos contactos. En cada iteración se debe poder visualizar el mensaje: "El usuario ${i} te envió una solicitud de amistad".

function entradaDeUsuario () {
    let nombreDeUsuario = prompt('Nombre de Usuario');
    console.log(nombreDeUsuario);
    alert('Bienvenido ' + nombreDeUsuario);
    let entradaBlog = prompt('Ingrese su mensaje');
    console.log(entradaBlog);
    let límite = 30;
    entradaBlog.length
    if(entradaBlog.length > límite) {
        alert('Esta entrada excede la cantidad de caracteres disponibles.')
        entradaDeUsuario();
    }
    else{
        alert('Entrada realizada correctamente');
        alert(nombreDeUsuario + ':' +' '+ entradaBlog);
        bucleSolicitudes();
    }
}
entradaDeUsuario();

function bucleSolicitudes () {
    for (let i = 1; i < 4; i++) {
        confirm(`El usuario ${i} te envió una solicitud de amistad`);
    }
}