var map;

function initialize() {
    var latlng = new google.maps.LatLng(40.716948, -74.003563);
    var options = {
        zoom: 14, center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map"), options);

    let markerOptions = {
        position: new google.maps.LatLng(40.716948, -74.003563),
        optimized: true
    }

    let marker = new google.maps.Marker(markerOptions)
    marker.addListener('click', (googleMapsEvent) => {
        document.getElementById('info').innerHTML = 'latitude: ' + googleMapsEvent.latLng.lat() + ' longitude: ' + googleMapsEvent.latLng.lng();
    })
    marker.setMap(map);

    //Remove marker from the map and delete it -> marker.setMap(null); marker = null;

    map.addListener("click", (e) => {
        placeMarkerAndPanTo(e.latLng, map);
    });
}

function placeMarkerAndPanTo(latLng, map) {
    let newMarker = new google.maps.Marker({
                        position: latLng,
                        map: map,
    });

    newMarker.addListener('click', (googleMapsEvent) => {
        newMarker.setMap(null); marker = null;
    })

    map.panTo(latLng);
}