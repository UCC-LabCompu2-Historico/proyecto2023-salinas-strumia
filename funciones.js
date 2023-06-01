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

const generarFilas_FACTURA_A = () => {
    const cantidadProductos = parseInt(localStorage.getItem('cant_de_itemns'));
    const filasProductos = document.getElementById('filas-productos');

    /* Limpiar filas previas
    filasProductos.innerHTML = '';*/

    for (let i = 1; i <= cantidadProductos; i++) {
        const fila = `
      <tr>
        <td><input type="text" name="descripcion-${i}" placeholder="Descripción"></td>
        <td><input type="number" name="cantidad-${i}" placeholder="Cantidad" onchange="calcularTotal(${i})"></td>
        <td><input type="number" name="precio-${i}" placeholder="Precio Unitario" onchange="calcularTotal(${i})"></td>
        <td>
          <select name="porcentajeIva-${i}" onchange="calcularTotal(${i})">
            <option value="0">0%</option>
            <option value="10.5">10.5%</option>
            <option value="21">21%</option>
            <option value="27">27%</option>
          </select>
        </td>
        <td><input type="text" name="iva-${i}" placeholder="IVA" readonly></td>
        <td><input type="text" name="total-${i}" placeholder="Total" readonly></td>
      </tr>
    `;
        filasProductos.innerHTML += fila;
    }
};