

$(document).ready(function () {


	function initialize() {

		
		var myLatLng = new google.maps.LatLng(latitude, longitude);

		var mapOptions = {
		center: myLatLng,
		zoom: 10,
		scrollwheel: false
		};

    	var map = new google.maps.Map(
    		document.getElementById('destination-map'), mapOptions);
        
        var marker = new google.maps.Marker({
		    position: myLatLng,
		    map: map,
		    animation: google.maps.Animation.DROP
		  });
      
  	};

  	google.maps.event.addDomListener(window, 'load', initialize);

});