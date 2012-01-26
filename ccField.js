(function( $ ){
	var prefixes = {};
	var currCard;
	var currWidth, currY, currPrefix;
	var found = false;
	var arr = [8, 9, 13, 35, 36, 37, 38, 39, 40, 46]; //list of accepted keyCodes ( ex: Arrow keys, delete, return, home)
	var currNumber = "";
	var creditCards = {
		AMEX : {
			Prefix:["34", "37"],
			Width:15,
			spriteLoc: 0
		}, VISA : {
			Prefix:["4"],
			Width:[13,16],
			spriteLoc: 100
		}, MASTERCARD : {
			Prefix:["51","55"],
			Width:16,
			spriteLoc: 200
		}, DISCOVER : {
			Prefix: ["6011"],
			Width:16,
			spriteLoc: 300
		}};
		
	function strStartsWith(str, prefix) {
	    return str.indexOf(prefix) === 0;
	}	
	
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
			
			$(this).addClass('ccValidation');
			$(this).val("Please Enter Credit Card Number");
			$(this).addClass('placeholderText');
			
			$(this).focus(function() {
				if($(this).val() == "Please Enter Credit Card Number") {
					$(this).removeClass('placeholderText');
					$(this).val('');
					found =false;
				}
			});
			
			$(this).blur(function() {
				if($(this).val() == "") {
					$(this).val("Please Enter Credit Card Number");
					$(this).addClass('placeholderText');
					found = false;
				}
			});
			
			$(this).keypress(function (e) {
				var keyPressed = String.fromCharCode(e.which);
				if(currNumber < 4) {
					found = false;
				}
				if (keyPressed.match(/[^0-9 -]/g) &&
				 		!e.ctrlKey && jQuery.inArray(e.which, arr) == -1) {
					return false;
				}
				else {
					return true;
				}
			});
			
			$(this).keyup(function() {
					var $thisField = $(this);
					currNumber = $thisField.val().replace(/-/g, "").replace(/ /, "");
					if(!found) {
						$.each(creditCards, function(ccIdx) {
							currWidth = creditCards[ccIdx].Width;
							$.each(this.Prefix, function(prefixIdx) {
								if(strStartsWith(currNumber, this)) {
										found = true;
										currPrefix = this;
										currY = String(creditCards[ccIdx].spriteLoc);
										$thisField.css("background-position", "295px -" + String(creditCards[ccIdx].spriteLoc) + "px");
								}
								else if (currNumber.length >= 4) {
										$thisField.css("background-position", "295px -404px");
								} 
							});
						});
					} else if (currNumber.length >= 4 && !strStartsWith(currNumber, currPrefix)) {
						$thisField.css("background-position", "295px -404px");
					} else if (found && currNumber.length == currWidth && strStartsWith(currNumber, currPrefix)) {
						//add logic to validate
						console.log(Number(currY.substr(0, currY.indexOf("px")))-50);
						currY = $thisField.css("background-position-y");
						$thisField.css("background-position", "295px " + String(Number(currY.substr(0, currY.indexOf("px")))-50) + "px");
					}
					console.log(currWidth + " " + currNumber.length);
			});
			
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