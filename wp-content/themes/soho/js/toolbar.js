// $j(window).load(function(){
	// setTimeout(function(){
		// $j("#panel.default").animate({marginLeft: "0px"});
		// $j("a.open").addClass('opened');
		// $j("#panel").addClass('opened-panel');
	// },1000);
// });

var tooltip1 = '<div class="tooltip tooltip1"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip1"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Header Options</h5> \
													<p>theme18 theme comes with an amazing new Select functionality - choose main menu colors from page to page. Combine it with dark/light/transparent header backgrounds to create beautiful contrasts between pages. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_1" src="http://demo.select-themes.com/soho/demo_images/tooltip_image_1.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_1" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
var tooltip2 = '<div class="tooltip tooltip2"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip2"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Footer Options</h5> \
													<p>Choose different footer types, regular or unfold. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_2" src="http://demo.select-themes.com/soho/demo_images/tooltip_image_2.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_2" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
								
var tooltip3 = '<div class="tooltip tooltip3"><a href="#" class="tooltip_marker"></a> \
									<div class="popup_tooltip popup_tooltip3"> \
										<div class="popup_tooltip_inner"><i class="fa fa-times"></i> \
											<div class="tooltip_row clearfix"> \
													<h5 class="tooltip_title">Sticky Header Options</h5> \
													<p>All menus are completely customizable and can be as simple or as complex as you want. Try our two favorite combinations. </p> \
													<h5>Try a different style</h5> \
													<img class="tooltip_image_3" src="http://demo.select-themes.com/soho/demo_images/tooltip_image_3.jpg" alt="&nbsp;" /> \
													<a class="qbutton tiny tooltip_link_3" href="#">Change</a> \
											</div> \
										</div> \
									</div> \
								</div>\
								';
$j(window).load(function(){
	//$j('header .header_bottom .container_inner').append(tooltip1);
	//$j('footer .container_inner').append(tooltip2);

    $j('.menu_switcher span.text').hide();
    $j(".menu_switcher a.menu_open").css('width','48px');
    setTimeout(function(){
        $j('.menu_switcher').animate({ bottom:'-356px' });
    },1000);
});
									
