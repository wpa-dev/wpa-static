jQuery(document).ready(function($) {
	
	var $upload_button = jQuery('.qode-gallery-upload');

	wp.media.customlibEditGallery = {

		frame: function() {

			if ( this._frame )
			 return this._frame;

			var selection = this.select();

			this._frame = wp.media({
				id: 'qode_portfolio-image-gallery',
				frame: 'post',
				state: 'gallery-edit',
				title: wp.media.view.l10n.editGalleryTitle,
				editing: true,
				multiple: true,
				selection: selection
			});

			this._frame.on('update', function() {

				var controller = wp.media.customlibEditGallery._frame.states.get('gallery-edit');
				var library = controller.get('library');
				// Need to get all the attachment ids for gallery
				var ids = library.pluck('id');

				$input_gallery_items.val(ids);

				jQuery.ajax({
					type: "post",
					url: ajaxurl,
					data: "action=qode_gallery_upload_get_images&ids=" + ids,
					success: function(data) {

						$thumbs_wrap.empty().html(data);

					}
				});

			});

			return this._frame;
		},

		init: function() {

			$upload_button.click(function(event) {

				$thumbs_wrap = $(this).next();
				$input_gallery_items = $thumbs_wrap.next();

				event.preventDefault();
				wp.media.customlibEditGallery.frame().open();

			});
		},

		// Gets initial gallery-edit images. Function modified from wp.media.gallery.edit
		// in wp-includes/js/media-editor.js.source.html
		select: function() {

			var shortcode = wp.shortcode.next('gallery', '[gallery ids="' + $input_gallery_items.val() + '"]'),
				defaultPostId = wp.media.gallery.defaults.id,
				attachments, selection;

			// Bail if we didn't match the shortcode or all of the content.
			if (!shortcode)
				return;

			// Ignore the rest of the match object.
			shortcode = shortcode.shortcode;

			if (_.isUndefined(shortcode.get('id')) && !_.isUndefined(defaultPostId))
				shortcode.set('id', defaultPostId);

			attachments = wp.media.gallery.attachments(shortcode);
			selection = new wp.media.model.Selection(attachments.models, {
				props: attachments.props.toJSON(),
				multiple: true
			});

			selection.gallery = attachments.gallery;

			// Fetch the query's attachments, and then break ties from the
			// query to allow for sorting.
			selection.more().done(function() {
				// Break ties with the query.
				selection.props.set({
					query: false
				});
				selection.unmirror();
				selection.props.unset('orderby');
			});

			return selection;

		},

	};

	$(document).ready(function() {

		$(wp.media.customlibEditGallery.init);

	});

});

var $j = jQuery.noConflict();

/* ------PORTFOLIO PART START------- */

function setIdOnAddPortfolio(addButton,portfolio_num){
	
	addButton.siblings('.portfolio:last,.portfolio_image:last').find('input[type="text"], select').each(function(){
		var name = $j(this).attr('name');
		var new_name= name.replace("_x", "[]");
		var new_id = name.replace("_x", "_"+portfolio_num);
		$j(this).attr('name',new_name);
		$j(this).attr('id',new_id);
		$j(this).siblings('label').attr('for',new_id);
		
	});
	
	addButton.siblings('.portfolio:last').find('textarea').each(function(){
		var name = $j(this).attr('name');
		var new_name= name.replace("_x", "[]");
		var new_id = name.replace("_x", "_"+portfolio_num);
		$j(this).attr('name',new_name);
		$j(this).attr('id',new_id);
		$j(this).siblings('label').attr('for',new_id);
		
	});
	
	showHidePorfolioImageVideoType();
}

function setIdOnRemovePortfolio(portfolio,portfolio_num){
	
	if(portfolio_num == undefined){
		var portfolio_num = portfolio.attr('rel');
	}else{
		var portfolio_num = portfolio_num;
	}
	
	portfolio.find('input[type="text"], select').each(function(){
		var name = $j(this).attr('name').split('[')[0];
		var new_name = name+"[]";
		var new_id = name+"_"+portfolio_num;
		$j(this).attr('name',new_name);
		$j(this).attr('id',new_id);
		$j(this).siblings('label').attr('for',new_id);
		
	});
	
	portfolio.find('textarea').each(function(){
		var name = $j(this).attr('name').split('[')[0];
		var new_name = name+"[]";
		var new_id = name+"_"+portfolio_num;
		$j(this).attr('name',new_name);
		$j(this).attr('id',new_id);
		$j(this).siblings('label').attr('for',new_id);
	});

}

