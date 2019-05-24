$(document).ready(function () {

    // keydown function
	$(document).keypress(function (e) {
        var code = e.keyCode;
        if (code == 113 || code == 119 || code == 101 || code == 97 || code == 115 || code == 100 || code == 122 || code == 120 || 
        	code == 99 || code == 32 || code == 39 || code == 102) {
			const audio = $("audio[data-key=" + code + "]");

			audio.get(0).play();
			
        }
	});

});
