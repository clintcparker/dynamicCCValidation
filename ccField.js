(function( $ ){

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
			$(this).keypress(function (e) {
				var arr = [8, 9, 13, 35, 36, 37, 38, 39, 40, 46]; //list of accepted keyCodes ( ex: Arrow keys, delete, return, home)
				if (String.fromCharCode(e.which).match(/[^0-9 -]/g) && !e.ctrlKey && jQuery.inArray(e.which, arr) == -1)
					return false;
				else
					return true;
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