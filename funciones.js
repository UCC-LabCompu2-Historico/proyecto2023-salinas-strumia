/**
 * calcula los totales de cada producto
 * @method calculo
 * @param {number} valor - contiene el valor del imput que ingresa el usuario
 */
function calculoA() {
    const cant = parseInt(document.getElementById("Cantidad").value)||0;
    const pUnit=parseInt(document.getElementById("PrecUnit").value) || 0;
    const iva = parseInt(document.getElementById("cantIva").value)||0;
    const subt = cant*pUnit;
    const cantIva = (subt*iva)/100;
    const total=subt+cantIva;

    document.getElementById("IVA").value= cantIva;
    document.getElementById("Total").value=total;
}

function calculoB(){
    const cant=parseInt(document.getElementById("cant").value)||0;
    const pUnit=parseInt(document.getElementById("pUnit").value)||0;
    const total=cant*pUnit;

    document.getElementById("total").value=total;
}

/*
function generarFilas() {
    var cantidadProductos = parseInt(document.getElementById("cant_de_itemns").value);
    var filaBase = document.getElementById("filaBase");
    var tbody = document.getElementById("filasFactura");

    for (var i = 0; i < cantidadProductos; i++) {
        var fila = filaBase.cloneNode(true);
        fila.removeAttribute("id");
        fila.style.display = "";

        // Asignar identificadores únicos a los campos de entrada
        fila.getElementsByClassName("descripcion")[0].name = "Descripcion_" + i;
        fila.getElementsByClassName("cantidad")[0].name = "Cantidad_" + i;
        fila.getElementsByClassName("precio")[0].name = "PrecUnit_" + i;
        fila.getElementsByClassName("iva")[0].name = "cantIva_" + i;
        fila.getElementsByClassName("iva")[0].onchange = calculo;
        fila.getElementsByClassName("iva")[0].id = "cantIva_" + i;
        fila.getElementsByClassName("iva")[0].setAttribute("data-index", i);
        fila.getElementsByClassName("iva")[0].value = 0;
        fila.getElementsByClassName("iva")[0].onchange();

        tbody.appendChild(fila);
    }
}*/

window.addEventListener('DOMContentLoaded', (event) => {
    // Obtener los datos ingresados en el formulario
    const nombre = localStorage.getItem('nombre');
    const cuit = localStorage.getItem('cuit');
    const actividadPrincipal = localStorage.getItem('actividad_principal');
    const logotipo = localStorage.getItem('logotipo');

    // Actualizar los elementos del resumen de la factura con los datos obtenidos
    document.getElementById('nombre').textContent = nombre;
    document.getElementById('cuit').textContent = cuit;
    document.getElementById('actividad_principal').textContent = actividadPrincipal;
    document.getElementById('logotipo').src = logotipo;
});