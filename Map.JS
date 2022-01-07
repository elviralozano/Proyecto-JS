var map = L.map('map').setView([4.639386,-74.082412],6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([4.639386,-74.082412]).addTo(map)
    .bindPopup('Curaduria Literaria')
    .openPopup();


document.getElementById('select-location').addEventListener('change',function(e){
    let coordenadas = e.target.value.split(",");
    map.flyTo(coordenadas,13);
})