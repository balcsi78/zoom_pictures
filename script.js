$(document).ready(function (){

    $('.zoom').each(function() { //minden kép
        $(this).wrap('<div class="zoombox"></div>');
        var src = $(this).attr('src'); //kép url
        $('<img src="' + src + '" class="zoomed">').insertAfter(this); //lemásoljuk a képet az eredti után
    });

    //events

    $('.zoombox').mouseenter(function() { //belép
        console.log('bent');
        $('.zoombox').mousemove(function(event) { //belépés után mozog
            // mérjük meg, hogy hol mozgunk és mennyit
            var offset = $(this).offset();
            var left = event.pageX - offset.left; //vízszintes egérmozgás
            var top = event.pageY - offset.top; //függőleges egérmozgás
            $(this).find('.zoomed').css({ //nagykép pozíciójának változtatása az egér szerint
                top: -top, //negatív értéket
                left: -left,
                opacity: 1 //tűnjön elő
            });

            console.log(left + ", " + top);
        });
    });
    $('.zoombox').mouseleave(function() { //kilép
        $(this).find('.zoomed').css({ //alapállapotba vissza
            opacity: 0 //tűnjön el
        });
    });
});