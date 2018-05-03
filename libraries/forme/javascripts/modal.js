var Modal = (function($, _, is){
	
	"use strict";
	
	var modals = {};

	var state = "hide";
	
	var config = {
		size: 'modal-medium',
		autoClose: true
	};


	
	var _changeState = function(st){
		state = st;
	};

	var init = function(){
		$('#modal-wrapper .modal').each(function () {
			if($(this).attr('data-modal-name')){
                modals[$(this).attr('data-modal-name')] = $(this);
			}
        });
	};

	var show = function(modal, lconfig){
		_.get(modals, modal).addClass('modal-show');

        $('.modal-overlay').one('click', function(){
            hide(modal);
        });
	};
	
	var hide = function(modal){
        _.get(modals, modal).removeClass('modal-show');
	};
	
	var getState = function(){
		return state;
	};

	
	// Responsive for mobile
	// if(is.mobile()){
	//	modal.addClass('modal-small');
	//}
	
	return {
		init: init,
		hide: hide,
		show: show
	};
})($, _, is);