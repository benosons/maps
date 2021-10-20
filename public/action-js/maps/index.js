$(document ).ready(function() {
  console.log('You are running jQuery version: ' + $.fn.jquery);
  var map = L.map('maps').setView({ lat : 0.7893, lon : 113.9213 }, 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    var photoImg = '<img src="https://borneo24.com/wp-content/uploads/2020/05/tugu-khatulistiwa.jpg" height="150px" width="150px"/>';
    
    L.marker({lat : 0.7893, lon : 113.9213}).bindPopup("<center>Tugu Khatulistiwa </center>" + "</br>"+ photoImg).addTo(map);
});