var CanvasOff = (function($, _, is) {

	"use strict";
	
	var $canvasType = $(".canvas-left"),
		appWrapper = $('.forme-container-wrapper'),
		canvasActiviated = false;

	/**
	 * Function to open canvas Type
	 * @param  String canvasType [left|right|top|bottom]
	 */


	var show = function(type){
	    hide();
		switch (type){
			case 'bottom':
				$(".canvas-bottom").addClass('canvas-open');
				break;
            case 'right':
                $(".canvas-right").addClass('canvas-open');
                break;
			case 'left':
                appWrapper.addClass('canvas-open');
                break;
			default:
                appWrapper.addClass('canvas-open');
                break;
		}

        canvasActiviated = type || 'left';
	};

	/**
	 * Function to close canvas Type
	 * @param  String canvasType [left|right|top|bottom]
	 */
	var hide = function(type){
	    var theType = type || canvasActiviated;
        switch (theType){
            case 'bottom':
                $(".canvas-bottom").removeClass('canvas-open');
                break;
            case 'right':
                $(".canvas-right").removeClass('canvas-open');
                break;
            case 'left':
                appWrapper.removeClass('canvas-open');
                break;
            default:
                appWrapper.removeClass('canvas-open');
                break;
        }
	};

	/**
	 * Function to open or close canvas Type
	 * @param  String canvasType [left|right|top|bottom]
	 */
	var toggle = function(type){
        switch (type){
            case 'bottom':
                $(".canvas-bottom").toggleClass('canvas-open');
                break;
            case 'right':
                $(".canvas-right").toggleClass('canvas-open');
                break;
            case 'left':
                appWrapper.toggleClass('canvas-open');
                break;
            default:
                appWrapper.toggleClass('canvas-open');
                break;
        }
	};

	var disable = function(param){
		if(!param)
		{
			$('.canvas-off').each(function(){
				$(this).removeClass(".canvas-open");
			});
		}
	};

	
	// Initialize actions
	
	$('.overlay').on('click', function(){
		hide();
	});
	
    return { 
		//init : init,
		show : show,
		hide : hide,
		toggle : toggle
	};
    
})($, _, is);