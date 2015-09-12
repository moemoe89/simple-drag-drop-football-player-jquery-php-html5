$(function($){
	$("#lock").hide();
	$("#totalDrop").val(0);
	var $divField = $('#container-field');
	var totalDrop = $("#totalDrop").val();

	$('.drag')
		.drag("start",function( ev, dd ){

			dd.limit = $divField.offset();
			dd.limit.bottom = dd.limit.top + $divField.outerHeight() - $( this ).outerHeight();
			dd.limit.right = dd.limit.left + $divField.outerWidth() - $( this ).outerWidth();

			var status = $(this).attr('status');
	        var number = $(this).attr('number');
	        if(totalDrop >= 12){
				totalDrop--;
	        	$("#totalDrop").val(totalDrop);
	        	$("#drag"+number).attr('status','0');
	        	$("#back"+number).css("visibility","hidden");

				$( this ).animate({
					top: $("#back"+number).attr('top'),
					left: $("#back"+number).attr('left')
				}, 420 );

		 	} else {
				if(status == 0){
		        	totalDrop++;
		        	$("#totalDrop").val(totalDrop);
		        	$(this).attr('status','1');
		       		$("#back"+number).css("visibility","visible");
		       		
		       		if(totalDrop == 11){
		       			$("#lock").show();
		       		} 
		        }
		        if($("#back"+number).attr('top') == ""){
		        	$("#back"+number).attr('top',dd.originalY);
		        }
		        if($("#back"+number).attr('left') == ""){
		        	$("#back"+number).attr('left',dd.originalX);
		        }
		        
		 	}

		})
		.drag(function( ev, dd ){
			$( this ).css({
				top: Math.min( dd.limit.bottom, Math.max( dd.limit.top, dd.offsetY ) ),
				left: Math.min( dd.limit.right, Math.max( dd.limit.left, dd.offsetX ) )
			});   

			var status = $(this).attr('status');
	        var number = $(this).attr('number');
	        if(totalDrop >= 12){
				totalDrop--;
	        	$("#totalDrop").val(totalDrop);
	        	$("#drag"+number).attr('status','0');
	        	$("#back"+number).css("visibility","hidden");

				$( this ).animate({
					top: $("#back"+number).attr('top'),
					left: $("#back"+number).attr('left')
				}, 420 );

		 	} else {
				if(status == 0){
		        	totalDrop++;
		        	$("#totalDrop").val(totalDrop);
		        	$(this).attr('status','1');
		       		$("#back"+number).css("visibility","visible");
		       		
		       		if(totalDrop == 11){
		       			$("#lock").show();
		       		} 
		        }
		        if($("#back"+number).attr('top') == ""){
		        	$("#back"+number).attr('top',dd.originalY);
		        }
		        if($("#back"+number).attr('left') == ""){
		        	$("#back"+number).attr('left',dd.originalX);
		        }
		        
		 	}

		})
		 .drop('start', function(ev, dd) {
	        
	        var status = $(this).attr('status');
	        var number = $(this).attr('number');
	        if(totalDrop >= 12){
				totalDrop--;
	        	$("#totalDrop").val(totalDrop);
	        	$("#drag"+number).attr('status','0');
	        	$("#back"+number).css("visibility","hidden");

				$( this ).animate({
					top: $("#back"+number).attr('top'),
					left: $("#back"+number).attr('left')
				}, 420 );
		 	} else {
				if(status == 0){
		        	totalDrop++;
		        	$("#totalDrop").val(totalDrop);
		        	$(this).attr('status','1');
		       	    $("#back"+number).css("visibility","visible");
		        }
		        if($("#back"+number).attr('top') == ""){
		        	$("#back"+number).attr('top',dd.originalY);
		        }
		        if($("#back"+number).attr('left') == ""){
		        	$("#back"+number).attr('left',dd.originalX);
		        }
		        
		 	}

	    })
		.drag("end",function( ev, dd ){
			var status = $(this).attr('status');
	        var number = $(this).attr('number');
	        if(totalDrop >= 12){
				totalDrop--;
	        	$("#totalDrop").val(totalDrop);
	        	$("#drag"+number).attr('status','0');
	        	$("#back"+number).css("visibility","hidden");

				$( this ).animate({
					top: $("#back"+number).attr('top'),
					left: $("#back"+number).attr('left')
				}, 420 );

		 	} else {
				if(status == 0){
		        	totalDrop++;
		        	$("#totalDrop").val(totalDrop);
		        	$(this).attr('status','1');
		       		$("#back"+number).css("visibility","visible");
		       		
		       		if(totalDrop == 11){
		       			$("#lock").show();
		       		} 
		        }
		        if($("#back"+number).attr('top') == ""){
		        	$("#back"+number).attr('top',dd.originalY);
		        }
		        if($("#back"+number).attr('left') == ""){
		        	$("#back"+number).attr('left',dd.originalX);
		        }
		        
		 	}
		}) 
		;

		$('.boxclose').click(function(){
		
			var number = $(this).attr('number');

			var status = $("#drag"+number).attr('status');
	        if(status == 1){
	        	totalDrop--;
	        	$("#totalDrop").val(totalDrop);
	        	$("#drag"+number).attr('status','0');
	        	$("#back"+number).css("visibility","hidden");
	        	if(totalDrop < 11){
		       			$("#lock").hide();
		       	} 
	        }

			$( '#drag'+number ).animate({
				top: $(this).attr('top'),
				left: $(this).attr('left')
			}, 420 );
		});

});