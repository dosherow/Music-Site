
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

    $(document).keypress(function(e){
                // Show an image
                var x = document.querySelector(".wrapper");
                var bodyWidth = x.clientWidth;
  				var bodyHeight = x.clientHeight;
                var new_img =  pictures[Math.floor(Math.random() * pictures.length)];
                var imgtag = $('<img id="randomImg">');
             
               
                imgtag.attr('src',new_img);
                
                $(imgtag).addClass("imgs");
               	$(imgtag).appendTo('#imgArray');
               	count++;
               	 console.log(count);
               	if(count == 10) {
               	$('img:first-child', this).remove();
               	count--;
               }
               


 $('.imgs').each(function(idx, img) {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    $(imgtag).css('left', randPosX);
    $(imgtag).css('top', randPosY);

  });


});


 









   