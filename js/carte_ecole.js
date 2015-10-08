// MAP Ecole Foot Elite
      function init_map() {
		var var_location = new google.maps.LatLng(50.593618,5.869848);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 19
        };
 
		var var_marker = new google.maps.Marker({
			position: var_location,
            map: var_map,
			title:"Foot Élite"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
		var_marker.setMap(var_map);	
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);