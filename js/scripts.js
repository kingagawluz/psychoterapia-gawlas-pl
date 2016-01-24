(function($){
	"use strict";


	$('[data-bg-image]').each(function(){
		$(this).css({ 'background-image': 'url('+$(this).data('bg-image')+')' });
	});

	$('[data-bg-color]').each(function(){
		$(this).css({ 'background-color': $(this).data('bg-color') });
	});





	// Service group
	$('.tt-el-service-group').each(function(){
		var $block = $(this);
		if( $block.find('.entry-nav a.active').length<1 ){
			$block.find('.entry-nav a').eq(0).addClass('active');
			$block.find('.entry-bg .inner-table.active').removeClass('active');
			$block.find('.entry-bg .inner-table').eq(0).addClass('active');
		}

		$block.find('.entry-nav a').each(function(index){
			$(this).on('click', function(){
				$block.find('.entry-nav a.active').removeClass('active');
				$block.find('.entry-bg .inner-table.active').removeClass('active');

				$(this).addClass('active');
				$block.find('.entry-bg .inner-table').eq(index).addClass('active');
			});
		});

	});



	// Process
	$('.tt-el-process').each(function(){
		var $process = $(this);

		if( $process.find('.entry-nav a.active').length<1 ){
			$process.find('.entry-nav a').eq(0).addClass('active');
		}

		var active_index = $process.find('.entry-nav a').index( $process.find('.entry-nav a.active') );
		$process.find('.entry-viewport .entry-panel.active').removeClass('active');
		$process.find('.entry-viewport .entry-panel').eq(active_index).addClass('active');

		$process.find('.entry-nav a').each(function(index){
			
			$(this).on('click', function(){
				$process.find('.entry-nav a.active').removeClass('active');
				$(this).addClass('active');

				$process.find('.entry-viewport .entry-panel.active').removeClass('active');
				$process.find('.entry-viewport .entry-panel').eq(index).addClass('active');
			});

		});
	});




	// Testimonials
	$('.fullsection-testimonial').each(function(){
		var $this = $(this);

		$this.find('.entry-quotes-nav a').each(function(index){
			
			$(this).on('click', function(){
				$this.find('.entry-quotes-nav a.active').removeClass('active');
				$(this).addClass('active');

				$this.find('.entry-testimonial .entry-item.active').removeClass('active');
				$this.find('.entry-testimonial .entry-item').eq(index).addClass('active');

				$this.find('.author-image').css('background-image', 'url('+$(this).attr('href')+')');

				return false;
			});
		});
	});



	
	if( $('.ms-fullscreen-template').length ){
		var slider = new MasterSlider();

		slider.control('arrows' ,{insertTo:'#masterslider'});	
		slider.control('bullets');	

		slider.setup('masterslider' , {
			width:1024,
			height:768,
			space:5,
			view:'basic',
			layout:'fullscreen',
			fullscreenMargin: 0,
			speed:20
		});
	}



	// Mobile Menu
	$('.nav-menu-icon a').on('click', function(){
		$('#header').find('nav').slideToggle();
		$(this).toggleClass('active');

		if( $(this).hasClass('active') ){
			$('#header').find('nav a').unbind('click').on('click', function(){
				if( $(this).parent().find('>ul').length && $(this).parent().find('>ul').css('display')!='block' ){
					$(this).parent().find('>ul').slideDown();
					return false;
				}
				else{

				}
			});
		}
	});



	$(document).ready(function(){


		// Progress Line
		$('.tt-el-progress').each(function(){
			var $line = $(this);
			
			$line.waypoint(function(direction) {
				$line.find('.current-line').css({
					'width': $line.find('.entry-percent').text()
				});
			},{
				offset: '90%',
				triggerOnce: true
			});
		});


		// Counter
		$('.tt-el-counter').each(function(){
			var $count = $(this);

			$count.find('span.count').counterUp({
				delay: 10, // the delay time in ms
				time: 1000 // the speed time in ms
			});
		});



		// Blockquote carousel
		$('.tt-el-blockquote').each(function(){
			var $block = $(this);

			$block.find('.entry-carousel').owlCarousel({
				stopOnHover : true,
				navigation : true,
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem: true,
				autoHeight : true,
				navigationText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>'
				]
			});
		});


		$('.gallery-slider').each(function(){
			var $gallery = $(this);

			$gallery.owlCarousel({
				stopOnHover : true,
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem: true,
				autoHeight : true
			});
		});


	});

	
	
	$(window).load(function(){
		
		$('.tt-el-portfolio.masonry').each(function(){
			var $folio = $(this);

			$folio.find('.entry-portfolio').isotope({
				itemSelector: '.entry-item',
				masonry: {
					columnWidth: 1
				}
			});

			$folio.find('.entry-filter a').on('click', function(){
				$folio.find('.entry-portfolio').isotope({ filter: $(this).data('filter') });
				$folio.find('.entry-filter a.lined').removeClass('lined');
				$(this).addClass('lined');
			});
		});

	});


})(jQuery);