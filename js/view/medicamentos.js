const producto = [{
    id: 0,
    image: 'images/acetaminofen.jpg',
    title: 'Acetaminofen',

},
{
    id: 1,
    image: 'images/alca.jpg',
    title: 'Alcaseltzer',

}, {
    id: 2,
    image: 'images/amoxi.png',
    title: ' Amoxicilina',

}, {
    id: 3,
    image: 'images/panadol.jpg',
    title: 'Panadol',

},
{
    id: 4,
    image: 'images/sudagrip.png',
    title: 'Sudagrip',

},
{
    id: 5,
    image: 'images/dolo.png',
    title: 'Dolo-Neurobion',

},
{
    id: 6,
    image: 'images/dori.webp',
    title: 'Dorival',

},
{
    id: 7,
    image: 'images/ibuprofeno.jpg',
    title: 'Ibuprofeno',

},
{
    id: 8,
    image: 'images/napro.jpg',
    title: 'Naproxeno',

}, {
    id: 9,
    image: 'images/pepto.webp',
    title: ' Pepto-Bismol',

}, {
    id: 10,
    image: 'images/lanzo.jpg',
    title: 'Lansoprazol',

},
{
    id: 11,
    image: 'images/dilox.webp',
    title: 'Diloxanida',

},
{
    id: 12,
    image: 'images/para.webp',
    title: 'Paracetamol',

},
{
    id: 13,
    image: 'images/viro.jpg',
    title: 'Viro-Grip',

},
{
    id: 14,
    image: 'images/meto.webp',
    title: 'Metocarbamol',

},
{
    id: 15,
    image: 'images/aspirina.webp',
    title: 'Aspirina Forte',

}, {
    id: 16,
    image: 'images/mari.jpg',
    title: ' Mariguanol',

}, {
    id: 17,
    image: 'images/simeti.jpg',
    title: 'Simeticona',

},
{
    id: 18,
    image: 'images/pan.jpg',
    title: 'Pancreatina',

},
{
    id: 19,
    image: 'images/ambro.webp',
    title: 'Ambroxol',

},
{
    id: 20,
    image: 'images/lora.jpg',
    title: 'Loratadina',

},
{
    id: 21,
    image: 'images/deslo.jpg',
    title: 'Desloratadina',

},
{
    id: 22,
    image: 'images/ace.jpg',
    title: 'N-Acetilcisteína',

}, {
    id: 23,
    image: 'images/dolofin.webp',
    title: ' Dolofin',

}, {
    id: 24,
    image: 'images/ty.png',
    title: 'Tylenol',

},
{
    id: 25,
    image: 'images/sal.jpg',
    title: 'Salva-dol',

},

{
    id: 26,
    image: 'images/com.jpg',
    title: 'Complejo B',

},
{
    id: 27,
    image: 'images/noval.webp',
    title: 'Novalgina',

},
{
    id: 28,
    image: 'images/tetra.jpg',
    title: 'Tetraciclina',

}, {
    id: 29,
    image: 'images/anti.png',
    title: 'Antifuego - Labial',

},
{
    id: 30,
    image: 'images/cofal.webp',
    title: 'cofal',

},

]
const urlMappings = {

    0: 'medicina/acetaminofen.html',
    1: 'medicina/alcaseltzer.html',
    2: 'medicina/amoxicilina.html',
    3: 'medicina/panadol.html',
    4: 'medicina/sudagrip.html',
    5: 'medicina/neurobion.html',
    6: 'medicina/dorival.html',
    7: 'medicina/ibuprofeno.html',
    8: 'medicina/naproxeno.html',
    9: 'medicina/peptobismol.html',
    10: 'medicina/lansoprazol.html',
    11: 'medicina/diloxanida.html',
    12: 'medicina/parectamol.html',
    13: 'medicina/virogrip.html',
    14: 'medicina/metocarbamol.html',
    15: 'medicina/aspirina.html',
    16: 'medicina/mariguanol.html',
    17: 'medicina/simeticona.html',
    18: 'medicina/pancreatina.html',
    19: 'medicina/ambroxol.html',
    20: 'medicina/loratadina.html',
    21: 'medicina/desloratadina.html',
    22: 'medicina/nacetilcisteina.html',
    23: 'medicina/dolofin.html',
    24: 'medicina/tylenol.html',
    25: 'medicina/salvadol.html',
    26: 'medicina/complejob.html',
    27: 'medicina/novalgina.html',
    28: 'medicina/tetraciclina.html',
    29: 'medicina/antifuego.html',
    30: 'medicina/cofal.html',
    // Agrega más entradas para cada id de medicamento
};
const categorias = [...new Set(producto.map((item) => { return item }))]
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchDatos = e.target.value.toLowerCase();
    const filtrarDatos = categorias.filter((item) => {
        return (item.title.toLocaleLowerCase().includes(searchDatos)
        )
    })
    displayItem(filtrarDatos)
});
const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, id } = item;
        return `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></image>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <button onclick="redirectToDetails(${id})">Ver más ...</button>
          <br>
        </div>
      </div>`;
    }).join('');
};

function redirectToDetails(id) {
    const url = urlMappings[id];
    if (url) {
        window.location.href = url;
    } else {

        alert(`No se encontró una URL para el id ${id}`);
    }
}
displayItem(categorias);