/* ------PORTFOLIO PART END------- */

function colorPicker(){
	$j('.colorSelector').each(function(){
		var Othis = this; //cache a copy of the this variable for use inside nested function
		var initialColor = $j(Othis).next('input').attr('value');
		$j(this).ColorPicker({
			color: initialColor,
			onShow: function (colpkr) {
				$j(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$j(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$j(Othis).children('div').css('backgroundColor', '#' + hex);
				$j(Othis).next('input').attr('value','#' + hex);
			}
		});
	});
}

function showHideSlideBackgroundType(){
	var $selected = $j('input.slide_background_type:checked').data('type');
	if($selected == "video_type"){
		$j('.image_type').parent().hide();
		$j('.video_type').parent().show();
	}else{
		$j('.video_type').parent().hide();
		$j('.image_type').parent().show();
	}
	
}

function showHidePorfolioImageVideoType(){ 
	$j('.portfoliovideotype').each(function(i){

		var $selected = $j(this).val(); 

		if($selected == "self"){ 
			$j('#portfoliovideoid_'+i).parent().hide(); 
			$j('#portfoliovideoimage_'+i).parent().show(); 
			$j('#portfoliovideowebm_'+i).parent().show(); 
			$j('#portfoliovideomp4_'+i).parent().show(); 
			$j('#portfoliovideoogv_'+i).parent().show(); 
			$j('#portfoliovideoheight_'+i).parent().show(); 
		}else{ 
			$j('#portfoliovideoimage_'+i).parent().hide(); 
			$j('#portfoliovideowebm_'+i).parent().hide(); 
			$j('#portfoliovideomp4_'+i).parent().hide(); 
			$j('#portfoliovideoogv_'+i).parent().hide(); 
			$j('#portfoliovideoheight_'+i).parent().hide(); 
			$j('#portfoliovideoid_'+i).parent().show(); 
		} 

	});   
} 
 
function showHideBlogVideoType(){ 
	var $selected = $j('select#video_format_choose').val(); 
	if($selected == "self"){ 
		$j('#video_format_link').parent().hide(); 
		$j('#video_format_image').parent().parent().show(); 
		$j('#video_format_webm').parent().show(); 
		$j('#video_format_mp4').parent().show(); 
		$j('#video_format_ogv').parent().show(); 
	}else{ 
		$j('#video_format_image').parent().parent().hide(); 
		$j('#video_format_webm').parent().hide(); 
		$j('#video_format_mp4').parent().hide(); 
		$j('#video_format_ogv').parent().hide(); 
		$j('#video_format_link').parent().show(); 
	} 

}  

$j(document).ready(function() {
	
	//Qode options accordion
	
	$j('.sections').accordion({
		collapsible: true,
		active: 0
	});
	$j('.sections > div').css('height','auto');
	
	
	var formfield;
	$j(document).on('click', '.qode_upload_field,.brand_image,.slide_image,.portfolioimg,.logo_image,.logo_image_light,.logo_image_dark,.logo_image_sticky,.favicon_image,.background_image,.content_background_image,.pattern_background_image,.loading_image,.title_image,.title_overlay_image,.page_image,.slide_thumbnail,.google_maps_pin_image,.facebook_icon,.twitter_icon,.google_plus_icon,.linkedin_icon,.tumblr_icon,.pinterest_icon,.vk,.video_format_image,.pricingtables_backgroundpatern, .pricingtables_even_backgroundpatern', function(event) {
			event.preventDefault();
	    formfield = $j(this).attr('id');

	    tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
			
			
			if(formfield != undefined){
				// used for all of the above to insert the uploaded image url into the proper text field
				window.send_to_editor = function(html) {
					imgurl = $j('img',html).attr('src');
					$j('#'+ formfield).val(imgurl);
					tb_remove();
				}
			} 
	});
	
	$j(document).on('click', '.upload_button', function(event) {
		$j(this).siblings('input').click();
	});
	
	/* ------PORTFOLIO PART START------- */

	$j(".add_portfolio_images").each(function(){
    $j(this).accordion({
			collapsible: true,
			active: false
    });
	});
	$j('.add_portfolio_images_inner').css('height','auto');
	
	var remove_portfolio_button = '<a class="remove_option" onclick="javascript: return false;" href="/" >Remove portfolio option</a>';
	var default_portfolio = $j('.hidden_portfolio').clone().html();
	
	/* Add portfolio option */
	$j(document).on('click', 'a.add_option', function(event) {
		$portfolio = '<div class="portfolio" rel="">'+ default_portfolio + remove_portfolio_button +'</div>';
		$j(this).before($j($portfolio).hide().fadeIn(500));
		
		//add new rel number for new portfolio option and set new id/name according to this number
		var portfolio_num = $j(this).siblings('.portfolio').length;
		$j(this).siblings('.portfolio:last').attr('rel',portfolio_num);
		setIdOnAddPortfolio($j(this),portfolio_num);
		
	});
	
	/* Remove portfolio option */
	$j(document).on('click', 'a.remove_option', function(event) {
		
		$j(this).closest('.portfolio').fadeOut(500,function(){
			$j(this).remove();
			
			//after removing portfolio option, set new rel numbers and set new ids/names
			$j('.portfolio').each(function(i){	
				$j(this).attr('rel',i+1);
				setIdOnRemovePortfolio($j(this),i+1);
			});
		});
	});
	
	$j(".add_portfolios").each(function(){
    $j(this).accordion({
			collapsible: true,
			active: false
    });
		
	});
	$j('.add_portfolios_inner').css('height','auto');
	
	var remove_portfolio_image_button = '<a class="remove_image" onclick="javascript: return false;" href="/" >Remove portfolio image</a>';
	var default_portfolio_image = $j('.hidden_portfolio_images').clone().html();
	
	/* Add portfolio image */
	$j(document).on('click', 'a.add_image', function(event) {
		$portfolio_image = '<div class="portfolio_image" rel="">'+ default_portfolio_image + remove_portfolio_image_button +'</div>';
		$j(this).before($j($portfolio_image).hide().fadeIn(500));
		
		//add new rel number for new portfolio image and set new id/name according to this number
		var portfolio_num = $j(this).siblings('.portfolio_image').length;
		$j(this).siblings('.portfolio_image:last').attr('rel',portfolio_num);
		setIdOnAddPortfolio($j(this),portfolio_num);
		
	});
	
	/* Remove portfolio image */
	$j(document).on('click', 'a.remove_image', function(event) {
		
		$j(this).closest('.portfolio_image').fadeOut(500,function(){
			$j(this).remove();
			
			//after removing portfolio image, set new rel numbers and set new ids/names
			$j('.portfolio_image').each(function(i){	
				$j(this).attr('rel',i+1);
				setIdOnRemovePortfolio($j(this),i+1);
			});
		});
	});

	/* ------PORTFOLIO PART END------- */
	
	
	colorPicker();
	
  $j( ".datepicker" ).datepicker( { dateFormat: "MM dd, yy" });

	
	/* image upload in popup - start */
	$j(document).on('click', '.popup_image', function(e) {
		e.preventDefault();
		var $this = $j(this);
    var custom_uploader = wp.media({
        title: 'Select Image',
        button: {
            text: 'Insert image'
        },
        multiple: false  // Set this to true to allow multiple files to be selected
    })
    .on('select', function() {
        var attachment = custom_uploader.state().get('selection').first().toJSON();
        $this.val(attachment.url);
        
    })
    .open();

  });
	/* image upload in popup - end */
	
	/*Import form submit */

	/* show/hide fields for Qode Slider image/video background type */
	showHideSlideBackgroundType();
	$j("input.slide_background_type").change(function() {
		showHideSlideBackgroundType();
	});
	
	/* show/hide fields for portfolio video type */ 
	showHidePorfolioImageVideoType(); 
	$j(document).on('change', 'select.portfoliovideotype', function(e) {
		showHidePorfolioImageVideoType(); 
	}); 

	/* show/hide fields for blog video type */ 
	showHideBlogVideoType(); 
	$j("select#video_format_choose").change(function() {  
		showHideBlogVideoType(); 
	});

	$j('.wpb-layout-element-button').each( function() {
		$j(this).removeClass('vc_element-deprecated');
	});

});
