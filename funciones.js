/**
 * calcula los totales de cada producto
 * @method calculo
 * @param {number} valor - contiene el valor del imput que ingresa el usuario
 */

function calculo(id, valor) {
    let pUnit, cant, valiva, iva, total;
   if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    pUnit=Number(document.productos.precUnit.value);
    cant=Number(document.productos.Cantidad.value);
    valiva=Number(document.productos.porDeIva.value);
    iva=Number(document.productos.IVA.value);
    total=Number(document.productos.Total.value);
    iva=((pUnit*cant)*100)/valiva;
    total=(pUnit*cant)+iva;
}
