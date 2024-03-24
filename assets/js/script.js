const validarBusqueda = () => (document.querySelector('#cuartos').value === '' || document.querySelector('#metrosDesde').value === '' || document.querySelector('#metrosHasta').value === '')?alert('Debe llenar todos los campos para filtrar propiedades'):true;
const mostrarPropiedades = (propiedades = propiedadesJson) => {
    let html = '';
    let cantidadPropiedades = 0;
    propiedades.forEach(propiedad => {
        cantidadPropiedades +=1;
        html += `
                    <div class="houseCard">
                    <img src=${propiedad.src} alt="propiedad">
                    <h2>${propiedad.nombre}</h2>
                    <div class="info">
                        <span>Cuartos:${propiedad.cuartos}</span>
                        <span>Metros:${propiedad.metros}</span>
                    </div>
                    <p>${propiedad.descripcion}</p>
                    <button type="button" id="verMas" class="buscar">Ver Más</button>
                    </div>
                `

    });
    document.querySelector('.propiedades').innerHTML = html;
    document.querySelector('#totalPropiedades').innerHTML = cantidadPropiedades;
}
const busquedaSinResultado = () =>{
    html=`
        <div class="busquedaSinResultado">
            <div>¡Lo siento Mucho!</div>
            <img src="./assets/img/mikasa.png" alt="mikasa">
            <div>No encontramos ninguna propiedad que se ajuste a lo que buscas.</div>
        </div>
    `
    document.querySelector('.propiedades').innerHTML = html;
    document.querySelector('#totalPropiedades').innerHTML = 0;
}

const filtrarPropiedades = () =>{
    if (validarBusqueda()){
    let propiedadesFiltradas = propiedadesJson.filter(function(propiedad){
        return (propiedad.cuartos === document.querySelector('#cuartos').value && parseInt(propiedad.metros) <= parseInt(document.querySelector('#metrosHasta').value) && parseInt(propiedad.metros) >= parseInt(document.querySelector('#metrosDesde').value))
    });
    if (propiedadesFiltradas.length === 0){
        busquedaSinResultado();
    }else{
        mostrarPropiedades(propiedadesFiltradas);
    }
    }
}