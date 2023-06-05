/**
 * Calcula los totales de cada producto de factura A
 * @method calculoA
 * @param {number} fila - Contiene el valor del input que ingresa el usuario de cantidad de productos
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
/**
 * Calcula los totales de cada producto de factura B/C
 * @method calculoB
 * @param {number} fila - Contiene el valor del input que ingresa el usuario de cantidad de productos
 */
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
/**
 * Genera una TABLA en la factura A(filas:cantidad de productos ingresados; columnas: datos del producto)
 * @method generarTablaA
 */
function generarTablaA(){
    let cantFilas = document.getElementById('cant_de_itemns').value;
    if (isNaN(cantFilas)||cantFilas<=0){
        alert('Por favor ingrese un valor numerico positivo');
        return;
    }

    window.location.href='Factura_A.html?filas=' +cantFilas;
}


/**
 * crea una tabla con un número determinado de filas y celdas utilizando los parámetros de la URL,
 * y establece clases y atributos en los elementos para permitir su manipulación posterior, como el cálculo del IVA y el total
 * @method cargarPaginaA
 * @param {number} cuerpoTabla1 - Variable utilizada para representar objetos o elementos de tabla en el documento HTML
 */
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
        ivaCaluladoCell.innerHTML='<input type="text" name="IVA" placeholder="IVA" class="Civa" id="' + ivaCalculadoId +'" readonly>'
        ivaCaluladoCell.classList.add('ivaCalculado');

        let totalCell=fila.insertCell(5);
        let totalId='Total_' + (i+1);
        totalCell.innerHTML='<input type="text" name="Total" placeholder="Total" id="' + totalId +'" class="total" readonly>';
        totalCell.classList.add('total');
    }
}
/**
 * Genera una TABLA en la factura B (filas:cantidad de productos ingresados; columnas: datos del producto)
 * @method generarTablaB
 */
function generarTablaB(){
    let cantFilas = document.getElementById('cant_de_itemns').value;
    if (isNaN(cantFilas)||cantFilas<=0){
        alert('Por favor ingrese un valor numerico positivo');
        return;
    }
    window.location.href='FacturaB_C.html?filas=' +cantFilas;
}
/**
 * crea una tabla con un número determinado de filas y celdas utilizando los parámetros de la URL,
 * y establece clases y atributos en los elementos para permitir su manipulación posterior, como el cálculo del IVA y el total
 * @method cargarPaginaB
 */
function cargarPaginaB(cuerpoTabla2=cuerpoTablaB){
    let url= new URLSearchParams(window.location.search);
    let cantFilas = url.get('filas');

    let tbody=document.createElement('cuerpoTablaB');
    for (let i=0; i<cantFilas; i++){
        let fila = cuerpoTabla2.insertRow(i);

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
/**
 * Obtiene la información de los productos del formulario de la factura de tipo A
 * @method enviarDatos
 */
function enviarDatos(){
    let cuerpoTabla=document.getElementById('cuerpoTabla');
    let filas=cuerpoTabla.getElementsByTagName('tr');

    let produtos=[];
    for (let i=0; i<filas.length; i++){
        let descripcion=filas[i].querySelector(' .descripcion').value;
        let cantidad = parseFloat(filas[i].querySelector(' .cantidad').value);
        let precioUnitario=parseFloat(filas[i].querySelector(' .precio').value);
        let selectorIva=filas[i].querySelector(' .iva');
        let iva=parseFloat(selectorIva.options[selectorIva.selectedIndex].value);
        let ivaCalculado = parseFloat(filas[i].querySelector(' .ivaCalculado input').value);
        let total = parseFloat(filas[i].querySelector(' .total input').value);

        let producto ={
            descripcion: descripcion,
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            iva: iva,
            ivaCalculado: ivaCalculado,
            total: total
        };
        produtos.push(producto);
    }

    sessionStorage.setItem('productos', JSON.stringify(produtos));
    window.location.href='Factura_final.html';
}
/**
 * Dibuja en un lienzo CANVAS la informacion de la factura A
 * @method dibujarCanvas
 */
function dibujarCanvas(){
    let canvas=document.getElementById('canvas');
    let ctx=canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.font='bold 15px Helvetica';
    let productos=JSON.parse(sessionStorage.getItem('productos'));

    let x=10;
    let y=10;
    let espacio=20;

    for (let i=0; i<productos.length; i++){
        y += espacio;
        let descripcion= productos[i].descripcion;
        let cantidad = productos[i].cantidad;
        let precioUnitario=productos[i].precioUnitario;
        let iva= productos[i].iva;
        let ivaCalculado = productos[i].ivaCalculado;
        let total = productos[i].total;

        ctx.fillText(descripcion, x, y);
        ctx.fillText('Cantidad: ' + cantidad, x, y +20)
        ctx.fillText('Precio unitario: ' +precioUnitario, x, y +40);
        ctx.fillText('Iva:' +iva + '%', x, y +60);
        ctx.fillText('Iva total: ' +ivaCalculado.toFixed(2), x, y +80);
        ctx.fillText('Total: ' +total.toFixed(2), x, y +100);

        y +=120;
    }
}
/**
 * Obtiene la información de los productos del formulario de la factura de tipo B/C
 * @method enviarDatosB
 */
function enviarDatosB(){
    let cuerpoTablaB=document.getElementById('cuerpoTablaB');
    let filasB=cuerpoTablaB.getElementsByTagName('tr');

    let produtosB=[];
    for (let i=0; i<filasB.length; i++){
        let descripcion=filasB[i].querySelector(' .descripcion').value;
        let cantidad = parseFloat(filasB[i].querySelector(' .cantidad').value);
        let precioUnitario=parseFloat(filasB[i].querySelector(' .precio').value);
        let total = parseFloat(filasB[i].querySelector(' .total input').value);

        let productoB ={
            descripcion: descripcion,
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            total: total
        };
        produtosB.push(productoB);
    }

    sessionStorage.setItem('productosB', JSON.stringify(produtosB));
    window.location.href='Factura_finalB.html';

}
/**
 * Dibuja en un lienzo CANVAS la informacion de la factura B/C
 * @method dibujarCanvasB
 */
function dibujarCanvasB(){
    let canvasB=document.getElementById('canvasB');
    let ctx=canvasB.getContext('2d');
    ctx.clearRect(0,0, canvasB.width, canvasB.height);

    ctx.font='bold 15px Time new roman';
    let productosB=JSON.parse(sessionStorage.getItem('productosB'));

    let xB=10;
    let yB=10;
    let espacio=20;

    for (let i=0; i<productosB.length; i++){
        yB += espacio;
        let descripcion= productosB[i].descripcion;
        let cantidad = productosB[i].cantidad;
        let precioUnitario=productosB[i].precioUnitario;
        let total = productosB[i].total;

        ctx.fillText(descripcion, xB, yB);
        ctx.fillText('Cantidad: ' + cantidad, xB, yB +20)
        ctx.fillText('Precio unitario: ' +precioUnitario, xB, yB +40);
        ctx.fillText('Total: ' +total.toFixed(2), xB, yB +100);

        yB +=120;
    }
}
