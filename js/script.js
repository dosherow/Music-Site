var pictures = new Array();
var count = 0;
pictures[0]="1.jpg"
pictures[1]="2.png"
pictures[2]="3.jpg"
pictures[3]="4.jpg"
pictures[4]="5.png"
pictures[5]="a.jpg"
pictures[6]="b.jpg"
pictures[7]="c.jpg"
pictures[8]="e.jpg"
pictures[9]="f.jpg"

$(document).ready(function () {

    // keydown function
	$(document).keypress(function (e) {
        var code = e.keyCode;
        if (code == 113 || code == 119 || code == 101 || code == 97 || code == 115 || code == 100 || code == 122 || code == 120 || 
        	code == 99 || code == 32 || code == 39 || code == 102) {
			// do proměnné audio si najdeme <audio> element, který má atribut data-key s hodnotou code
			const audio = $("audio[data-key=" + code + "]");

			// jQuery vrátí nalezené jako array, i když je jen jeden, proto si vytáhneme první z té sady
			audio.get(0).play();
			
        }

        


	});

});
