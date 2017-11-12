$( function() {
    $( "img" ).draggable();
   
   

  
});

var the_images = [
                
                'assets/Poster_3.png',
                'assets/Poster_4.png',
                'assets/Poster_6.png',
                'assets/Vinyl.png',
                'assets/Poster_9.png',
                'assets/tshirt3.png',
                'assets/piet.png',
                'assets/cool.png',
                'assets/red.png',
                'assets/wow.png',
                'assets/parsons.png',
                'assets/kaz.png',
                'assets/haaas.png',
                'assets/Poster_2.png',
                'assets/Poster_1.png',
                'assets/book.png',



                


                
];

            var createImage = function(nr){
                var img = document.createElement('img');
                img.setAttribute("style", "width: 25%; position:absolute;");
                img.setAttribute("src", the_images[nr]);
                document.getElementById("container").appendChild(img);
                var xy = getRandomPosition(img);
                img.style.top = xy[1] + 'px';
                img.style.left = xy[0] + 'px';
            };


            for (var i=0;i<the_images.length;i++){
                createImage(i);
            };



function getRandomPosition(element) {
 
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - element.clientWidth;
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - element.clientHeight ;

    console.log(element.clientWidth)
    console.log(element.clientHeight)
    var randomX = Math.floor(Math.random()* w);
    var randomY = Math.floor(Math.random() * h);
    
    return [randomX,randomY];
}

