(function() {
   tinymce.create('tinymce.plugins.qode_shortcodes', {
      init : function(ed, url) {		 
		 
         ed.addButton('qode_shortcodes', {
    		id : 'qode_shortcode_button',
            title : 'Select Shortcodes',
            image : url+'/qode_shortcodes.ico',
            onclick : function() {
						
					jQuery("#qode_shortcode_form_wrapper").remove();
				
					var shortcodes_visible = jQuery("#qode_shortcodes_menu_holder").length;
					
					if (shortcodes_visible){
						jQuery("#qode_shortcodes_menu_holder").remove();
					} else{

						var container_element = "";
						var id = jQuery(this).attr("id");

						if(jQuery('#qode_shortcode_button').length && !jQuery('#wp-wpb_tinymce_content-wrap').length){
							container_element = jQuery('#qode_shortcode_button').closest(".mce-toolbar-grp");
						} else if (jQuery("#"+id+"_toolbargroup").length){
							container_element = jQuery("#"+id+"_toolbargroup");
						} else if (jQuery('#wp-wpb_tinymce_content-wrap #qode_shortcode_button').length){
							container_element = jQuery('#wp-wpb_tinymce_content-wrap');
						}

						if(container_element != ""){
							container_element.append("<div id='qode_shortcodes_menu_holder'></div>");
						}				

              jQuery('#qode_shortcodes_menu_holder').load(url + '/qode_shortcodes_popup.html#qode_shortodes_popup', function(){

          				var y = 0;
          				var x = 0;

          				if(jQuery('#qode_shortcode_button button').length && !jQuery('#wp-wpb_tinymce_content-wrap').length){
							x = parseInt(jQuery("#qode_shortcode_button button").offset().left) - parseInt(jQuery("#adminmenuwrap").width()) + 10;
          				} else if (jQuery("#content_qode_shortcodes").length){
							x = parseInt(jQuery("#content_qode_shortcodes").offset().left) - parseInt(jQuery("#adminmenuwrap").width()) + 10;
          				} else if (jQuery('#wp-wpb_tinymce_content-wrap').length){
          					y = 70;
          					x = 0;
          				}
						
						jQuery("#qode_shortcodes_menu_holder").css({top: y, left: x});
						
						jQuery("#SC_1-2x1-2").click(function(){
							var shortcode = "[vc_row][vc_column width='1/2'][/vc_column][vc_column width='1/2'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode); 
							jQuery("#qode_shortcodes_menu_holder").remove();                           
						})
						
						jQuery("#SC_1-3x2-3").click(function(){
							var shortcode = "[vc_row][vc_column width='1/3'][/vc_column][vc_column width='2/3'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode);  
							jQuery("#qode_shortcodes_menu_holder").remove();                           
						})
						
						jQuery("#SC_2-3x1-3").click(function(){
							var shortcode = "[vc_row][vc_column width='2/3'][/vc_column][vc_column width='1/3'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode);  
							jQuery("#qode_shortcodes_menu_holder").remove();                           
						})
						
						jQuery("#SC_1-3x1-3x1-3").click(function(){
							var shortcode = "[vc_row][vc_column width='1/3'][/vc_column][vc_column width='1/3'][/vc_column][vc_column width='1/3'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode);  
							jQuery("#qode_shortcodes_menu_holder").remove();                           
						})
						
						jQuery("#SC_1-4x1-4x1-4x1-4").click(function(){
							var shortcode = "[vc_row][vc_column width='1/4'][/vc_column][vc_column width='1/4'][/vc_column][vc_column width='1/4'][/vc_column][vc_column width='1/4'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode);   
							jQuery("#qode_shortcodes_menu_holder").remove();                          
						})
						
						jQuery("#SC_1-4x3-4").click(function(){
							var shortcode = "[vc_row][vc_column width='1/4'][/vc_column][vc_column width='3/4'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode);  
							jQuery("#qode_shortcodes_menu_holder").remove();                           
						})
						
						jQuery("#SC_3-4x1-4").click(function(){
							var shortcode = "[vc_row][vc_column width='3/4'][/vc_column][vc_column width='1/4'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode);  
							jQuery("#qode_shortcodes_menu_holder").remove();                           
						})
						
						jQuery("#SC_1-4x1-2x1-4").click(function(){
							var shortcode = "[vc_row][vc_column width='1/4'][/vc_column][vc_column width='1/2'][/vc_column][vc_column width='1/4'][/vc_column][/vc_row]";
							ed.execCommand('mceInsertContent', false, shortcode);  
							jQuery("#qode_shortcodes_menu_holder").remove();                           
						})
						
						jQuery("#SC_custom_font").click(function(){
							var shortcode = "[custom_font font_family='Raleway' font_size='29' line_height='36' font_style='inherit' text_align='left' font_weight='700' color='#363636' background_color='' text_decoration='none' letter_spacing='2' text_shadow='no' show_dots='no' padding='0px' margin='0px']content content content[/custom_font]";
							ed.execCommand('mceInsertContent', false, shortcode);   
							jQuery("#qode_shortcodes_menu_holder").remove();                          
						})

						jQuery("#SC_ordered-list").click(function(){
							var shortcode = "[ordered_list]<ol><li>Lorem Ipsum</li><li>Lorem Ipsum</li><li>Lorem Ipsum</li></ol>[/ordered_list] "
							ed.execCommand('mceInsertContent', false, shortcode);   
							jQuery("#qode_shortcodes_menu_holder").remove();                          
						})
						
						jQuery("#SC_social_share").click(function(){
							var shortcode = "[social_share]";
							ed.execCommand('mceInsertContent', false, shortcode);   
							jQuery("#qode_shortcodes_menu_holder").remove();                          
						})		
						
						////////////////////////////////
						// pop-up shortcodes          //
						////////////////////////////////
						var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
						W = W - 80;
						H = H - 120;
						
						jQuery("#SC_accordion").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_accordion.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Accordion Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								    var style = jQuery('#TB_window #style option:selected').val();
								    var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
								    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
								    var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
									var icon_color = jQuery('#TB_window #icon_color').val();
								    var title_color = jQuery('#TB_window #title_color').val();
									var background_color = jQuery('#TB_window #background_color').val();
									var border_color = jQuery('#TB_window #border_color').val();
								    var shortcode = "[vc_accordion style='"+style+"'][vc_accordion_tab title='Section 1' title_color='"+title_color+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' icon_color='"+icon_color+"' background_color='"+background_color+"' border_color='"+border_color+"']Enter You content here[/vc_accordion_tab][vc_accordion_tab title='Section 2' title_color='"+title_color+"' icon='"+icon+"' icon_color='"+icon_color+"' background_color='"+background_color+"']Enter You content here[/vc_accordion_tab][/vc_accordion]";
									jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								    return false;
							   });							
							});
							jQuery("#qode_shortcodes_menu_holder").remove();                         
						})

						jQuery("#SC_blockquotes").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_blockquotes.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
                                colorPicker();
							    tb_show( 'Blockquote Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var text = jQuery('#TB_window #text').val();
									var text_color = jQuery('#TB_window #text_color').val();
									var quote_color = jQuery('#TB_window #quote_color').val();
									var width = jQuery('#TB_window #width').val();
									var line_height = jQuery('#TB_window #line_height').val();
									var background_color = jQuery('#TB_window #background_color').val();
									var border_color = jQuery('#TB_window #border_color').val();
									var border_width = jQuery('#TB_window #border_width').val();
									var shortcode = "[blockquote text='"+text+"' text_color='"+text_color+"' quote_color='"+quote_color+"' width='"+width+"' line_height='"+line_height+"' background_color='"+background_color+"' border_color='"+border_color+"' border_width='"+border_width+"']";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							    });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_box").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_box.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
                                colorPicker();
							    tb_show( 'Box Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var background_color = jQuery('#TB_window #background_color').val();
									var background_image = jQuery('#TB_window #background_image').val();
									var border_color = jQuery('#TB_window #border_color').val();
									var border_width = jQuery('#TB_window #border_width').val();
									var top_padding = jQuery('#TB_window #top_padding').val();
									var bottom_padding = jQuery('#TB_window #bottom_padding').val();
									var leftright_padding = jQuery('#TB_window #leftright_padding').val();
									var shortcode = "[q_box background_color='"+background_color+"' background_image='"+background_image+"' border_color='"+border_color+"' border_width='"+border_width+"' top_padding='"+top_padding+"' bottom_padding='"+bottom_padding+"' leftright_padding='"+leftright_padding+"']<p>enter text here</p>[/q_box]";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							    });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_button").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_button.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Button Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
							    	var type = jQuery('#TB_window #type option:selected').val();
								    var size = jQuery('#TB_window #size option:selected').val();
								    var text = jQuery('#TB_window #text').val();
								    var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
								    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
								    var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
								    var icon_color = jQuery('#TB_window #icon_color').val();
								    var link = jQuery('#TB_window #link').val();
								    var target = jQuery('#TB_window #target option:selected').val();
								    var color = jQuery('#TB_window #color').val();
								    var hover_color = jQuery('#TB_window #hover_color').val();
								    var background_color = jQuery('#TB_window #background_color').val();
								    var hover_background_color = jQuery('#TB_window #hover_background_color').val();
								    var border_color = jQuery('#TB_window #border_color').val();
								    var hover_border_color = jQuery('#TB_window #hover_border_color').val();
								    var font_style = jQuery('#TB_window #font_style option:selected').val();
								    var font_weight = jQuery('#TB_window #font_weight option:selected').val();
								    var text_align = jQuery('#TB_window #text_align option:selected').val();
									var margin = jQuery('#TB_window #margin').val();
								    var shortcode = "[q_button type='"+type+"' size='"+size+"' text='"+text+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' icon_color='"+icon_color+"' link='"+link+"' target='"+target+"' color='"+color+"' hover_color='"+hover_color+"' background_color='"+background_color+"' hover_background_color='"+hover_background_color+"' border_color='"+border_color+"' hover_border_color='"+hover_border_color+"' font_style='"+font_style+"' font_weight='"+font_weight+"' text_align='"+text_align+"' margin='"+margin+"']";
								    jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);	
								    tb_remove();
								    return false;
							    });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_call_to_action").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_call_to_action.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Call to Action Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								    var type = jQuery('#TB_window #type option:selected').val();
								    var box_padding = jQuery('#TB_window #box_padding').val();
								    var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
								    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
								    var icon = jQuery('#TB_window #icon option:selected').val();
								    var icon_size = jQuery('#TB_window #icon_size option:selected').val();
									var icon_color = jQuery('#TB_window #icon_color').val();
									var custom_icon = jQuery('#TB_window #custom_icon').val();
									var text_left_padding = jQuery('#TB_window #text_left_padding').val();
									var background_color = jQuery('#TB_window #background_color').val();
									var border_color = jQuery('#TB_window #border_color').val();
									var title = jQuery('#TB_window #title').val();
									var title_color = jQuery('#TB_window #title_color').val();
									var text = jQuery('#TB_window #text').val();
									var text_color = jQuery('#TB_window #text_color').val();
									var show_button = jQuery('#TB_window #show_button option:selected').val();
									var button_text = jQuery('#TB_window #button_text').val();
									var button_size = jQuery('#TB_window #button_size option:selected').val();
									var button_position = jQuery('#TB_window #button_position option:selected').val();
									var button_link = jQuery('#TB_window #button_link').val();
									var button_target = jQuery('#TB_window #button_target option:selected').val();
									var button_text_color = jQuery('#TB_window #button_text_color').val();
									var button_hover_text_color = jQuery('#TB_window #button_hover_text_color').val();
									var button_background_color = jQuery('#TB_window #button_background_color').val();
									var button_hover_background_color = jQuery('#TB_window #button_hover_background_color').val();
									var button_border_color = jQuery('#TB_window #button_border_color').val();
									var button_hover_border_color = jQuery('#TB_window #button_hover_border_color').val();
									var button_icon_pack = jQuery('#TB_window #button_icon_pack option:selected').val();
								    var button_fa_icon = jQuery('#TB_window #button_fa_icon option:selected').val();
								    var button_fe_icon = jQuery('#TB_window #button_fe_icon option:selected').val();
								    var shortcode = "[call_to_action type='"+type+"' box_padding='"+box_padding+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' icon_size='"+icon_size+"' icon_color='"+icon_color+"' custom_icon='"+custom_icon+"' text_left_padding='"+text_left_padding+"' background_color='"+background_color+"' border_color='"+border_color+"' title='"+title+"' title_color='"+title_color+"' text='"+text+"' text_color='"+text_color+"' show_button='"+show_button+"' button_text='"+button_text+"' button_position='"+button_position+"' button_size='"+button_size+"' button_link='"+button_link+"' button_target='"+button_target+"' button_text_color='"+button_text_color+"' button_hover_text_color='"+button_hover_text_color+"' button_background_color='"+button_background_color+"' button_hover_background_color='"+button_hover_background_color+"' button_border_color='"+button_border_color+"' button_hover_border_color='"+button_hover_border_color+"' button_icon_pack='"+button_icon_pack+"' button_fa_icon='"+button_fa_icon+"' button_fe_icon='"+button_fe_icon+"' /]";
									jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								    return false;
							   });							
							});
							jQuery("#qode_shortcodes_menu_holder").remove();                         
						})

						jQuery("#SC_counter").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_counter.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   tb_show( 'Counter Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
							   	   var type = jQuery('#TB_window #type option:selected').val();
							   	   var box = jQuery('#TB_window #box option:selected').val();
                                   var box_background_color = jQuery('#TB_window #box_background_color').val();
                                   var box_border_color = jQuery('#TB_window #box_border_color').val();
							   	   var position = jQuery('#TB_window #position option:selected').val();
								   var digit = jQuery('#TB_window #digit').val();
								   var digit_color = jQuery('#TB_window #digit_color').val();
								   var digit_color_end = jQuery('#TB_window #digit_color_end').val();
								   var digit_size = jQuery('#TB_window #digit_size').val();
								   var title = jQuery('#TB_window #title').val();
								   var title_color = jQuery('#TB_window #title_color').val();
								   var text = jQuery('#TB_window #text').val();
								   var text_size = jQuery('#TB_window #text_size').val();
                                   var text_color = jQuery('#TB_window #text_color').val();
								   var shortcode = "[counter type='"+type+"' box='"+box+"' box_background_color='"+box_background_color+"' box_border_color='"+box_border_color+"' position='"+position+"' digit='"+digit+"' digit_color='"+digit_color+"' digit_color_end='"+digit_color_end+"' digit_size='"+digit_size+"' title='"+title+"' title_color='"+title_color+" text='"+text+"' text_color='"+text_color+"']<p>Content content content</p>[/counter]";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								   return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                
						})

						jQuery("#SC_cover_boxes").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_cover_boxes.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Cover Boxes Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var image1 = jQuery('#TB_window #image1').val();
									var title1 = jQuery('#TB_window #title1').val();
									var title_color1 = jQuery('#TB_window #title_color1').val();
									var text1 = jQuery('#TB_window #text1').val();
									var text_color1 = jQuery('#TB_window #text_color1').val();
									var link1 = jQuery('#TB_window #link1').val();
									var link_label1 = jQuery('#TB_window #link_label1').val();
								    var target1 = jQuery('#TB_window #target1 option:selected').val();
									var image2 = jQuery('#TB_window #image2').val();
									var title2 = jQuery('#TB_window #title2').val();
									var title_color2 = jQuery('#TB_window #title_color2').val();
									var text2 = jQuery('#TB_window #text2').val();
									var text_color2 = jQuery('#TB_window #text_color2').val();
									var link2 = jQuery('#TB_window #link2').val();
									var link_label2 = jQuery('#TB_window #link_label2').val();
								    var target2 = jQuery('#TB_window #target2 option:selected').val();
									var image3 = jQuery('#TB_window #image3').val();
									var title3 = jQuery('#TB_window #title3').val();
									var title_color3 = jQuery('#TB_window #title_color3').val();
									var text3 = jQuery('#TB_window #text3').val();
									var text_color3 = jQuery('#TB_window #text_color3').val();
									var link3 = jQuery('#TB_window #link3').val();
									var link_label3 = jQuery('#TB_window #link_label3').val();
								    var target3 = jQuery('#TB_window #target3 option:selected').val();
									
									var shortcode = "[cover_boxes image1='"+image1+"' title1='"+title1+"' title_color1='"+title_color1+"' text1='"+text1+"' text_color1='"+text_color1+"' link1='"+link1+"' link_label1='"+link_label1+"' target1='"+target1+"' image2='"+image2+"' title2='"+title2+"' title_color2='"+title_color2+"' text2='"+text2+"' text_color2='"+text_color2+"' link2='"+link2+"' link_label2='"+link_label2+"' target2='"+target2+"' image3='"+image3+"' title3='"+title3+"' title_color3='"+title_color3+"' text3='"+text3+"' text_color3='"+text_color3+"' link3='"+link3+"' link_label3='"+link_label3+"' target3='"+target3+"']";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_dropcaps").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_dropcaps.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Dropcap Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								   var type = jQuery('#TB_window #type option:selected').val();
								   var letter = jQuery('#TB_window #letter').val();
								   var color = jQuery('#TB_window #color').val();
								   var background_color = jQuery('#TB_window #background_color').val();
								   var border_color = jQuery('#TB_window #border_color').val();
								   var shortcode = "[dropcaps type='"+type+"' color='"+color+"' background_color='"+background_color+"' border_color='"+border_color+"']" + letter + "[/dropcaps]";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								   return false;
							    });							
							});
							jQuery("#qode_shortcodes_menu_holder").remove();                                      
						})

						jQuery("#SC_highlights").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_highlights.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
								 colorPicker();
							   tb_show( 'Highlight Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var color = jQuery('#TB_window #color').val();
									var background_color = jQuery('#TB_window #background_color').val();
									var shortcode = "[highlight color='"+color+"' background_color='"+background_color+"']enter text here[/highlight]";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_horizontal_progress").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_progress_bar_horizontal.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
								colorPicker();
							   tb_show( 'Horizontal Progress Bar Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
							   	   var title = jQuery('#TB_window #title').val();
                                   var title_color = jQuery('#TB_window #title_color').val();
                                   var title_tag = jQuery('#TB_window #title_tag option:selected').val();
                                   var percent = jQuery('#TB_window #percent').val();
							   	   var percent_color = jQuery('#TB_window #percent_color').val();
							   	   var show_percent_mark = jQuery('#TB_window #show_percent_mark option:selected').val();
							   	   var active_background_color = jQuery('#TB_window #active_background_color').val();
							   	   var noactive_background_color = jQuery('#TB_window #noactive_background_color').val();
							   	   var height = jQuery('#TB_window #height').val();
								   var shortcode = "[progress_bar title='"+title+"' title_color='"+title_color+"' title_tag='"+title_tag+"' percent='"+percent+"' percent_color='"+percent_color+"' show_percent_mark='"+show_percent_mark+"' active_background_color='"+active_background_color+"' noactive_background_color='"+noactive_background_color+"' height='"+height+"']";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);
								   tb_remove();
								   return false;
							   });
							});
							jQuery("#qode_shortcodes_menu_holder").remove();
						})

						jQuery("#SC_icon").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_icons.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
                               colorPicker();
							   tb_show( 'Icon Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
							   		var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
							   		var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
							   		var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
								    var fa_size = jQuery('#TB_window #fa_size option:selected').val();
								    var custom_size = jQuery('#TB_window #custom_size').val();
								    var type = jQuery('#TB_window #type option:selected').val();
								    var icon_color = jQuery('#TB_window #icon_color').val();
								    var icon_hover_color = jQuery('#TB_window #icon_hover_color').val();
								    var position = jQuery('#TB_window #position option:selected').val();
								    var border_color = jQuery('#TB_window #border_color').val();
								    var border_hover_color = jQuery('#TB_window #border_hover_color').val();
                                    var background_color = jQuery('#TB_window #background_color').val();
                                    var background_hover_color = jQuery('#TB_window #background_hover_color').val();
                                    var margin = jQuery('#TB_window #margin').val();
                                    var icon_animation = jQuery('#TB_window #icon_animation option:selected').val();
                                    var icon_animation_delay = jQuery('#TB_window #icon_animation_delay').val();
                                    var link = jQuery('#TB_window #link').val();
                                    var target = jQuery('#TB_window #target option:selected').val();
								    var shortcode = "[icons icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' fa_size='"+fa_size+"' custom_size='"+custom_size+"' type='"+type+"' position='"+position+"' border_color='"+border_color+"' border_hover_color='"+border_hover_color+"' icon_color='"+icon_color+"' icon_hover_color='"+icon_hover_color+"' background_color='"+background_color+"' background_hover_color='"+background_hover_color+"' margin='"+margin+"' icon_animation='"+icon_animation+"' icon_animation_delay='"+icon_animation_delay+"' link='"+link+"' target='"+target+"']";
								    jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);
								    tb_remove();
								    return false;
					    		});							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_icon_list_item").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_icon_list_item.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
								 colorPicker();
							   tb_show( 'Icon List Item Shosrtcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
							   		var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
							   		var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
									var icon_type = jQuery('#TB_window #icon_type option:selected').val();
									var icon_color = jQuery('#TB_window #icon_color').val();
									var border_type = jQuery('#TB_window #border_type option:selected').val();
									var border_color = jQuery('#TB_window #border_color').val();
									var title = jQuery('#TB_window #title').val();
									var title_color = jQuery('#TB_window #title_color').val();
									var title_size = jQuery('#TB_window #title_size').val();
									var shortcode = "[icon_list_item icon='"+icon+"' icon_type='"+icon_type+"' icon_color='"+icon_color+"' border_type='"+border_type+"' border_color='"+border_color+"' title='"+title+"' title_color='"+title_color+"' title_size='"+title_size+"']";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                  
						})

						jQuery("#SC_icon_progress").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_progress_bar_icon.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   colorPicker();
							   tb_show( 'Icon Progress Bar Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								    var icons_number = jQuery('#TB_window #icons_number').val();
								    var active_number = jQuery('#TB_window #active_number').val();
								    var type = jQuery('#TB_window #type option:selected').val();
								    var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
							   		var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
							   		var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
								    var size = jQuery('#TB_window #size option:selected').val();
								    var icon_color = jQuery('#TB_window #icon_color').val();
								    var icon_active_color = jQuery('#TB_window #icon_active_color').val();
								    var background_color = jQuery('#TB_window #background_color').val();
								    var background_active_color = jQuery('#TB_window #background_active_color').val();
								    var border_color = jQuery('#TB_window #border_color').val();
								    var border_active_color = jQuery('#TB_window #border_active_color').val();
								    var shortcode = "[progress_bar_icon icons_number='"+icons_number+"' active_number='"+active_number+"' type='"+type+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' size='"+size+"' icon_color='"+icon_color+"' icon_active_color='"+icon_active_color+"' background_color='"+background_color+"' background_active_color='"+background_active_color+"' border_color='"+border_color+"' border_active_color='"+border_active_color+"']";
								    jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);
								    tb_remove();
								    return false;
							    });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                          
						})

						jQuery("#SC_icon_text").click(function() {
                            jQuery("#qode_shortcode_form_wrapper").remove();
                            jQuery.get(url + "/qode_shortcodes_icons_text.php", function(data) {
                                var form = jQuery(data);
                                form.appendTo('body').hide();
                                colorPicker();
                                tb_show('Icon With Text Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper');
                                jQuery('#TB_window #qode_insert_shortcode_button').click(function() {
                                    var box_type = jQuery('#TB_window #box_type').val();
                                    var box_border = jQuery('#TB_window #box_border option:selected').val();
                                    var box_border_color = jQuery('#TB_window #box_border_color').val();
                                    var box_background_color = jQuery('#TB_window #box_background_color').val();
                                    var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
                                    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
                                    var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
                                    var icon_size = jQuery('#TB_window #icon_size option:selected').val();
                                    var custom_icon_size = jQuery('#TB_window #custom_icon_size').val();
                                    var icon_type = jQuery('#TB_window #icon_type option:selected').val();
                                    var text_left_padding = jQuery('#TB_window #text_left_padding').val();
                                    var icon_animation = jQuery('#TB_window #icon_animation option:selected').val();
                                    var icon_animation_delay = jQuery('#TB_window #icon_animation_delay').val();
                                    var icon_position = jQuery('#TB_window #icon_position option:selected').val();
                                    var icon_border_color = jQuery('#TB_window #icon_border_color').val();
                                    var icon_border_hover_color = jQuery('#TB_window #icon_border_hover_color').val();
                                    var icon_margin = jQuery('#TB_window #icon_margin').val();
                                    var icon_color = jQuery('#TB_window #icon_color').val();
                                    var icon_hover_color = jQuery('#TB_window #icon_hover_color').val();
                                    var icon_background_color = jQuery('#TB_window #icon_background_color').val();
                                    var icon_background_hover_color = jQuery('#TB_window #icon_background_hover_color').val();
                                    var title = jQuery('#TB_window #title').val();
                                    var title_tag = jQuery('#TB_window #title_tag option:selected').val();
                                    var title_color = jQuery('#TB_window #title_color').val();
                                    var title_padding = jQuery('#TB_window #title_padding').val();
                                    var text = jQuery('#TB_window #text').val();
                                    var text_color = jQuery('#TB_window #text_color').val();
                                    var link = jQuery('#TB_window #link').val();
                                    var link_text = jQuery('#TB_window #link_text').val();
                                    var link_color = jQuery('#TB_window #link_color').val();
                                    var target = jQuery('#TB_window #target option:selected').val();

                                    var shortcode = "[icon_text box_type='"+box_type+"' box_border='"+box_border+"' box_border_color='"+box_border_color+"' box_background_color='"+box_background_color+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' icon_type='"+icon_type+"' icon_size='"+icon_size+"' custom_icon_size='"+custom_icon_size+"' text_left_padding='"+text_left_padding+"' icon_animation='"+icon_animation+"' icon_animation_delay='"+icon_animation_delay+"' icon_position='"+icon_position+"' icon_margin='"+icon_margin+"' icon_border_color='"+icon_border_color+"' icon_border_hover_color='"+icon_border_hover_color+"' icon_color='"+icon_color+"' icon_hover_color='"+icon_hover_color+"' icon_background_color='"+icon_background_color+"' icon_background_hover_color='"+icon_background_hover_color+"' title='"+title+"' title_tag='"+title_tag+"' title_color='"+title_color+"' title_padding='"+title_padding+"' text='"+text+"' text_color='"+text_color+"' link='"+link+"' link_text='"+link_text+"' link_color='"+link_color+"' target='"+target+"']";
                                    jQuery("#qode_shortcode_form_wrapper").remove()
                                    ed.execCommand('mceInsertContent', false, shortcode);
                                    tb_remove();
                                    return false;
                                });
                            });
                            jQuery("#qode_shortcodes_menu_holder").remove();
                        });

						jQuery("#SC_image_hover").click(function() {
                            jQuery("#qode_shortcode_form_wrapper").remove();
                            jQuery.get(url + "/qode_shortcodes_image_hover.php", function(data) {
                                var form = jQuery(data);
                                form.appendTo('body').hide();
                                colorPicker();
                                tb_show('Image Hover Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper');
                                jQuery('#TB_window #qode_insert_shortcode_button').click(function() {
                                    var image = jQuery('#TB_window #image').val();
                                    var hover_image = jQuery('#TB_window #hover_image').val();
                                    var link = jQuery('#TB_window #link').val();
                                    var target = jQuery('#TB_window #target option:selected').val();
                                    var animation = jQuery('#TB_window #animation option:selected').val();
                                    var transition_delay = jQuery('#TB_window #animation transition_delay').val();;
                                    
                                    var shortcode = "[image_hover image='" + image + "' hover_image='" + hover_image + "' link='"+link+"' target='"+target+"' animation='"+animation+"' transition_delay='"+transition_delay+"']";
                                    jQuery("#qode_shortcode_form_wrapper").remove()
                                    ed.execCommand('mceInsertContent', false, shortcode);
                                    tb_remove();
                                    return false;
                                });
                            });
                            jQuery("#qode_shortcodes_menu_holder").remove();
                        });

						jQuery("#SC_image_with_text").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_image_with_text.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
                                colorPicker();
							    tb_show( 'Image With Text Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var image = jQuery('#TB_window #image').val();
									var title = jQuery('#TB_window #title').val();
									var title_color = jQuery('#TB_window #title_color').val();
									var text = jQuery('#TB_window #text').val();
									var text_color = jQuery('#TB_window #text_color').val();
									var link = jQuery('#TB_window #link').val();
									var link_text = jQuery('#TB_window #link_text').val();
									var target = jQuery('#TB_window #target option:selected').val();
									var link_color = jQuery('#TB_window #link_color').val();
									var shortcode = "[image_with_text image='"+image+"' title='"+title+"' title_color='"+title_color+"' text='"+text+"' text_color='"+text_color+"' link='"+link+"' link_text='"+link_text+"' target='"+target+"' link_color='"+link_color+"']";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							    });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_image_with_text_over").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_image_with_text_over.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Interactive Banners Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
							   		var layout_width = jQuery('#TB_window #layout_width option:selected').val();
									var image = jQuery('#TB_window #image').val();
									var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
                                    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
                                    var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
									var custom_size = jQuery('#TB_window #custom_size option:selected').val();
									var icon_color = jQuery('#TB_window #icon_color').val();
									var title = jQuery('#TB_window #title').val();
									var title_color = jQuery('#TB_window #title_color').val();
                                    var title_size = jQuery('#TB_window #title_size').val();
                                    var title_tag = jQuery('#TB_window #title_tag option:selected').val();
                                    var link = jQuery('#TB_window #link').val();
                                    var link_text = jQuery('#TB_window #link_text').val();
                                    var target = jQuery('#TB_window #target option:selected').val();
                                    var link_color = jQuery('#TB_window #link_color').val();
                                    var link_background_color = jQuery('#TB_window #link_background_color').val();
                                    var link_border_color = jQuery('#TB_window #link_border_color').val();
									var shortcode = "[image_with_text_over layout_width='"+layout_width+"' image='"+image+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' custom_size='"+custom_size+"' icon_color='"+icon_color+"' title='"+title+"' title_color='"+title_color+"' title_size='"+title_size+"' title_tag='"+title_tag+"' link='"+link+"' link_text='"+link_text+"' target='"+target+"' link_color='"+link_color+"' link_background_color='"+link_background_color+"' link_border_color='"+link_border_color+"']<p>Enter text here</p>[/image_with_text_over]";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });
							});
							jQuery("#qode_shortcodes_menu_holder").remove();                             
						})

						jQuery("#SC_latest_post").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_latest_post.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   tb_show( 'Latest Posts Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								   var type = jQuery('#TB_window #type option:selected').val();
								   var number_of_posts = jQuery('#TB_window #number_of_posts').val();
								   var number_of_colums = jQuery('#TB_window #number_of_colums option:selected').val();
								   var image_size = jQuery('#TB_window #image_size option:selected').val();
								   var order_by = jQuery('#TB_window #order_by option:selected').val();
								   var order = jQuery('#TB_window #order option:selected').val();
								   var category = jQuery('#TB_window #category').val();
								   var background_color = jQuery('#TB_window #background_color').val();
								   var background_pattern = jQuery('#TB_window #background_pattern option:selected').val();
								   var background_pattern_image = jQuery('#TB_window #background_pattern_image').val();
								   var text_length = jQuery('#TB_window #text_length').val();
								   var text_color = jQuery('#TB_window #text_color').val();
                                   var title_tag = jQuery('#TB_window #title_tag option:selected').val();
								   var display_category = jQuery('#TB_window #display_category option:selected').val();
								   var display_like = jQuery('#TB_window #display_like option:selected').val();
								   var display_share = jQuery('#TB_window #display_share option:selected').val();
								   var display_comments = jQuery('#TB_window #display_comments option:selected').val();
								   var display_time = jQuery('#TB_window #display_time option:selected').val();
								   var display_read_more = jQuery('#TB_window #display_read_more option:selected').val();
								   var post_description_color = jQuery('#TB_window #post_description_color').val();
								   var post_description_background_color = jQuery('#TB_window #post_description_background_color').val();
								   var category_text_color = jQuery('#TB_window #category_text_color').val();
								   var shortcode = "[latest_post type='"+type+"' number_of_posts='"+number_of_posts+"' number_of_colums='"+number_of_colums+"' image_size='"+image_size+"' order_by='"+order_by+"' order='"+order+"' category='"+category+"' background_color='"+background_color+"' background_pattern='"+background_pattern+"' background_pattern_image='"+background_pattern_image+"' text_length='"+text_length+"' text_color='"+text_color+"' title_tag='"+title_tag+"' display_category='"+display_category+"' display_time='"+display_time+"' display_comments='"+display_comments+"' display_like='"+display_like+"' display_share='"+display_share+"' display_read_more='"+display_read_more+"' post_description_color='"+post_description_color+"' post_description_background_color='"+post_description_background_color+"' category_text_color='"+category_text_color+"']";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								   return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

                        jQuery("#SC_line_graph").click(function() {
                            jQuery("#qode_shortcode_form_wrapper").remove();
                            jQuery.get(url + "/qode_shortcodes_line_graph.php", function(data) {
                                var form = jQuery(data);
                                form.appendTo('body').hide();
                                colorPicker();
                                tb_show('Line Graph Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper');
                                jQuery('#TB_window #qode_insert_shortcode_button').click(function() {
                                    var type = jQuery('#TB_window #type option:selected').val();
                                    var custom_color = jQuery('#TB_window #custom_color').val();
                                    if (jQuery('#TB_window #width').val() != "") {
                                        var width = "width='" + jQuery('#TB_window #width').val() + "'";
                                    } else {
                                        var width = "";
                                    }
                                    if (jQuery('#TB_window #height').val() != "") {
                                        var height = "height='" + jQuery('#TB_window #height').val() + "'";
                                    } else {
                                        var height = "";
                                    }
                                    if (jQuery('#TB_window #scaleSteps').val() != "") {
                                        var scaleSteps = "scale_steps='" + jQuery('#TB_window #scaleSteps').val() + "'";
                                    } else {
                                        var scaleSteps = "";
                                    }
                                    if (jQuery('#TB_window #scaleStepWidth').val() != "") {
                                        var scaleStepWidth = "scale_step_width='" + jQuery('#TB_window #scaleStepWidth').val() + "'";
                                    } else {
                                        var scaleStepWidth = "";
                                    }
                                    var shortcode = "[line_graph " + width + " " + height + " " + scaleSteps + " " + scaleStepWidth + " custom_color='" + custom_color + "' type='" + type + "' labels='Label 1, Label 2, Label 3']#c00d59,Legend One,1,5,10;#a9074c,Legend Two,3,7,20;#91003e,Legend Three,10,2,34[/line_graph]";
                                    jQuery("#qode_shortcode_form_wrapper").remove()
                                    ed.execCommand('mceInsertContent', false, shortcode);
                                    tb_remove();
                                    return false;
                                });
                            });
                            jQuery("#qode_shortcodes_menu_holder").remove();
                        })

						jQuery("#SC_message").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_message.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Message Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var type = jQuery('#TB_window #type option:selected').val();
									var background_color = jQuery('#TB_window #background_color').val();
                                    var border_color = jQuery('#TB_window #border_color').val();
                                    var border_width = jQuery('#TB_window #border_width').val();
                                    var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
									var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
									var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
									var icon_size = jQuery('#TB_window #icon_size option:selected').val();
									var icon_custom_size = jQuery('#TB_window #icon_custom_size').val();
									var icon_color = jQuery('#TB_window #icon_color').val();
									var icon_background_color = jQuery('#TB_window #icon_background_color').val();
									var custom_icon = jQuery('#TB_window #custom_icon').val();
									var close_button_style = jQuery('#TB_window #close_button_style').val();
								    var shortcode = "[message type='"+type+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' icon_color='"+icon_color+"' icon_size='"+icon_size+"' icon_custom_size='"+icon_custom_size+"' icon_background_color='"+icon_background_color+"' custom_icon='"+custom_icon+"' background_color='"+background_color+"' border_color='"+border_color+"' border_width='"+border_width+"' close_button_style='"+close_button_style+"']<h4>Message Title</h4>[/message]";
								    jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								    return false;
							    });					
							});
							jQuery("#qode_shortcodes_menu_holder").remove();
						})

						jQuery("#SC_pie_chart").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_pie_chart.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
                               colorPicker();
							   tb_show( 'Pie Chart Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var percent = jQuery('#TB_window #percent').val();
                                    var percentage_color = jQuery('#TB_window #percentage_color').val();
                                    var show_percent_mark = jQuery('#TB_window #show_percent_mark option:selected').val();
                                    var active_color = jQuery('#TB_window #active_color').val();
                                    var noactive_color = jQuery('#TB_window #noactive_color').val();
                                    var line_width = jQuery('#TB_window #line_width').val();
									var title = jQuery('#TB_window #title').val();
									var title_color = jQuery('#TB_window #title_color').val();
                                    var title_tag = jQuery('#TB_window #title_tag option:selected').val();
									var text = jQuery('#TB_window #text').val();
									var text_color = jQuery('#TB_window #text_color').val();
								    var shortcode = "[pie_chart percent='"+percent+"' percentage_color='"+percentage_color+"' show_percent_mark='"+show_percent_mark+"' active_color='"+active_color+"' noactive_color='"+noactive_color+"' line_width='"+line_width+"' title='"+title+"' title_color='"+title_color+"' title_tag='"+title_tag+"' text='"+text+"' text_color='"+text_color+"']";
								    jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);
								    tb_remove();
								    return false;
							   });							
							});                        
						})

						jQuery("#SC_pie_chart_with_icon").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_pie_chart_with_icon.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
                                colorPicker();
							    tb_show( 'Pie Chart With Icon Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var percent = jQuery('#TB_window #percent').val();
                                    var active_color = jQuery('#TB_window #active_color').val();
                                    var noactive_color = jQuery('#TB_window #noactive_color').val();
                                    var line_width = jQuery('#TB_window #line_width').val();
                                    var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
                                    var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
                                    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
									var icon_color = jQuery('#TB_window #icon_color').val();
									var title = jQuery('#TB_window #title').val();
									var title_color = jQuery('#TB_window #title_color').val();
                                    var title_tag = jQuery('#TB_window #title_tag option:selected').val();
									var text = jQuery('#TB_window #text').val();
									var text_color = jQuery('#TB_window #text_color').val();
								    var shortcode = "[pie_chart percent='"+percent+"' active_color='"+active_color+"' noactive_color='"+noactive_color+"' line_width='"+line_width+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' icon_color='"+icon_color+"' title='"+title+"' title_color='"+title_color+"' title_tag='"+title_tag+"' text='"+text+"' text_color='"+text_color+"']";
								    jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);
								    tb_remove();
								    return false;
							    });							
							});                        
						})

						jQuery("#SC_pie_chart2").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_pie_chart2.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
                                                           colorPicker();
							   tb_show( 'Pie Chart 2 Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									 if(jQuery('#TB_window #width').val() != ""){
										var width = "width='"+jQuery('#TB_window #width').val()+"'";
									 }else{ var width = ""; }
									 if(jQuery('#TB_window #height').val() != ""){
										var height = "height='"+jQuery('#TB_window #height').val()+"'";
									 }else{ var height = ""; }
									 var color = jQuery('#TB_window #color').val();
									 var shortcode = "[pie_chart2 "+width+" "+height+" color='"+color+"']15,#c00d59,Legend One; 35,#a9074c,Legend Two; 50,#91003e,Legend Three[/pie_chart2]";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								   return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})
						
						jQuery("#SC_pie_chart3").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_pie_chart3.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
                               colorPicker();
							   tb_show( 'Pie Chart 3 Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									 if(jQuery('#TB_window #width').val() != ""){
										var width = "width='"+jQuery('#TB_window #width').val()+"'";
									 }else{ var width = ""; }
									 if(jQuery('#TB_window #height').val() != ""){
										var height = "height='"+jQuery('#TB_window #height').val()+"'";
									 }else{ var height = ""; }
									 var color = jQuery('#TB_window #color').val();
									 var shortcode = "[pie_chart3 "+width+" "+height+" color='"+color+"']15,#c00d59,Legend One; 35,#a9074c,Legend Two; 50,#91003e,Legend Three[/pie_chart3]";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								   return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_portfolio_list").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_portfolio_list.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   tb_show( 'Portfolio List Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var type = jQuery('#TB_window #type option:selected').val();
									var columns = jQuery('#TB_window #columns option:selected').val();
									var order_by = jQuery('#TB_window #order_by option:selected').val();
									var order = jQuery('#TB_window #order option:selected').val();
									var number = jQuery('#TB_window #number').val();
									var image_size = jQuery('#TB_window #image_size option:selected').val();
									var hover_type = jQuery('#TB_window #hover_type option:selected').val();
									var filter = jQuery('#TB_window #filter option:selected').val();
                                    var filter_in_grid = jQuery('#TB_window #filter_in_grid option:selected').val();
									var lightbox = jQuery('#TB_window #lightbox option:selected').val();
									var link_type = jQuery('#TB_window #link_type option:selected').val();
									var show_like = jQuery('#TB_window #show_like option:selected').val();
									var category = jQuery('#TB_window #category').val();
									var selected_projects = jQuery('#TB_window #selected_projects').val();
									var show_load_more = jQuery('#TB_window #show_load_more option:selected').val();
									var show_load_more_position = jQuery('#TB_window #show_load_more_position option:selected').val();
                                    var title_tag = jQuery('#TB_window #title_tag option:selected').val();
									var shortcode = "[portfolio_list type='"+type+"' columns='"+columns+"' order_by='"+order_by+"' order='"+order+"' number='"+number+"' image_size='"+image_size+"' hover_type='"+hover_type+"' category='"+category+"' selected_projects='"+selected_projects+"' filter='"+filter+"' filter_in_grid='"+filter_in_grid+"' lightbox='"+lightbox+"' link_type='"+link_type+"' show_like='"+show_like+"' show_load_more='"+show_load_more+"' show_load_more_position='"+show_load_more_position+"' title_tag='"+title_tag+"']";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_portfolio_slider").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_portfolio_slider.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   tb_show( 'Portfolio Slider Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var order_by = jQuery('#TB_window #order_by option:selected').val();
									var order = jQuery('#TB_window #order option:selected').val();
									var number = jQuery('#TB_window #number').val();
									var category = jQuery('#TB_window #category').val();
									var selected_projects = jQuery('#TB_window #selected_projects').val();
									var space_between_images = jQuery('#TB_window #space_between_images option:selected').val();
									var image_size = jQuery('#TB_window #image_size option:selected').val();
									var link_type = jQuery('#TB_window #link_type option:selected').val();
									var lightbox = jQuery('#TB_window #lightbox option:selected').val();
                                    var title_tag = jQuery('#TB_window #title_tag option:selected').val();
									var shortcode = "[portfolio_slider order_by='"+order_by+"' order='"+order+"' number='"+number+"' category='"+category+"' selected_projects='"+selected_projects+"' space_between_images='"+space_between_images+"' lightbox='"+lightbox+"' link_type='"+link_type+"' image_size='"+image_size+"' title_tag='"+title_tag+"']";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_qode_carousel").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_qode_carousel.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
                               colorPicker();
							   tb_show( 'Select Carousel Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								   var carousel = jQuery('#TB_window #carousel').val();
								   var order_by = jQuery('#TB_window #order_by option:selected').val();
								   var order = jQuery('#TB_window #order option:selected').val();                        
								   var shortcode = "[qode_carousel carousel='"+carousel+"' order_by='"+order_by+"' order='"+order+"']";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);
								   tb_remove();
								   return false;
					    		});							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_row").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_row.php", function(data){
							    var form = jQuery(data);
							    form.appendTo('body').hide();
								colorPicker();
							    tb_show( 'Row Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							    jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var css_animation = jQuery('#TB_window #css_animation option:selected').val();
									var text_align = jQuery('#TB_window #text_align option:selected').val();
									var shortcode = "[vc_row row_type='row' text_align='"+text_align+"' css_animation='"+css_animation+"'][vc_column width='1/1']<p>Enter content here</p>[/vc_column][/vc_row]";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_separator").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_separator.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
								 colorPicker();
							   tb_show( 'Separator Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
                                    var type = jQuery('#TB_window #type option:selected').val();
                                    var position = jQuery('#TB_window #position option:selected').val();
                                    var separator_width = jQuery('#TB_window #separator_width').val();
                                    var color = jQuery('#TB_window #color').val();
									var thickness = jQuery('#TB_window #thickness').val();
									var top = jQuery('#TB_window #top').val();
									var bottom = jQuery('#TB_window #bottom').val();
									var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
                                    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
                                    var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
									var shortcode = "[vc_separator type='"+type+"' position='"+position+"' separator_width='"+separator_width+"' color='"+color+"' thickness='"+thickness+"' up='"+top+"' down='"+bottom+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"']";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_social_icons").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_social_icon.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   colorPicker();
							   tb_show( 'Social Icon Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
							   		var type = jQuery('#TB_window #type option:selected').val();
							   		var icon_pack = jQuery('#TB_window #icon_pack option:selected').val();
                                    var fe_icon = jQuery('#TB_window #fe_icon option:selected').val();
                                    var fa_icon = jQuery('#TB_window #fa_icon option:selected').val();
							   		var size = jQuery('#TB_window #size option:selected').val();
							   		var link = jQuery('#TB_window #link').val();
							   		var target = jQuery('#TB_window #target option:selected').val();
							   		var icon_color = jQuery('#TB_window #icon_color').val();
							   		var background_color = jQuery('#TB_window #background_color').val();
							   		var border_color = jQuery('#TB_window #border_color').val();
							   		var icon_hover_color = jQuery('#TB_window #icon_hover_color').val();
							   		var background_hover_color = jQuery('#TB_window #background_hover_color').val();
							   		var border_hover_color = jQuery('#TB_window #border_hover_color').val();
								    var shortcode = "[social_icons type='"+type+"' icon_pack='"+icon_pack+"' fa_icon='"+fa_icon+"' fe_icon='"+fe_icon+"' size='"+size+"' link='"+link+"' target='"+target+"' icon_color='"+icon_color+"' background_color='"+background_color+"' border_color='"+border_color+"' icon_hover_color='"+icon_hover_color+"' background_hover_color='"+background_hover_color+"' border_hover_color='"+border_hover_color+"' /]";
									jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								    return false;
							   });							
							});  
						})

						jQuery("#SC_tabs").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_tabs.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
								 colorPicker();
							   tb_show( 'Icon List Item Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
									var interval = jQuery('#TB_window #interval option:selected').val();
									var tabs_type = jQuery('#TB_window #style option:selected').val();
									var color = jQuery('#TB_window #color').val();
									var background_color = jQuery('#TB_window #background_color').val();
									var border_color = jQuery('#TB_window #border_color').val();
									var tabs_align = jQuery('#TB_window #tabs_align option:selected').val();
									var shortcode = "[vc_tabs interval='"+interval+"' tabs_type='"+tabs_type+"' color='"+color+"' background_color='"+background_color+"' border_color='"+border_color+"' tabs_align='"+tabs_align+"'][vc_tab title='Tab 1' tab_id='001'][/vc_tab][vc_tab title='Tab 2' tab_id='002'][/vc_tab][/vc_tabs]";
									jQuery("#qode_shortcode_form_wrapper").remove()
									ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
									return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_team_simple").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_team_simple.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   colorPicker();
							   tb_show( 'Team Simple Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
                                    var image = jQuery('#TB_window #image').val();
                                    var background_color = jQuery('#TB_window #background_color').val();
                                    var name = jQuery('#TB_window #name').val();
							   		var name_color = jQuery('#TB_window #name_color').val();
							   		var position = jQuery('#TB_window #position').val();
							   		var position_color = jQuery('#TB_window #position_color').val();
							   		var link = jQuery('#TB_window #link').val();
							   		var target = jQuery('#TB_window #target option:selected').val();
								    var shortcode = "[q_team_simple image='"+image+"' background_color='"+background_color+"' name='"+name+"' name_color='"+name_color+"' position='"+position+"' position_color='"+position_color+"' link='"+link+"' target='"+target+"']";
						    		jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								    return false;
							   });							
							});                     
						})

						jQuery("#SC_testimonials").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_testimonials.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   colorPicker();
							   tb_show( 'Testimonial Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
                                    var type = jQuery('#TB_window #type option:selected').val();
                                    var category = jQuery('#TB_window #category').val();
                                    var number = jQuery('#TB_window #number').val();
							   		var text_color = jQuery('#TB_window #text_color').val();
							   		var author_color = jQuery('#TB_window #text_color').val();
							   		var text_align = jQuery('#TB_window #text_align option:selected').val();
							   		var background_color = jQuery('#TB_window #background_color').val();
							   		var border_color = jQuery('#TB_window #border_color').val();
							   		var author_image = jQuery('#TB_window #author_image option:selected').val();
							   		var control_navigation = jQuery('#TB_window #control_navigation option:selected').val();
							   		var control_navigation_color = jQuery('#TB_window #control_navigation_color option:selected').val();
								    var shortcode = "[testimonials type='"+type+"' category='"+category+"' number='"+number+"' text_align='"+text_align+"' text_color='"+text_color+"' author_color='"+author_color+"' background_color='"+background_color+"' border_color='"+border_color+"' author_image='"+author_image+"' control_navigation='"+control_navigation+"' control_navigation_color='"+control_navigation_color+"']";
						    		jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								    return false;
							   });							
							});                     
						})

						jQuery("#SC_unordered_list").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_unordered_list.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   tb_show( 'Unordered Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								   var style = jQuery('#TB_window #style option:selected').val();
								   var number_type = jQuery('#TB_window #number_type').val();
								   var animate = jQuery('#TB_window #animate option:selected').val();
								   var shortcode = "[unordered_list style='" + style + "' number_type='"+number_type+"' animate='"+animate+"']<ul><li>Lorem ipsum</li><li>Lorem ipsum</li><li>Lorem ipsum</li></ul>[/unordered_list]";
								   jQuery("#qode_shortcode_form_wrapper").remove()
								   ed.execCommand('mceInsertContent', false, shortcode);
								   tb_remove();
								   return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})

						jQuery("#SC_video").click(function(){
							jQuery("#qode_shortcode_form_wrapper").remove();
							jQuery.get(url + "/qode_shortcodes_video.php", function(data){
							   var form = jQuery(data);
							   form.appendTo('body').hide();
							   tb_show( 'Video Shortcode', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=qode_shortcode_form_wrapper' );
							   jQuery('#TB_window #qode_insert_shortcode_button').click(function(){
								    var video_link = jQuery('#TB_window #video_link').val();
								    var shortcode = "[vc_video link='"+video_link+"']";
								    jQuery("#qode_shortcode_form_wrapper").remove()
								    ed.execCommand('mceInsertContent', false, shortcode);		   										   										   tb_remove();
								    return false;
							   });							
							});  
							jQuery("#qode_shortcodes_menu_holder").remove();                                    
						})
					})	
				}
            }
         });
      },
      createControl : function(n, cm) {
         return null;
      },
      getInfo : function() {
         return {
            longname : "Shortcodes",
            author : 'Qode Interactive',
            authorurl : 'http://demo.qodeinteractive.com/theme18',
            infourl : 'http://demo.qodeinteractive.com/theme18',
            version : "1.0"
         };
      }
   });
   tinymce.PluginManager.add('qode_shortcodes', tinymce.plugins.qode_shortcodes);
})();