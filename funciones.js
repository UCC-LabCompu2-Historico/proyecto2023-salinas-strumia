/**
 * calcula los totales de cada producto
 * @method calculo
 * @param {number} valor - contiene el valor del imput que ingresa el usuario
 */
function calculoA(fila) {
    const cant = parseFloat(fila.querySelector(' .cantidad').value)||0;
    const pUnit=parseFloat(fila.querySelector(' .precio').value) || 0;
    const iva = parseFloat(fila.querySelector('.iva').value)||0;
    if (isNaN(pUnit)|| isNaN(cant)||pUnit<0||cant<0){
        alert('Los valores ingresados no pueden ser valores negativos ni letras');
        fila.querySelector(' .cantidad').value=' ';
        fila.querySelector(' .precio').value=' ';
        fila.querySelector('.iva').value=' ';
        fila.querySelector(' .IVA').value=' ';
        return;
    }
    const subt = cant*pUnit;
    const cantIva = (subt*iva)/100;
    const total=subt+cantIva;

    fila.querySelector(' .ivaCalculado input').value= cantIva.toFixed(2);
    fila.querySelector(' .total input').value=total.toFixed(2);
}

function calculoB(fila){
    const cant = parseFloat(fila.querySelector(' .cantidad').value)||0;
    const pUnit=parseFloat(fila.querySelector(' .precio').value) || 0;

    if (isNaN(pUnit)|| isNaN(cant)||pUnit<0||cant<0){
        alert('Los valores ingresados no pueden ser valores negativos ni letras');
        fila.querySelector(' .cantidad').value=' ';
        fila.querySelector(' .precio').value=' ';
        return;
    }

    const total=cant*pUnit;

    fila.querySelector(' .totalB input').value=total.toFixed(2);
}

function generarTablaA(){
    var cantFilas=document.getElementById('cant_de_itemns').value;
    if (isNaN(cantFilas)||cantFilas<=0){
        alert('Por favor ingrese un valor numerico positivo');
        return;
    }

    window.location.href='Factura_A.html?filas=' +cantFilas;
}



function cargarPaginaA(){
    let url= new URLSearchParams(window.location.search);
    let cantFilas = url.get('filas');


    let tbody=document.createElement('cuerpoTabla');
    for (let i=0; i<cantFilas; i++){
        let fila = cuerpoTabla.insertRow(i);

        let descripcionCell=fila.insertCell(0);
        let descripcionId= "Descripcion_" +(i+1);
        descripcionCell.innerHTML= '<input type="text" name="Descripcion" placeholder="Descripcion" class="descripcion" id="' + descripcionId +'">'

        let cantidadCell=fila.insertCell(1);
        let cantidadId='Cantidad_' + (i+1);
        cantidadCell.innerHTML=' <input type="number" name="Cantidad" placeholder="Cant" class="cantidad" id="' + cantidadId +'" onchange="calculoA(this.parentNode.parentNode)" >'

        let precioUnitarioCell = fila.insertCell(2);
        let pUnitId='PrecUnit_' + (i+1);
        precioUnitarioCell.innerHTML='<input type="number" name="PrecUnit" placeholder="Precio unit." class="precio" id="' + pUnitId +'" onchange="calculoA(this.parentNode.parentNode)">'

        let ivaCell = fila.insertCell(3);
        let cantIvaId='cantIva_' + (i+1);
        ivaCell.innerHTML='<select name="porDeIva" class="iva" onchange="calculoA(this.parentNode.parentNode)" id="' + cantIvaId +'">\n' +
            '                <option value="0">0%</option>\n' +
            '                <option value="10.5">10.5%</option>\n' +
            '                <option value="21">21%</option>\n' +
            '                <option value="27">27%</option>\n' +
            '              </select>'

        let ivaCaluladoCell=fila.insertCell(4);
        let ivaCalculadoId='IVA_' + (i+1);
        ivaCaluladoCell.innerHTML='<input type="text" name="IVA" placeholder="IVA" class="iva" id="' + ivaCalculadoId +'" readonly>'
        ivaCaluladoCell.classList.add('ivaCalculado');

        let totalCell=fila.insertCell(5);
        let totalId='Total_' + (i+1);
        totalCell.innerHTML='<input type="text" name="Total" placeholder="Total" id="' + totalId +'" class="total" readonly>';
        totalCell.classList.add('total');
    }
}
function generarTablaB(){
    var cantFilas=document.getElementById('cant_de_itemns').value;
    if (isNaN(cantFilas)||cantFilas<=0){
        alert('Por favor ingrese un valor numerico positivo');
        return;
    }
    window.location.href='FacturaB_C.html?filas=' +cantFilas;
}
function cargarPaginaB(){
    let url= new URLSearchParams(window.location.search);
    let cantFilas = url.get('filas');

    let tbody=document.createElement('cuerpoTablaB');
    for (let i=0; i<cantFilas; i++){
        let fila = cuerpoTablaB.insertRow(i);

        let descripcionCell=fila.insertCell(0);
        let descripcionId='Descripcion_' + (i+1);
        descripcionCell.innerHTML= '<input type="text" name="Descripcion" placeholder="Descripcion" class="descripcion" id="' + descripcionId +'">'

        let cantidadCell=fila.insertCell(1);
        let cantidadId='cant_' + (i+1);
        cantidadCell.innerHTML=' <input type="number" name="Cantidad" placeholder="Cant" class="cantidad" id="' + cantidadId +'" onchange="calculoB(this.parentNode.parentNode)">'

        let precioUnitarioCell = fila.insertCell(2);
        let preUnitId='pUnit_' + (i+1);
        precioUnitarioCell.innerHTML='<input type="number" name="PrecUnit" placeholder="Precio unit." class="precio" id="' + preUnitId +'" onchange="calculoB(this.parentNode.parentNode)">'


        let totalCell=fila.insertCell(3);
        let totalId='total_' + (i+1);
        totalCell.innerHTML=' <input type="text" name="Total" placeholder="Total" class="total" id="' + totalId +'" readonly>';
        totalCell.classList.add('totalB');
    }
}

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