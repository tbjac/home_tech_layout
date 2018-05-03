/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {
		
		var overlay = $('.modal-overlay');
		$('.modal-trigger').each(function(index, event){

			// Declaration des variables
			var modal = $('#' + $(this).attr('data-modal')), 
				close = modal.find('.modal-close');

			// Fonction des suppression de modal
			function removeModal() {
				modal.removeClass('modal-show');

				// A revoir
				if( $('html').hasClass('modal-perspective') ) {
					$('html').removeClass('modal-perspective');
				}
			}

			function removeModalHandler() {
				removeModal();
			}

			$(this).on('click', function(ev){
				ev.preventDefault();
				// console.log('Cool');
				modal.addClass('modal-show');
				overlay.off('click', removeModalHandler);
				overlay.on('click', removeModalHandler);

				if($(this).hasClass('modal-setperspective'))
				{
					setTimeout( function() {
						$('html').addClass('modal-perspective');
					}, 25);
				}
			});

			close.on( 'click', function( ev ) {
				ev.preventDefault();
				ev.stopPropagation();
				removeModalHandler();
			});
		});
	}

	init();
})();