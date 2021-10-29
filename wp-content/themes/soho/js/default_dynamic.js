
function ajaxSubmitCommentForm(){
	"use strict";

	var options = {
		success: function(){
			$j("#commentform textarea").val("");
			$j("#commentform .success p").text("Comment has been sent!");
		}
	};

	$j('#commentform').submit(function() {
		$j(this).find('input[type="submit"]').next('.success').remove();
		$j(this).find('input[type="submit"]').after('<div class="success"><p></p></div>');
		$j(this).ajaxSubmit(options);
		return false;
	});
}

var loading_text;
loading_text = 'Loading new posts...';
var finished_text;
finished_text = 'No more posts';

var header_height = 110;
var min_header_height_scroll = 60;
var min_header_height_sticky = 60;
var scroll_amount_for_sticky = 60;
var content_line_height = 65;
var add_for_admin_bar = 0;

var logo_height = 40; // theme18 logo height
var logo_width = 40; // theme18 logo width
	logo_height = 46;
	logo_width = 240;

	header_top_height = 0;


var geocoder;
var map;

function initialize() {
	"use strict";
  // Create an array of styles.
  var mapStyles = [
    {
      stylers: [
				{hue: "#000000" },
				{saturation: "-100"},
				{lightness: "-60"},
				{gamma: 1}
			]
	}
  ];
  var qodeMapType = new google.maps.StyledMapType(mapStyles,
    {name: "Select Map"});

	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(-34.397, 150.644);
	var myOptions = {
		zoom: 12,
				scrollwheel: false,
				center: latlng,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_CENTER
		},
		scaleControl: false,
			scaleControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		streetViewControl: false,
			streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		mapTypeControl: false,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'qode_style'],
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
				mapTypeId: 'qode_style'
			};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	  map.mapTypes.set('qode_style', qodeMapType);
	}

function codeAddress(data) {
	"use strict";

	if (data === '')
		return;

	var contentString = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<div id="bodyContent">'+
	'<p>'+data+'</p>'+
	'</div>'+
	'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	geocoder.geocode( { 'address': data}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
								icon:  'https://current.whitepants.io/wp-content/uploads/2014/09/WP-HQ.png',
								title: data['store_title']
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
			//infowindow.open(map,marker);
		}
	});
}

var $j = jQuery.noConflict();

$j(document).ready(function() {
	"use strict";

	showContactMap();
});

function showContactMap() {
	"use strict";

	if($j("#map_canvas").length > 0){
		initialize();
		codeAddress("");
		codeAddress("");
		codeAddress("");
		codeAddress("");
		codeAddress("3111 Cole Ave Ste 101 Dallas, TX 75204");
	}
}

var no_ajax_pages = [];
var qode_root = 'https://current.whitepants.io/';
var theme_root = 'https://current.whitepants.io/wp-content/themes/soho/';
var header_style_admin = "";
		no_ajax_pages.push('');
