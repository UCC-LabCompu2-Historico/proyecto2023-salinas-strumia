/**
 * calcula los totales de cada producto
 * @method calculo
 * @param {number} valor - contiene el valor del imput que ingresa el usuario
 */
function calculo() {
    var cant = parseInt(document.getElementById("Cantidad").value)||0;
    var pUnit=parseInt(document.getElementById("PrecUnit").value) || 0;
    var iva = parseInt(document.getElementById("cantIva").value)||0;
    var subt = cant*pUnit;
    var cantIva = (subt*iva)/100;
    var total=subt+cantIva;

    document.getElementById("IVA").value= cantIva;
    document.getElementById("Total").value=total;
}


