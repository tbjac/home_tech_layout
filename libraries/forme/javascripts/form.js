// JavaScript Document

var Form = (function($, _, is){
	'use strict';
	
	var addDescription = function(element, message){
		element.closest('.field').find('.description').html(message);
	};
	
	var showMessage = function(element, message){
		element.closest('.field').find('.description').html(message);
	};
	
	var errorField = function(element){
		element.closest('.field').addClass('error');
	};

	var successField = function(element){
		element.closest('.field').addClass('sussess');
		element.next('i').attr('class', 'icon fa fa-check-circle')
	}

	return {
		addDescription: addDescription,
		showMessage: showMessage,
		errorField: errorField,
        successField: successField
};
})($, _, is);