let edad;
 edad= parseInt(prompt ("Ingrese su edad:"));
switch (edad) {
    case 18:
        console.log(`Es mayor de edad`);
                break;
    default:
        console.log(`La edad ingresada no cumple con los parámetros`);
        break;
}