$j(document).ready(function() {
	
	$j(document).on( "click", ".tooltip .tooltip_marker", function(){
		$j(".popup_tooltip").hide(300);
		var $this = $j(this);
		
		if ($this.next(".popup_tooltip").is(":visible")){           
			$this.next(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:0},100);
			$this.next(".popup_tooltip").hide(300);
    }
    else{      
			$this.next(".popup_tooltip").show(300, function(){
				$this.next(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:1},600);
			});
    }
    return false;
	});
	
	$j(document).on( "click", ".tooltip .popup_tooltip_inner i", function(){
		$j(".popup_tooltip").hide(300);
		
		$j(this).closest(".popup_tooltip").find(".popup_tooltip_inner").animate({opacity:0},100);
		$j(this).closest(".popup_tooltip").hide(300);  
		
    return false;
	});
	
	$j(document).on( "click", ".tooltip_link_1", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('html').addClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_1_reverse.jpg');
		}else{
			$j(this).removeClass('clicked');
			$j('html').removeClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_1.jpg');
		}
	});
	
	$j(document).on( "click", ".tooltip_link_2", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('footer').removeClass('uncover');
			$j('.content').addClass('normal_footer_content');
			$j('.tooltip_image_2').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_2_reverse.jpg');
			
			
		}else{
			$j(this).removeClass('clicked');
			$j('footer').addClass('uncover');
			$j('.content').removeClass('normal_footer_content');
			$j('.tooltip_image_2').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_2.jpg');
			
		}
	});
	
	$j(document).on( "click", ".tooltip_link_3", function(e){
		e.preventDefault();
		if(!$j(this).hasClass('clicked')){
			$j(this).addClass('clicked');
			$j('html').addClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_3_reverse.jpg');
			
			
		}else{
			$j(this).removeClass('clicked');
			$j('html').removeClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_3.jpg');
			
		}
	});
	
	$j('ul#tootlbar_header_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "transparent"){
			$j('.tooltip_link_1').addClass('clicked');
			$j('html').addClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_1_reverse.jpg');
		}else{
			$j('.tooltip_link_1').removeClass('clicked');
			$j('html').removeClass('dark_header');
			$j('.tooltip_image_1').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_1.jpg');
		}
	});
	$j('ul#tootlbar_footer_type li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "unfold"){
			$j('.tooltip_link_2').addClass('clicked');
			$j('footer').removeClass('uncover');
			$j('.content').addClass('normal_footer_content');
			//$j('.tooltip_image_2').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_2_reverse.jpg');
		}else{
			$j('.tooltip_link_2').removeClass('clicked');
			$j('footer').addClass('uncover');
			$j('.content').removeClass('normal_footer_content');
			//$j('.tooltip_image_2').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_2.jpg');
            setContentBottomMargin();
		}

        if($j('.uncover').length && $j('body').hasClass('vertical_menu_enabled') && $window_width > 1000){
            $j('.uncover').width($window_width -  $j('.vertical_menu_area').width());
        } else{
            $j('.uncover').css('width','100%');
        }
	});
	$j('ul#tootlbar_header_sticky_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "white"){
			$j('.tooltip_link_3').addClass('clicked');
			$j('html').addClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_3_reverse.jpg');
		}else{
			$j('.tooltip_link_3').removeClass('clicked');
			$j('html').removeClass('sticky_negative');
			$j('.tooltip_image_3').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_3.jpg');
		}
	});
	
	$j('ul#tootlbar_header_footer_color li').click(function(e){
		e.preventDefault();
		if($j(this).attr("data-value") != "dark"){
			$j('.tooltip_link_2').addClass('clicked');
			$j('footer').addClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_2_reverse.jpg');
			$j('footer .column1 img').attr('src','http://demo.select-themes.com/soho/wp-content/themes/theme18/img/logo_black.png');
		}else{
			$j('.tooltip_link_2').removeClass('clicked');
			$j('footer').removeClass('white_footer');
			$j('.tooltip_image_2').attr('src','http://demo.select-themes.com/soho/demo_images/tooltip_image_2.jpg');
			$j('footer .column1 img').attr('src','http://demo.select-themes.com/soho/wp-content/themes/theme18/img/logo.png');
		}
	});
	
	
	
	$j("#panel.default.left a.open").click(function(e){
		e.preventDefault();
		var margin_left = $j("#panel.default").css("margin-left");
		if (margin_left == "-245px"){
			$j("#panel.default").animate({marginLeft: "0px"});
			$j("#panel.default").addClass('opened-panel');
			$j(this).addClass('opened');
		}
		else{
			$j("#panel.default").animate({marginLeft: "-245px"});
			$j(this).removeClass('opened');
			$j("#panel.default").removeClass('opened-panel');
		}
		return false;
	});

    $j("#panel.default.right a.open").click(function(e){
        e.preventDefault();
        var margin_right = $j("#panel.default").css("margin-right");
        if (margin_right == "-245px"){
            $j("#panel.default").animate({marginRight: "0px"});
            $j("#panel.default").addClass('opened-panel');
            $j(this).addClass('opened');
        }
        else{
            $j("#panel.default").animate({marginRight: "-245px"});
            $j(this).removeClass('opened');
            $j("#panel.default").removeClass('opened-panel');
        }
        return false;
    });
	
	$j("#panel.hide_sections a.open").click(function(e){
		e.preventDefault();
		var margin_right = $j("#panel.hide_sections").css("margin-right");
		if (margin_right == "-245px"){
			$j("#panel.hide_sections").animate({marginRight: "0px"});
			$j("#panel.hide_sections").addClass('opened-panel');
			$j(this).addClass('opened');
		}
		else{
			$j("#panel.hide_sections").animate({marginRight: "-245px"});
			$j(this).removeClass('opened');
			$j("#panel.hide_sections").removeClass('opened-panel');
		}
		return false;
	});
	
	$j(".accordion_toolbar").accordion({
		animate: "swing",
		collapsible: true,
		active: 6,
		icons: "",
		heightStyle: "content"
	});
	
	$j('ul#tootlbar_header_top_menu li').click(function(){
		if($j(this).attr("data-value") != ""){
			
    	$j.post(qode_root+'updatesession.php', {theme18_header_top : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_page_transitions li').click(function(){
		if($j(this).attr("data-value") != ""){
			
    	$j.post(qode_root+'updatesession.php', {theme18_page_transitions : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_smooth_scroll li').click(function(){
		if($j(this).attr("data-value") != ""){
    	$j.post(qode_root+'updatesession.php', {theme18_smooth : $j(this).attr("data-value")}, function(data){
				location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_header_type li').click(function(){
		if($j(this).attr("data-value") != ""){
    	$j.post(qode_root+'updatesession.php', {theme18_header_type : $j(this).attr("data-value")}, function(data){
					location.reload();
			});
		}
	});
	
	$j('ul#tootlbar_pattern li').click(function(){

		$j('body.boxed .wrapper').removeClass('toolbar_clicked');
		jQuery('#tootlbar_pattern_css').remove();
		
		if($j(this).attr("data-value") != "no"){
			//$j('#tootlbar_boxed').getSetSSValue('boxed');
			//$j('#tootlbar_background').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.select-themes.com/soho/demo_images/"+$j(this).attr("data-value")+".png'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_pattern_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('ul#tootlbar_background li').click(function(){
	
	$j('body.boxed .wrapper').removeClass('toolbar_clicked');
	jQuery('#tootlbar_background_css').remove();
		if($j(this).attr("data-value") != "no"){
			//$j('#tootlbar_boxed').getSetSSValue('boxed');
			//$j('#tootlbar_pattern').getSetSSValue('no');
			$j('body').addClass('boxed');
			newSkin ="body.boxed .wrapper { \
									background-image: url('http://demo.select-themes.com/soho/demo_images/"+$j(this).attr("data-value")+".jpg'); \
									background-position: 0px 0px; \
									background-repeat: repeat; \
									background-attachment: fixed; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
			
		}else{
			newSkin ="body { \
									background-image: none; \
								} \
							";
			jQuery('body').append('<style id="tootlbar_background_css" type="text/css">'+newSkin+'</style>'); 
		}
	});
	
	$j('ul#tootlbar_boxed li').click(function(){
	
		$j('body').removeClass('boxed');
		$j('body').addClass($j(this).attr("data-value"));

		$j('body.boxed .wrapper').addClass('toolbar_clicked');
		
		if($j(this).attr("data-value") != "boxed"){
			$j('#tootlbar_pattern').getSetSSValue('no');
			$j('#tootlbar_background').getSetSSValue('no');
		}
	});	
	
	$j('ul#tootlbar_tooltips li').click(function(){
		if($j(this).attr("data-value") != "yes"){
			$j('.tooltip').css('visibility','hidden');
		}else{
			$j('.tooltip').css('visibility','visible');
		}
	});
	
	$j('div#tootlbar_hide_sections li input').change(function(){
		var id = $j(this).val();
		if(this.checked){
			$j("div.wpb_row[data-q_id='" + id + "'],section.parallax_section_holder[data-q_id='" + id + "']").fadeIn();
    }else{
			$j("div.wpb_row[data-q_id='" + id + "'],section.parallax_section_holder[data-q_id='" + id + "']").fadeOut();
		}
	});
	
	$j('#tootlbar_colors .color').each(function(){
		$j(this).on('click',function(){
			$j('#tootlbar_colors .color').removeClass('active');
			$j(this).addClass('active');
			var color = $j(this).data('color');
			if($j(this).hasClass('color1')){
				var logo_image = "logo_blue";
				var social_share = "social_share_blue";
			}else if($j(this).hasClass('color2')){
				var logo_image = "logo_red";
				var social_share = "social_share_red";
			}else if($j(this).hasClass('color3')){
				var logo_image = "logo_green";
				var social_share = "social_share_green";
			}else if($j(this).hasClass('color4')){
				var logo_image = "logo_yellow";
				var social_share = "social_share_yellow";
			}else if($j(this).hasClass('color5')){
				var logo_image = "logo_purple";
				var social_share = "social_share_purple";
			}else if($j(this).hasClass('color6')){;
				var logo_image = "logo_pink";
				var social_share = "social_share_pink";
			}else{
				var logo_image = "logo_blue";
				var social_share = "social_share_blue";
			}
			
			if ($j("#toolbar_colors_css").length > 0){
				$j("#toolbar_colors_css").remove();
			}
			//$j('.q_logo img.normal').attr('src', 'http://demo.select-themes.com/soho/demo_images/'+logo_image+'.png');
			newSkin ="a:hover,\
						p a:hover,\
						.mobile_menu_button span:hover,\
						nav.mobile_menu ul li:hover > a,\
						nav.mobile_menu ul li.active > a,\
						.side_menu_button > a:hover,\
						.dark:not(.sticky):not(.scrolled) .side_menu_button > a:hover,\
						.light:not(.sticky):not(.scrolled) .side_menu_button > a:hover,\
						.breadcrumb .current,\
						.blog_holder.masonry article .blog-share a:hover,\
						.blog_holder.masonry_full_width article .blog-share a:hover,\
						.comment_holder .comment .text .reply_holder:hover a,\
						.comment_holder .comment .text .reply_holder:hover i,\
						.comment_holder .comment .text .read_more_holder:hover i,\
						.filter_holder_mobile ul li:hover span,\
						.social_share_holder:hover .social_share,\
						.woocommerce-page ul.woocommerce-error strong,\
						.woocommerce-page .chosen-container .chosen-results li.active-result.highlighted,\
						.woocommerce-page div.product .summary p.price span.amount,\
						.woocommerce-page .social_share_simple_holder a:hover,\
						.woocommerce-page .star-rating,\
						.woocommerce-page table.cart tbody span.amount,\
						.woocommerce-page div.cart-collaterals div.cart_totals table tr.order-total strong span.amount,\
						.woocommerce-page div.cart-collaterals div.cart_totals table tr.order-total strong,\
						.woocommerce-page .checkout-opener-text a,\
						.woocommerce-page form.checkout table.shop_table tfoot tr.order-total th,\
						.woocommerce-page form.checkout table.shop_table tfoot tr.order-total td span.amount,\
						.woocommerce-checkout table.shop_table td span.amount,\
						.woocommerce-account table.shop_table td span.amount,\
						.woocommerce-checkout .shop_table.order_details tr td a,\
						.woocommerce-checkout .shop_table.order_details tfoot tr:last-child td span.amount,\
						.shopping_cart_header .header_cart:hover\
						{ \
							color: "+color+"; \
					} \
					footer .q_social_icon_holder:hover .fa-stack,\
					.social_share_dropdown ul li:hover a,\
					.woocommerce-page aside li ul.children li a:hover\
					{ \
						color: "+color+" !important; \
					} \
			        nav.main_menu > ul > li.active > a span.menu_line,\
					nav.main_menu > ul > li:hover > a span.menu_line,\
					.popup_menu:hover .line,\
					.popup_menu:hover .line:after,\
					.popup_menu:hover .line:before,\
					.blog_holder .flexslider .flex-next:hover,\
					.blog_holder .flexslider .flex-prev:hover,\
					.projects_holder article a.lightbox:hover,\
					.portfolio_slides li a.lightbox:hover,\
					.portfolio_single .flexslider .flex-next:hover,\
					.portfolio_single .flexslider .flex-prev:hover,\
					.price_table_inner .price_button_text:hover,\
					.qode_carousel_navigation a:hover,\
					.wpb_gallery_slides.wpb_flexslider:not(.have_frame) .flex-direction-nav a:hover,\
					.have_frame.flexslider .flex-direction-nav a:hover,\
					.woocommerce-page mark,\
					.woocommerce-page aside .widget_layered_nav li:hover,\
					.woocommerce-page aside ul li:hover,\
					.shopping_cart_header .header_cart span\
					{ \
			            background-color: "+color+"; \
			        } \
			       footer .q_social_icon_holder:hover .fa-stack{ \
			            background-color: "+color+" !important; \
			        } \
			        .ajax_loader_html{ \
			            border-color: "+color+"; \
			        } \
					";
				jQuery('body').append('<style id="toolbar_colors_css" type="text/css">'+newSkin+'</style>');
		});
	});

    $j(".menu_switcher a.menu_open").click(function(e){
        e.preventDefault();
        $j(this).removeClass('blink');
        var bottom = $j(".menu_switcher").css("bottom");
        if (bottom == "-356px"){
            $j(".menu_switcher").animate({bottom: "0px"});
            $j(this).addClass('opened');
            $j(this).find('span.text').show();
            $j(this).css('width','100%');
            $j(".menu_switcher a.menu_open span.icon").removeClass('arrow_carrot-up').addClass('arrow_carrot-down');
        }
        else{
            $j(".menu_switcher").animate({bottom: "-356px"});
            $j(this).removeClass('opened');
            $j(this).find('span.text').hide();
            $j(this).css('width','48px');
            $j(".menu_switcher a.menu_open span.icon").removeClass('arrow_carrot-down').addClass('arrow_carrot-up');
        }
        return false;
    });

    $j(".menu_switcher .example").click(function(e){
        $j(".menu_switcher .example").removeClass('active');
        $j(this).addClass('active');
    });




});

$j(document).on('click','a[href*="soho/"]',function(click){
    if(($j(this).attr('href') == "http://demo.select-themes.com/soho/video-slider-home/") || ($j(this).attr('href') == "http://demo.select-themes.com/soho/simple-photography-slider/") || ($j(this).attr('href') == "http://demo.select-themes.com/soho/transparent-menu-home/") || ($j(this).attr('href') == "http://demo.select-themes.com/soho/home-10/")){
        $j(".menu_switcher .example").removeClass('active');
        $j(".menu_switcher .example2").addClass('active');
    }else{
        $j(".menu_switcher .example").removeClass('active');
        $j(".menu_switcher .example1").addClass('active');
    }
});

$j(document).on('click','a[href*="soho1/"]',function(click){
    if(($j(this).attr('href') == "http://demo.select-themes.com/soho1/video-slider-home/") || ($j(this).attr('href') == "http://demo.select-themes.com/soho1/transparent-menu-home/")){
        $j(".menu_switcher .example").removeClass('active');
        $j(".menu_switcher .example4").addClass('active');
    }else{
        $j(".menu_switcher .example").removeClass('active');
        $j(".menu_switcher .example3").addClass('active');
    }
});

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

$j.fn.inlineStyle = function (prop) {
	 var styles = this.attr("style"),
		 value;
	 styles && styles.split(";").forEach(function (e) {
		 var style = e.split(":");
		 if ($j.trim(style[0]) === prop) {
			 value = style[1];           
		 }                    
	 });   
	 return value;
};