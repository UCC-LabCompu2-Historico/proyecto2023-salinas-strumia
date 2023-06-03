/**
 * calcula los totales de cada producto
 * @method calculo
 * @param {number} valor - contiene el valor del imput que ingresa el usuario
 */
function calculoA(fila) {
    const cant = parseInt(document.getElementById("Cantidad_" +fila).value)||0;
    const pUnit=parseInt(document.getElementById("PrecUnit_" +fila).value) || 0;
    const iva = parseInt(document.getElementById("cantIva").value)||0;
    if (isNaN(pUnit)|| isNaN(cant)||pUnit<0||cant<0){
        alert('Los valores ingresados no pueden ser valores negativos ni letras');
        document.getElementById("PrecUnit_" +fila).value=' ';
        document.getElementById("Cantidad_" +fila).value=' ';
        document.getElementById("IVA_" +fila).value=' ';
        document.getElementById("Total_" +fila).value=' ';
        return;
    }
    const subt = cant*pUnit;
    const cantIva = (subt*iva)/100;
    const total=subt+cantIva;

    document.getElementById("IVA_" +fila).value= cantIva;
    document.getElementById("Total_" +fila).value=total;
}

function calculoB(){
    const cant=parseInt(document.getElementById("cant").value)||0;
    const pUnit=parseInt(document.getElementById("pUnit").value)||0;
    if (isNaN(pUnit)||isNaN(cant)||pUnit<0||cant<0){
        alert('Los valores ingresados no pueden ser negativos ni letras');
        document.getElementById("cant").value=' ';
        document.getElementById("pUnit").value=' ';
        document.getElementById("total").value=' ';
        return;
    }
    const total=cant*pUnit;

    document.getElementById("total").value=total;
}

function generarTablaA(){
    let cantFilas=parseInt(document.getElementById('cant_de_itemns').value);
    if (isNaN(cantFilas)||cantFilas<=0){
        alert('Por favor ingrese un valor numerico positivo');
        return;
    }

    window.location.href='Factura_A.html?filas=' +cantFilas;
}

function cargarPaginaA(){
    const url= new URLSearchParams(window.location.search);
    const cantFilas=parseInt(urlParams.get('filas'));

    let tabla = document.createElement('table');
    tabla.id='tabla';

    let thead=document.createElement('thead');
    let trHead=document.createElement('tr');
    let thDescripcion = document.createElement('th');
    thDescripcion.textContent='Descripcion'
    let thCantidad=document.createElement('th');
    thCantidad.textContent='Cantidad';
    let thPrecUnit=document.createElement('th');
    thPrecUnit.textContent="Precio Unitario";
    let thIva=document.createElement('th');
    thIva.textContent='% IVA';
    let thCIva=document.createElement('th');
    thCIva.textContent='IVA';
    let thTotal=document.createElement('th');
    thTotal.textContent='Total';

    trHead.appendChild(thDescripcion);
    trHead.appendChild(thCantidad);
    trHead.appendChild(thPrecUnit);
    trHead.appendChild(thIva);
    trHead.appendChild(thCIva);
    trHead.appendChild(thTotal);
    thead.appendChild(trHead);
    tabla.appendChild(thead);

    var tbody=document.createElement('tbody');
    for (let i=1; i<=cantFilas; i++){
        let tr =document.createElement('tr');

        let producto = document.createElement('td');
        producto.textContent='Producto_' +i;
        tr.appendChild(producto);

        let PrecUnit=document.createElement('td');
        let precioInput=document.createElement('input');
        precioInput.type='number';
        precioInput.id='PrecUnit_' +i;
        precioInput.oninput=function (){
            calculoA(i);
        };
        PrecUnit.appendChild(precioInput);
        tr.appendChild(PrecUnit);

        let Cantidad=document.createElement('td');
        let cantidadInput=document.createElement('input');
        cantidadInput.type="number";
        cantidadInput.id="Cantidad_" +i;
        cantidadInput.oninput=function (){
            calculoA(i);
        };
        Cantidad.appendChild(cantidadInput);
        tr.appendChild(Cantidad);

        let iva=document.createElement('td');
        let ivaSelect=document.createElement('select');
        ivaSelect.id='cantIva';
        ivaSelect.onchange=function (){
            calculoA(i);
        };
        let IVA=['0%','10.5%','21%','27%'];
        for (let j=0; j<IVA.length; j++){
            let opcion=document.createElement('opcion');
            opcion.value=parseFloat(IVA[j]);
            opcion.textContent=IVA[j];
            ivaSelect.appendChild(opcion);
        }
        iva.appendChild(ivaSelect);
        tr.appendChild(iva);

        let totalIva=document.createElement('td');
        let tIvaInput =document.createElement('input');
        tIvaInput.type='text';
        tIvaInput.id='IVA_' +i;
        tIvaInput.readOnly=true;
        totalIva.appendChild(tIvaInput);
        tr.appendChild(totalIva);

        let total=document.createElement('td');
        let totalInput=document.createElement('input');
        totalInput.type='text';
        totalInput.id='Total_'+i;
        totalInput.readOnly=true;
        total.appendChild(totalInput);
        tr.appendChild(total);

        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
}
if (window.location.href.indexOf('Factura_A')!==-1){
    window.onload=cargarPaginaA;
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