'strict'
let listaComentarios = document.getElementById('ListaComentarios');
let nombres = [
    'Jymy Escobar', 'Oscar Orellana', 'Mario Garcia', 'Cludia Peréz', 'Dora López',
    'Anderson Ordoñez', 'Monica Hernandez', 'Evelyn Ortiz', 'Gaby Ortiz', 'Laura Estrada',
    'Pedro Rivera', 'Erick Denilson', 'Edgar Urizar', 'Daniel Schaad', 'Fabricio Garcia'
];
let comentarios = [
    '¡El restaurante fue increíble! La comida estuvo deliciosa y el servicio excelente. Sin duda, volveré.',
    'Disfruté mucho de la piscina. Estaba limpia y el ambiente era muy relajante.',
    'El canopy fue una experiencia emocionante. Las vistas desde las alturas son impresionantes.',
    'Nos divertimos mucho en las cuatrimotos. El recorrido fue desafiante pero muy entretenido.',
    'Las cabañas eran muy acogedoras y cómodas. Perfectas para desconectar y relajarse.',
    'Los Bumper Balls fueron una actividad súper divertida. Mis hijos lo disfrutaron muchísimo.',
    'El paseo en kayak por el río fue tranquilo y hermoso. Una forma perfecta de conectar con la naturaleza.',
    'El paseo en tractores fue una experiencia única. Nos llevaron por campos llenos de flores y paisajes impresionantes.',
    'El paseo en carretón fue encantador, una experiencia diferente que te transporta al pasado.',
    'El paseo en bicicleta por los senderos fue refrescante y revitalizante. Perfecto para los amantes de la naturaleza.',
    'La comida en el restaurante fue simplemente espectacular. Recomiendo probar los platos típicos de la región.',
    'Pasar la tarde en la piscina fue lo mejor de nuestro día. ¡El agua estaba perfecta!',
    'El canopy fue lo más emocionante de todo el viaje. Adrenalina pura en un entorno natural increíble.',
    'Las cuatrimotos son geniales para los que buscan aventura. Los senderos eran divertidos y bien mantenidos.',
    'Las cabañas estaban bien equipadas y con una vista espectacular. Ideal para una escapada de fin de semana.'
];

function generarComentarioHTML(nombre, comentario) {
    return `
        <div class="card mb-2">
            <div class="card-header card-color-blue text-white">
                <h5 class="mb-0">${nombre}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">${comentario}</p>
                <div id="calificacion" class="star-rating">
                    <i class="bi bi-star-fill text-info" data-value="1"></i>
                    <i class="bi bi-star-fill text-info" data-value="2"></i>
                    <i class="bi bi-star-fill text-info" data-value="3"></i>
                    <i class="bi bi-star-fill text-info" data-value="4"></i>
                    <i class="bi bi-star-fill text-muted" data-value="5"></i>
                </div>
            </div>               
        </div>
    `;
}

function random(min, max) {
    const minimo = Math.ceil(min);
    const maximo = Math.floor(max);
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

let htmlComentario1 = generarComentarioHTML(nombres[random(0, 4)], comentarios[random(0, 4)]);
listaComentarios.insertAdjacentHTML('beforeend', htmlComentario1);

let htmlComentario2 = generarComentarioHTML(nombres[random(5, 9)], comentarios[random(5, 9)]);
listaComentarios.insertAdjacentHTML('beforeend', htmlComentario2);

let htmlComentario3 = generarComentarioHTML(nombres[random(10, 14)], comentarios[random(10, 14)]);
listaComentarios.insertAdjacentHTML('beforeend', htmlComentario3);  