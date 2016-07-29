$(function() {
 
  if($('#yo').checked){

  }
});

function initMap() {
        var drugPark = {lat: 49.2819163, lng: -123.1168};
        var gastown = {lat: 49.2828, lng: -123.1068};
        var westEnd = {lat: 49.2857, lng: -123.1307};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
        });

        var parkContent = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<p id="firstHeading" class="firstHeading">T in DOWNTOWN</p>'+
            '</div>'+
            '</div>';

        var parkInfowindow = new google.maps.InfoWindow({
          content: parkContent,
        });

        var drugMarker = new google.maps.Marker({
          position: drugPark,
          map: map,
          title: 'Drug Park Near Lighthouse'
        });
        drugMarker.addListener('click', function() {
          parkInfowindow.open(map, drugMarker);
        });
// =================================================================
        var gasContent = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<p id="firstHeading" class="firstHeading">T in GASTOWN</p>'+
            '</div>'+
            '</div>';

        var gasInfowindow = new google.maps.InfoWindow({
          content: gasContent,
        });

        var gasMarker = new google.maps.Marker({
          position: gastown,
          map: map,
          title: 'Drug Park Near Lighthouse'
        });
        gasMarker.addListener('click', function() {
          gasInfowindow.open(map, gasMarker);
        });
// =================================================================
        var westContent = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<p id="firstHeading" class="firstHeading">T in WEST END</p>'+
            '</div>'+
            '</div>';

        var westInfowindow = new google.maps.InfoWindow({
          content: westContent,
        });

        var westMarker = new google.maps.Marker({
          position: westEnd,
          map: map,
          title: 'Drug Park Near Lighthouse'
        });
        westMarker.addListener('click', function() {
          westInfowindow.open(map, westMarker);
        });
// =================================================================
        var infoWindow = new google.maps.InfoWindow({map: map});
        
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
