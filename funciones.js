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
    let cantFilas = document.getElementById('cant_de_itemns').value;
    if (isNaN(cantFilas)||cantFilas<=0){
        alert('Por favor ingrese un valor numerico positivo');
        return;
    }

    window.location.href='Factura_A.html?filas=' +cantFilas;
}



function cargarPaginaA(cuerpoTabla1 = cuerpoTabla) {
    let url= new URLSearchParams(window.location.search);
    let cantFilas = url.get('filas');


    let tbody=document.createElement('cuerpoTabla');
    for (let i=0; i<cantFilas; i++){
        let fila = cuerpoTabla1.insertRow(i);

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
    let cantFilas = document.getElementById('cant_de_itemns').value;
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
        let cuerpoTablaB;
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

window.addEventListener('DOMContentLoaded', () => {
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
function canvas() {
    let i;
// Obtener referencia al canvas y su contexto
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    // Obtener los datos del vendedor, usuario y el IVA
    let vendedorNombre = document.getElementById("vendedorNombre").textContent;
    let vendedorCuit = document.getElementById("vendedorCuit").textContent;
    let Act_principal = document.getElementById("Act_principal").textContent;

    // Obtener los datos del comprador
    let compradorNombre = document.getElementById("compradorNombre").textContent;
    let compradorCuit = document.getElementById("compradorCuit").textContent;
    let compradorTelefono = document.getElementById("compradorTelefono").textContent;
    let compradorDireccion = document.getElementById("compradorDireccion").textContent;

    // Obtener la información de los productos del formulario
    let productos = [];
    // Obtener los valores de los productos ingresados por el usuario
    let descripcionInputs = document.getElementsByClassName("descripcion");
    let precioInputs = document.getElementsByClassName("precio");

    for (i = 0; i < descripcionInputs.length; i++) {
        let descripcion = descripcionInputs[i].value;
        let precio = parseFloat(precioInputs[i].value) || 0;

        if (descripcion && precio > 0) {
            // Agregar el producto a la lista de productos
            productos.push({
                descripcion: descripcion,
                precio: precio
            });
        }
    }

    // Dibujar la información en el lienzo VENDEDOR
    ctx.font = "16px Arial";
    ctx.fillText("Información del VENDEDOR:", 10, 30);
    ctx.fillText("Nombre: " + vendedorNombre, 10, 50);
    ctx.fillText("CUIT: " + vendedorCuit, 10, 70);
    ctx.fillText("Actividad Principal: " + Act_principal, 10, 90);

    // Dibujar la información en el lienzo COMPRADOR
    ctx.font = "16px Arial";
    ctx.fillText("Información del COMPRADOR:", 10, 130);
    ctx.fillText("Nombre: " + compradorNombre, 10, 150);
    ctx.fillText("CUIT: " + compradorCuit, 10, 170);
    ctx.fillText("Telefono: " + compradorTelefono, 10, 190);
    ctx.fillText("Direccion: " + compradorDireccion, 10, 210);

    // Dibujar la información de los productos
    ctx.fillText("Productos:", 10, 250);
    let y = 270; // Coordenada Y para dibujar los productos
    for (i = 0; i < productos.length; i++) {
        let producto = productos[i];
        let descripcionProducto = producto.descripcion;
        let precioProducto = producto.precio;
        ctx.fillText(descripcionProducto + ": $" + precioProducto, 10, y);
        y += 20; // Incrementar la coordenada Y para el próximo producto
    }

    // Dibujar el logotipo (si está disponible)
    let logotipo = document.getElementById("vendedorLogo");
    if (logotipo.complete) {
        ctx.drawImage(logotipo, 10, y + 40, 100, 100);
    } else {
        logotipo.onload = function() {
            ctx.drawImage(logotipo, 10, y + 40, 100, 100);
        };
    }
}

// Llamar a la función canvas() cuando se cargue la página
window.addEventListener('load', canvas);


