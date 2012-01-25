(function( $ ){
	var arr = [8, 9, 13, 35, 36, 37, 38, 39, 40, 46]; //list of accepted keyCodes ( ex: Arrow keys, delete, return, home)
	var currNumber = "";
	var creditCards = {
		AMEX : {
			Prefix:[34, 37],
			Width:15,
			spriteLoc: 0
		}, VISA : {
			Prefix:4,
			Width:[13,16],
			spriteLoc: 100
		}, MASTERCARD : {
			Prefix:[51,55],
			Width:16,
			spriteLoc: 200
		}, DISCOVER : {
			Prefix:6011,
			Width:16,
			spriteLoc: 300
		}};
		
  var methods = {
    init : function( options ) { 
      // THIS 
    },
    show : function( ) {
      // IS
    },
    hide : function( ) { 
      // GOOD
    },
    update : function( content ) { 
      // !!! 
    }
  };


  $.fn.ccField = function( method ) {
    
		return this.each(function() {
			console.log(creditCards);
			$(this).val("Please Enter Credit Card Number");
			$(this).addClass('placeholderText');
			
			$(this).focus(function() {
				if($(this).val() == "Please Enter Credit Card Number") {
					$(this).removeClass('placeholderText');
					$(this).val('');
				}
			});
			
			$(this).blur(function() {
				if($(this).val() == "") {
					$(this).val("Please Enter Credit Card Number");
					$(this).addClass('placeholderText');
				}
			});
			
			$(this).keypress(function (e) {
				var keyPressed = String.fromCharCode(e.which);
				if (keyPressed.match(/[^0-9 -]/g) &&
				 		!e.ctrlKey && jQuery.inArray(e.which, arr) == -1) {
					return false;
				}
				else {
					currNumber = $(this).val();
					console.log(currNumber);
					return true;
				}
			});
			
			$(this).addClass('ccValidation');
		});
		
		
		/*
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.hotCC' );
    } 
   */
  	
  };
})( jQuery );


$('#ccField').ccField();